// One-shot favicon generator.
//   Reads public/favicon-source.png.png, crops to the head, and writes:
//     src/app/favicon.ico          (multi-size: 16, 32, 48)
//     src/app/icon.png             (32x32 — Next auto-injects <link rel="icon">)
//     src/app/apple-icon.png       (180x180 on white — Next auto-injects apple-touch-icon)
//
// Run: node scripts/gen-favicon.mjs
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const SRC = join("public", "favicon-source.png.png");
const OUT = join("src", "app");

const meta = await sharp(SRC).metadata();
console.log(`Source: ${meta.width}x${meta.height} ${meta.format} (channels=${meta.channels})`);

// Head crop: a square containing the head + headphones, top-aligned, centered
// horizontally. side = ~55% of source height — captures the head with a touch
// of shoulder so the icon isn't claustrophobic.
const sideTarget = Math.round(meta.height * 0.55);
const side = Math.min(sideTarget, meta.width, meta.height);
const left = Math.max(0, Math.round((meta.width - side) / 2));
const top = 0;
console.log(`Head crop: ${side}x${side} at (${left}, ${top})`);

// Reusable cropped pipeline.
const head = () =>
  sharp(SRC).extract({ left, top, width: side, height: side });

// Resize -> PNG buffer (transparent bg).
async function pngAt(size) {
  return head()
    .resize(size, size, { kernel: sharp.kernel.lanczos3, fit: "cover" })
    .png()
    .toBuffer();
}

// Apple touch icon: solid white background (iOS rounds the corners and shows the
// home-screen wallpaper through transparent pixels, which looks bad).
async function applePngAt(size) {
  return head()
    .resize(size, size, { kernel: sharp.kernel.lanczos3, fit: "cover" })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .png()
    .toBuffer();
}

const png16 = await pngAt(16);
const png32 = await pngAt(32);
const png48 = await pngAt(48);
const apple180 = await applePngAt(180);

writeFileSync(join(OUT, "icon.png"), png32);
console.log(`Wrote icon.png (32x32) — ${png32.length} bytes`);

writeFileSync(join(OUT, "apple-icon.png"), apple180);
console.log(`Wrote apple-icon.png (180x180) — ${apple180.length} bytes`);

const ico = await pngToIco([png16, png32, png48]);
writeFileSync(join(OUT, "favicon.ico"), ico);
console.log(`Wrote favicon.ico (16+32+48) — ${ico.length} bytes`);

// Also write a 4x-magnified 16x16 preview into a temp scratch file so we can
// eyeball clarity at "real" pixel density without squinting.
const preview = await sharp(png16)
  .resize(128, 128, { kernel: sharp.kernel.nearest })
  .png()
  .toBuffer();
writeFileSync(join("scripts", "favicon-16-preview-8x.png"), preview);
console.log(`Wrote scripts/favicon-16-preview-8x.png (preview of 16x16 @ 8x)`);
