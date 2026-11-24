// scripts/make-logo-assets.mjs
//
// The supplied logo is a single lockup: icon, "REAPPAREL." wordmark and the
// "Reimagine. Renew. Rewear." tagline stacked in one PNG. Cropping it to a
// square icon threw the wordmark away, which is why the name was unreadable in
// the header. This splits the lockup into the pieces the UI actually needs.
//
// Run: node scripts/make-logo-assets.mjs

import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

const PUBLIC = path.resolve("public");
const SRC = path.join(PUBLIC, "logo-mark.png");

if (!existsSync(SRC)) {
  console.error(`Missing ${SRC}`);
  process.exit(1);
}

// Band boundaries measured from the source lockup (4010 x 2762).
const BANDS = {
  icon: { top: 1, bottom: 1897 },
  wordmark: { top: 1956, bottom: 2431 },
  tagline: { top: 2485, bottom: 2750 },
};

const PAD = 8;

function crop(name, band, outWidth) {
  const height = band.bottom - band.top + 1;
  const out = path.join(PUBLIC, name);
  execFileSync(
    "python",
    [
      "-c",
      `
from PIL import Image
im = Image.open(r"${SRC}").convert("RGBA")
w, h = im.size
top = max(0, ${band.top} - ${PAD})
bottom = min(h, ${band.bottom} + ${PAD})
box = (0, top, w, bottom)
crop = im.crop(box)
# trim fully transparent columns so the asset has no dead side margins
alpha = crop.getchannel("A")
bbox = alpha.getbbox()
if bbox:
    crop = crop.crop(bbox)
if ${outWidth} > 0:
    ratio = ${outWidth} / crop.width
    crop = crop.resize((int(crop.width * ratio), int(crop.height * ratio)), Image.LANCZOS)
crop.save(r"${out}", optimize=True)
print(f"  ${name}: {crop.size[0]}x{crop.size[1]}")
`,
    ],
    { stdio: "inherit" }
  );
}

console.log("Splitting the logo lockup:");
crop("logo-icon.png", BANDS.icon, 512);
crop("logo-wordmark.png", BANDS.wordmark, 1200);
crop("logo-tagline.png", BANDS.tagline, 900);
crop("logo-lockup.png", { top: BANDS.icon.top, bottom: BANDS.tagline.bottom }, 1600);
console.log("Done.");
