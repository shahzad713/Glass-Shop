// Build-time responsive image optimizer for the site payload.
// Scans source files for every referenced /public image path, emits AVIF + WebP
// variants at widths sized to real rendered dimensions, into a sibling
// `optimized/` folder next to each original. Originals are left untouched
// (SEO / fallback). Writes config/imageManifest.json so OptimizedImage knows
// which variants exist per source path.
//
// Discovery is text-based (regex over source) rather than importing data.ts —
// the TS modules use "@/..." path aliases that plain Node cannot resolve, so a
// dynamic import silently skips every card image. Scanning the text is
// deterministic and catches every referenced asset.
//
// Usage: node scripts/optimize-images.mjs
// Requires: sharp (devDependency, build-time only — never shipped to client).

import sharp from "sharp";
import { mkdir, stat, writeFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, extname, basename } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUB = join(ROOT, "public");

// Files that reference public image assets by literal path.
const SOURCE_FILES = [
  "data.ts",
  "config/servicePages.ts",
  "components/schema.ts",
  "pages/Hero.tsx",
  "pages/About.tsx",
];

// The full-bleed LCP hero. Sized for mobile ~430 CSS *2 up to desktop 1920.
const HERO_IMAGES = new Set(["/home-page.jpg"]);
const HERO_WIDTHS = [640, 960, 1280, 1920];
// Cards render ~200-400px CSS (2-col mobile / 3-col desktop). 480 covers 2x
// mobile, 768 desktop card @2x, 1024 large / detail-page use.
const CARD_WIDTHS = [480, 768, 1024];

const AVIF = { quality: 55, effort: 4 };
const WEBP = { quality: 72 };

// Raster formats worth re-encoding. SVG is vector (skip); tiny icons excluded
// by living outside the scanned source set.
const RASTER = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

// --- Discovery: scan source files for /public image path literals ----------
const IMG_RE = /["'`](\/[^"'`]+?\.(?:png|jpe?g|webp|avif))["'`]/gi;
const found = new Set();
for (const rel of SOURCE_FILES) {
  const abs = join(ROOT, rel);
  if (!existsSync(abs)) continue;
  const text = await readFile(abs, "utf8");
  let m;
  while ((m = IMG_RE.exec(text))) found.add(m[1]);
}

const heroSet = new Set([...found].filter((p) => HERO_IMAGES.has(p)));
for (const h of HERO_IMAGES) heroSet.add(h); // ensure hero even if not matched
const cardSet = new Set([...found].filter((p) => !HERO_IMAGES.has(p)));

console.log(`Discovered ${found.size} referenced images ` +
  `(${heroSet.size} hero, ${cardSet.size} card).`);

// --- Variant generation ----------------------------------------------------
async function variants(absSrc, widths) {
  const ext = extname(absSrc);
  const name = basename(absSrc, ext);
  const dir = join(dirname(absSrc), "optimized");
  await mkdir(dir, { recursive: true });

  const meta = await sharp(absSrc).metadata();
  const intrinsic = meta.width || Math.max(...widths);
  // Never upscale beyond intrinsic width; always keep at least one width.
  let useWidths = [...new Set(widths.map((w) => Math.min(w, intrinsic)))].sort(
    (a, b) => a - b,
  );
  if (!useWidths.length) useWidths = [intrinsic];

  let newTotal = 0;
  const origSize = (await stat(absSrc)).size;
  for (const w of useWidths) {
    for (const [fmt, opts] of [["avif", AVIF], ["webp", WEBP]]) {
      const out = join(dir, `${name}-${w}.${fmt}`);
      const pipe = sharp(absSrc).resize({ width: w, withoutEnlargement: true });
      await (fmt === "avif" ? pipe.avif(opts) : pipe.webp(opts)).toFile(out);
      newTotal += (await stat(out)).size;
    }
  }
  return { name, origSize, newTotal, widths: useWidths };
}

let totalOrig = 0;
let totalNew = 0;
const rows = [];
const manifest = {};

for (const [set, widths, label] of [
  [heroSet, HERO_WIDTHS, "hero"],
  [cardSet, CARD_WIDTHS, "card"],
]) {
  for (const rel of set) {
    const abs = join(PUB, rel.replace(/^\//, ""));
    if (!existsSync(abs)) {
      console.warn(`SKIP missing: ${rel}`);
      continue;
    }
    const ext = extname(abs).toLowerCase();
    if (!RASTER.has(ext)) continue;
    const r = await variants(abs, widths);
    totalOrig += r.origSize;
    totalNew += r.newTotal;
    const relDir = dirname(rel); // e.g. /images/glass-mirrors
    manifest[rel] = {
      base: `${relDir === "/" ? "" : relDir}/optimized/${r.name}`,
      widths: r.widths,
    };
    rows.push(
      `${label.padEnd(4)} ${r.name.padEnd(34)} ` +
      `${(r.origSize / 1024).toFixed(0).padStart(5)}KB -> ` +
      `${(r.newTotal / 1024).toFixed(0).padStart(5)}KB all-variants ` +
      `(${r.widths.join(",")})`,
    );
  }
}

// Stable key order for a clean, diff-friendly manifest.
const ordered = {};
for (const k of Object.keys(manifest).sort()) ordered[k] = manifest[k];

await writeFile(
  join(ROOT, "config", "imageManifest.json"),
  JSON.stringify(ordered, null, 2) + "\n",
);

console.log(rows.sort().join("\n"));
console.log(
  `\nManifest entries: ${Object.keys(ordered).length}. ` +
  `Originals ${(totalOrig / 1048576).toFixed(2)} MB -> ` +
  `all-variants ${(totalNew / 1048576).toFixed(2)} MB.`,
);
console.log(
  "Note: browsers fetch ONE variant per image, so real transfer is far " +
  "below the all-variant total.",
);
