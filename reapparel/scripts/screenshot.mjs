// scripts/screenshot.mjs
import { chromium } from "playwright";

const shots = [
  ["/", "home"],
  ["/apparel", "shop"],
  ["/apparel/rp-001", "detail"],
  ["/submit", "submit"],
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

for (const [path, name] of shots) {
  await page.goto(`https://reapparel.vercel.app${path}`, { waitUntil: "networkidle" });
  await page.screenshot({ path: `shots/${name}.png`, fullPage: false });
  console.log("captured", name);
}

await browser.close();