// scripts/generate-images.mjs
// Generates a flat garment illustration for every catalogue item, so the site
// ships with real imagery and no external image host. Run: node scripts/generate-images.mjs

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "..", "public", "items");
mkdirSync(outDir, { recursive: true });

// Palette per garment, keyed by catalogue id.
const ITEMS = [
  { id: "rp-001", kind: "coat", base: "#3b3f46", accent: "#2a2d33" },
  { id: "rp-002", kind: "jacket", base: "#2f4a6b", accent: "#243a55" },
  { id: "rp-003", kind: "knit", base: "#d8cbb4", accent: "#c4b59b" },
  { id: "rp-004", kind: "trousers", base: "#2b3550", accent: "#212a40" },
  { id: "rp-005", kind: "shirt", base: "#f2f2ee", accent: "#dcdcd4" },
  { id: "rp-006", kind: "dress", base: "#8fa88f", accent: "#7a947a" },
  { id: "rp-007", kind: "jacket", base: "#9c5a3c", accent: "#82492f" },
  { id: "rp-008", kind: "scarf", base: "#c9a97a", accent: "#b3936a" },
  { id: "rp-009", kind: "trousers", base: "#4a6b8a", accent: "#3b566f" },
  { id: "rp-010", kind: "shirt", base: "#bcd4e6", accent: "#a3c0d6" },
  { id: "rp-011", kind: "gilet", base: "#4a5540", accent: "#3b4433" },
  { id: "rp-012", kind: "dress", base: "#22242a", accent: "#17181c" },
];

const W = 800;
const H = 1000;

function shape(kind, base, accent) {
  switch (kind) {
    case "coat":
      return `
        <path d="M300 250 L500 250 L560 330 L540 900 L260 900 L240 330 Z" fill="${base}"/>
        <path d="M400 250 L400 900" stroke="${accent}" stroke-width="6"/>
        <path d="M300 250 L400 330 L500 250" fill="none" stroke="${accent}" stroke-width="8"/>
        <circle cx="400" cy="420" r="7" fill="${accent}"/>
        <circle cx="400" cy="520" r="7" fill="${accent}"/>
        <circle cx="400" cy="620" r="7" fill="${accent}"/>
        <path d="M300 250 L240 330 L260 900" fill="none" stroke="${accent}" stroke-width="5"/>
        <path d="M500 250 L560 330 L540 900" fill="none" stroke="${accent}" stroke-width="5"/>`;
    case "jacket":
      return `
        <path d="M310 260 L490 260 L550 340 L530 780 L270 780 L250 340 Z" fill="${base}"/>
        <path d="M400 260 L400 780" stroke="${accent}" stroke-width="6"/>
        <path d="M310 260 L400 340 L490 260" fill="none" stroke="${accent}" stroke-width="8"/>
        <rect x="330" y="420" width="60" height="70" rx="6" fill="${accent}"/>
        <rect x="410" y="420" width="60" height="70" rx="6" fill="${accent}"/>
        <path d="M310 260 L250 340 L270 780" fill="none" stroke="${accent}" stroke-width="5"/>
        <path d="M490 260 L550 340 L530 780" fill="none" stroke="${accent}" stroke-width="5"/>`;
    case "knit":
      return `
        <path d="M300 280 L500 280 L560 360 L540 700 L260 700 L240 360 Z" fill="${base}"/>
        <path d="M300 280 L240 360 L200 520 L250 540 L280 400" fill="${base}"/>
        <path d="M500 280 L560 360 L600 520 L550 540 L520 400" fill="${base}"/>
        <path d="M400 280 L400 700" stroke="${accent}" stroke-width="4" stroke-dasharray="10 8"/>
        <path d="M300 280 L400 350 L500 280" fill="none" stroke="${accent}" stroke-width="8"/>`;
    case "trousers":
      return `
        <path d="M300 260 L500 260 L520 900 L420 900 L400 520 L380 900 L280 900 Z" fill="${base}"/>
        <path d="M300 260 L500 260 L500 320 L300 320 Z" fill="${accent}"/>
        <path d="M400 320 L400 520" stroke="${accent}" stroke-width="5"/>
        <path d="M330 340 L330 420" stroke="${accent}" stroke-width="4"/>
        <path d="M470 340 L470 420" stroke="${accent}" stroke-width="4"/>`;
    case "shirt":
      return `
        <path d="M310 270 L490 270 L550 350 L530 720 L270 720 L250 350 Z" fill="${base}"/>
        <path d="M310 270 L240 350 L210 500 L255 520 L285 390" fill="${base}"/>
        <path d="M490 270 L560 350 L590 500 L545 520 L515 390" fill="${base}"/>
        <path d="M370 270 L400 340 L430 270" fill="${accent}"/>
        <path d="M400 340 L400 720" stroke="${accent}" stroke-width="4"/>
        <circle cx="400" cy="420" r="6" fill="${accent}"/>
        <circle cx="400" cy="500" r="6" fill="${accent}"/>
        <circle cx="400" cy="580" r="6" fill="${accent}"/>`;
    case "dress":
      return `
        <path d="M340 260 L460 260 L480 380 L560 880 L240 880 L320 380 Z" fill="${base}"/>
        <path d="M340 260 L320 380" stroke="${accent}" stroke-width="5"/>
        <path d="M460 260 L480 380" stroke="${accent}" stroke-width="5"/>
        <path d="M340 260 L400 300 L460 260" fill="none" stroke="${accent}" stroke-width="7"/>
        <path d="M320 380 L480 380" stroke="${accent}" stroke-width="5"/>`;
    case "scarf":
      return `
        <path d="M330 240 L470 240 L470 860 L330 860 Z" fill="${base}"/>
        <path d="M330 240 L470 240 L470 300 L330 300 Z" fill="${accent}"/>
        <path d="M330 800 L470 800 L470 860 L330 860 Z" fill="${accent}"/>
        ${Array.from({ length: 9 }, (_, i) => `<path d="M${340 + i * 15} 860 L${340 + i * 15} 900" stroke="${accent}" stroke-width="4"/>`).join("")}`;
    case "gilet":
      return `
        <path d="M320 270 L480 270 L530 350 L510 760 L290 760 L270 350 Z" fill="${base}"/>
        <path d="M400 270 L400 760" stroke="${accent}" stroke-width="6"/>
        <path d="M320 270 L400 340 L480 270" fill="none" stroke="${accent}" stroke-width="8"/>
        <path d="M300 380 L500 380" stroke="${accent}" stroke-width="4"/>
        <path d="M300 460 L500 460" stroke="${accent}" stroke-width="4"/>
        <path d="M300 540 L500 540" stroke="${accent}" stroke-width="4"/>
        <path d="M300 620 L500 620" stroke="${accent}" stroke-width="4"/>`;
    default:
      return `<rect x="300" y="300" width="200" height="400" fill="${base}"/>`;
  }
}

function svg(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f7f5f0"/>
      <stop offset="100%" stop-color="#e9e5dc"/>
    </linearGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="#000" flood-opacity="0.14"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <g filter="url(#soft)">${shape(item.kind, item.base, item.accent)}</g>
</svg>`;
}

for (const item of ITEMS) {
  writeFileSync(join(outDir, `${item.id}.svg`), svg(item), "utf8");
}

console.log(`wrote ${ITEMS.length} garment illustrations to public/items`);