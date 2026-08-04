// Zero-dependency favicon rasterizer for the Labbyak mark.
// Renders the same geometry as public/favicon.svg (64x64 space) with 4x4
// supersampled anti-aliasing, emits PNGs via built-in zlib, and an .ico that
// embeds PNG frames. No external image dependency.
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUB = join(ROOT, "public");

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const CHARCOAL = hex("#0B1F2A");
const GLASS = hex("#55B6D2");
const ALU = hex("#B8C2C8");
const WHITE = [255, 255, 255];

// point-in tests in 64-unit space
const inRect = (x, y, rx, ry, w, h) => x >= rx && x < rx + w && y >= ry && y < ry + h;
function inRound(x, y, rx, ry, w, h, r) {
  if (!inRect(x, y, rx, ry, w, h)) return false;
  const cx = Math.min(Math.max(x, rx + r), rx + w - r);
  const cy = Math.min(Math.max(y, ry + r), ry + h - r);
  const dx = x - cx, dy = y - cy;
  return dx * dx + dy * dy <= r * r;
}
const over = (dst, src, a) => dst.map((d, i) => Math.round(src[i] * a + d * (1 - a)));

// returns [r,g,b,a(0..1)] for a sample point in 64-space
// Interlocking L+G monogram over a glass panel (matches public/favicon.svg).
function sample(x, y) {
  if (!inRound(x, y, 0, 0, 64, 64, 14)) return [0, 0, 0, 0]; // transparent tile corners
  let c = CHARCOAL.slice();
  // aluminium rim
  if (inRound(x, y, 13, 11, 38, 42, 4)) c = ALU.slice();
  // glass panel
  if (inRound(x, y, 14.5, 12.5, 35, 39, 3)) {
    c = GLASS.slice();
    // diagonal reflection streak: band around line x + y = 34 (64-space)
    const d = x + y;
    if (d >= 26 && d <= 42) c = over(c, WHITE, 0.20);
  }
  // L (lower-left): stem + foot
  if (
    inRect(x, y, 18, 18, 6.5, 24) ||
    inRect(x, y, 18, 35.5, 13, 6.5)
  ) c = CHARCOAL.slice();
  // G (upper-right): top bar, right stem, bottom return, inward tongue
  if (
    inRect(x, y, 29, 18, 17, 6) ||
    inRect(x, y, 40, 18, 6, 20) ||
    inRect(x, y, 34, 32, 12, 6) ||
    inRect(x, y, 37.5, 27.5, 8.5, 5)
  ) c = CHARCOAL.slice();
  return [c[0], c[1], c[2], 1];
}

function render(size) {
  const SS = 4; // supersampling
  const buf = Buffer.alloc(size * size * 4);
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const ux = ((px + (sx + 0.5) / SS) / size) * 64;
          const uy = ((py + (sy + 0.5) / SS) / size) * 64;
          const [sr, sg, sb, sa] = sample(ux, uy);
          r += sr * sa; g += sg * sa; b += sb * sa; a += sa;
        }
      }
      const n = SS * SS;
      const o = (py * size + px) * 4;
      const al = a / n;
      buf[o] = al ? Math.round(r / a) : 0;
      buf[o + 1] = al ? Math.round(g / a) : 0;
      buf[o + 2] = al ? Math.round(b / a) : 0;
      buf[o + 3] = Math.round(al * 255);
    }
  }
  return buf;
}

// --- minimal PNG encoder ---
const CRC = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return (buf) => {
    let c = 0xffffffff;
    for (const byte of buf) c = t[(c ^ byte) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  };
})();
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(CRC(td));
  return Buffer.concat([len, td, crc]);
}
function png(size, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0; // filter none
    rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// --- ICO embedding PNG frames ---
function ico(frames) {
  const head = Buffer.alloc(6 + 16 * frames.length);
  head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(frames.length, 4);
  let offset = head.length;
  const bodies = [];
  frames.forEach((f, i) => {
    const e = 6 + i * 16;
    head[e] = f.size >= 256 ? 0 : f.size;
    head[e + 1] = f.size >= 256 ? 0 : f.size;
    head[e + 2] = 0; head[e + 3] = 0;
    head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6);
    head.writeUInt32LE(f.png.length, e + 8);
    head.writeUInt32LE(offset, e + 12);
    offset += f.png.length; bodies.push(f.png);
  });
  return Buffer.concat([head, ...bodies]);
}

mkdirSync(PUB, { recursive: true });
const targets = [
  ["favicon-16x16.png", 16], ["favicon-32x32.png", 32],
  ["apple-touch-icon.png", 180],
  ["android-chrome-192x192.png", 192], ["android-chrome-512x512.png", 512],
];
const cache = {};
for (const [name, size] of targets) {
  const rgba = render(size); cache[size] = rgba;
  writeFileSync(join(PUB, name), png(size, rgba));
  console.log("wrote", name);
}
const icoFrames = [16, 32, 48].map((s) => ({ size: s, png: png(s, cache[s] || render(s)) }));
writeFileSync(join(PUB, "favicon.ico"), ico(icoFrames));
console.log("wrote favicon.ico");
