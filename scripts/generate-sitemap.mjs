// Generate public/sitemap.xml from the real route sources.
//
// Runs as a prebuild step (see package.json "build"). It reads the canonical
// URL, the service-page slugs and the project ids straight from source so the
// sitemap never drifts from the app. Only indexable URLs are listed — the
// privacy policy is noindex and is intentionally excluded.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const SITE_URL = "https://www.labbyakglass.com";

function read(rel) {
  return readFileSync(resolve(root, rel), "utf8");
}

// Extract service-page slugs: `slug: "aluminium-windows-lahore",`
const servicePagesSrc = read("config/servicePages.ts");
const serviceSlugs = [...servicePagesSrc.matchAll(/slug:\s*"([^"]+)"/g)].map(
  (m) => m[1],
);

// Extract project ids: `id: "p1",`
const dataSrc = read("data.ts");
const projectsBlock = dataSrc.slice(
  dataSrc.indexOf("export const projects"),
  dataSrc.indexOf("export const team"),
);
const projectIds = [...projectsBlock.matchAll(/id:\s*"(p\d+)"/g)].map(
  (m) => m[1],
);

// Static, indexable routes (privacy-policy is noindex → excluded).
const staticPaths = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/products",
  "/team",
  "/contact",
];

const urls = [
  ...staticPaths,
  ...serviceSlugs.map((s) => `/${s}`),
  ...projectIds.map((id) => `/projects/${id}`),
];

const today = new Date().toISOString().slice(0, 10);

function priorityFor(path) {
  if (path === "/") return "1.0";
  if (serviceSlugs.some((s) => path === `/${s}`)) return "0.9";
  if (["/services", "/projects", "/contact"].includes(path)) return "0.8";
  return "0.7";
}

const body = urls
  .map(
    (p) =>
      `  <url>\n    <loc>${SITE_URL}${p === "/" ? "/" : p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priorityFor(p)}</priority>\n  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

writeFileSync(resolve(root, "public/sitemap.xml"), xml, "utf8");
console.log(
  `sitemap.xml written: ${urls.length} URLs (${serviceSlugs.length} service pages, ${projectIds.length} projects).`,
);
