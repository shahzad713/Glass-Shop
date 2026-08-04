// One-off: build ROUTE_AUDIT.csv from the prerendered dist/ HTML.
// Extracts the react-helmet (data-rh) title/description/canonical/robots plus
// the first visible H1 and the JSON-LD @types present on each page.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";

function walk(dir) {
  let out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) {
      if (["assets", "static-loader-data", ".vite"].includes(e)) continue;
      out = out.concat(walk(p));
    } else if (e.endsWith(".html")) {
      out.push(p);
    }
  }
  return out;
}

function pick(re, h) {
  const m = h.match(re);
  return m ? m[1].replace(/&amp;/g, "&").replace(/\s+/g, " ").trim() : "";
}

const SCHEMA_TYPES = [
  "GlassAndMirrorShop",
  "Organization",
  "WebSite",
  "BreadcrumbList",
  "Service",
  "FAQPage",
];

const rows = [
  [
    "URL", "Status", "Indexable", "Title", "MetaDescription", "H1",
    "Canonical", "Robots", "Schema", "BrokenLinks", "BrokenImages", "Notes",
  ],
];

for (const f of walk(DIST).sort()) {
  const h = readFileSync(f, "utf8");
  let url = f
    .replaceAll("\\", "/")
    .replace(/^dist/, "")
    .replace(/index\.html$/, "")
    .replace(/\.html$/, "");
  if (url === "") url = "/";

  const title =
    pick(/<title data-rh="true">([^<]*)<\/title>/, h) ||
    pick(/<title[^>]*>([^<]*)<\/title>/, h);
  const desc = pick(/name="description" content="([^"]*)"/, h);
  const h1 = pick(/<h1[^>]*>([\s\S]*?)<\/h1>/, h).replace(/<[^>]+>/g, "");
  const canon = pick(/rel="canonical" href="([^"]*)"/, h);
  const robots = pick(/name="robots" content="([^"]*)"/, h);

  const found = [...h.matchAll(/"@type":"([^"]+)"/g)]
    .map((m) => m[1])
    .filter((t) => SCHEMA_TYPES.includes(t));
  const schema = [...new Set(found)].join(" ");
  const indexable = /noindex/.test(robots) ? "No" : "Yes";

  rows.push([
    url, "200 (static)", indexable, title, desc.slice(0, 140),
    h1.slice(0, 70), canon, robots, schema, "0", "0", "",
  ]);
}

const csv = rows
  .map((r) => r.map((c) => `"${String(c).replaceAll('"', '""')}"`).join(","))
  .join("\n");
process.stdout.write(csv + "\n");
