// Renders brand/linkedin/banners.html to PNGs at exact LinkedIn dimensions.
//
//   npm i -D playwright && node brand/linkedin/render.mjs && npm un playwright
//
// Playwright is deliberately NOT a dependency of this project: it is only
// needed to regenerate these two images, and keeping it out of package.json
// stops Vercel downloading a browser driver on every production build.
// Each banner is drawn at 2x and downsampled with Lanczos, which gives much
// cleaner type edges than rendering straight at 1x.
import { chromium } from "playwright";
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));

// Exact platform sizes, deliberately. LinkedIn builds its own derivatives from
// whatever it is handed, so the least-mangled result comes from matching the
// documented dimensions rather than oversampling: 1200x627 is its link-preview
// spec (1.9139:1) and 1584x396 the profile cover. An earlier 2x version of the
// Featured card only gave LinkedIn more to rescale, so it is gone.
const TARGETS = [
  { id: "cover", file: "chystyi-linkedin-cover.png", w: 1584, h: 396 },
  { id: "featured", file: "chystyi-linkedin-featured-audit.png", w: 1200, h: 627 },
];

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 2 });

await page.goto("file:///" + join(here, "banners.html").replace(/\\/g, "/"));
// Set by the page once webfonts have loaded and the nebula has been painted.
await page.waitForFunction(() => document.documentElement.dataset.ready === "1");

for (const t of TARGETS) {
  const raw = await page.locator("#" + t.id).screenshot();
  const out = join(here, t.file);
  await sharp(raw)
    .resize(t.w, t.h, { kernel: "lanczos3" })
    .png({ compressionLevel: 9 })
    .toFile(out);
  const meta = await sharp(out).metadata();
  console.log(`${t.file}  ${meta.width}x${meta.height}`);
}

await browser.close();
