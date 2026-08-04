import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
const srcFiles = ["data.ts","config/servicePages.ts","config/business.ts","config/areas.ts","config/content.ts"];
const refs = new Set();
for (const f of srcFiles) {
  if(!existsSync(f)) continue;
  const t = readFileSync(f,"utf8");
  for (const m of t.matchAll(/["'`](\/[^"'`]+\.(?:jpg|jpeg|png|webp|avif|svg))["'`]/gi)) refs.add(m[1]);
}
let missing=0, ok=0;
for (const r of [...refs].sort()) {
  const p = join("public", decodeURIComponent(r));
  if (existsSync(p)) { ok++; } else { console.log("MISSING:", r); missing++; }
}
console.log(`\nimage refs: ${refs.size}  ok: ${ok}  missing: ${missing}`);
