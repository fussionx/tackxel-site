// Generates placeholder images for the Tackxel site.
//
// Pipeline: SVG markup (defined inline) -> sharp -> JPG written to /public/images/...
// Re-runnable. Output paths are stable, so once a real photo replaces a placeholder
// at the same path, this script does not overwrite it (it only writes the paths it
// is asked to). Pass --only <key> to regenerate a single placeholder.

import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, "..");
const OUT = join(ROOT, "public", "images");

const xml = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const BRAND = {
  50: "#EEF3FB", 100: "#D6E1F4", 200: "#AEC3E8", 300: "#7E9DD7", 400: "#5278C2",
  500: "#3159A5", 600: "#264784", 700: "#1D376A", 800: "#162954", 900: "#0F1D3D", 950: "#080F22",
};

// Shared chrome rendered on every placeholder so the set reads as one designed system.
// `shift` is a per-image rotation in degrees that subtly varies the grid pattern.
function chrome({ w, h, gradFrom = BRAND[800], gradTo = BRAND[950], shift = 0 }) {
  const gridSize = 48;
  return `
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${gradFrom}"/>
        <stop offset="100%" stop-color="${gradTo}"/>
      </linearGradient>
      <pattern id="grid" x="0" y="0" width="${gridSize}" height="${gridSize}" patternUnits="userSpaceOnUse" patternTransform="rotate(${shift})">
        <path d="M ${gridSize} 0 L 0 0 0 ${gridSize}" fill="none" stroke="${BRAND[400]}" stroke-opacity="0.10" stroke-width="1"/>
      </pattern>
      <radialGradient id="glow" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="${BRAND[500]}" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="${BRAND[500]}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#bg)"/>
    <rect width="${w}" height="${h}" fill="url(#grid)"/>
    <rect width="${w}" height="${h}" fill="url(#glow)"/>
    <!-- top-right corner mark (consistent across set) -->
    <g transform="translate(${w - 36}, 28)" fill="none" stroke="${BRAND[300]}" stroke-width="1.5" stroke-linecap="square">
      <line x1="0" y1="0" x2="14" y2="0"/>
      <line x1="14" y1="0" x2="14" y2="14"/>
    </g>
    <!-- bottom-left corner mark -->
    <g transform="translate(28, ${h - 28})" fill="none" stroke="${BRAND[300]}" stroke-width="1.5" stroke-linecap="square">
      <line x1="0" y1="0" x2="14" y2="0"/>
      <line x1="0" y1="0" x2="0" y2="-14"/>
    </g>
  `;
}

// 600x600 team avatar with bold initials OR a role glyph + caption.
// Pass `initials` for a typographic mark (real people), or `glyph` (raw SVG fragment, drawn at centre) for role placeholders.
function teamSvg({ initials, glyph, caption, gradFrom = BRAND[800], gradTo = BRAND[950], shift = 0 }) {
  const w = 600, h = 600;
  const centre = initials
    ? `<text x="${w/2}" y="${h/2 + 10}" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="220" fill="white" text-anchor="middle" dominant-baseline="central" letter-spacing="-10">${xml(initials)}</text>`
    : `<g transform="translate(${w/2}, ${h/2 - 10})">${glyph}</g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
    ${chrome({ w, h, gradFrom, gradTo, shift })}
    ${centre}
    <text x="${w/2}" y="${h - 64}" font-family="Consolas, 'Courier New', monospace" font-weight="600" font-size="18" fill="${BRAND[300]}" text-anchor="middle" letter-spacing="6">${xml(caption)}</text>
  </svg>`;
}

// ----- ROLE GLYPHS (team placeholders) -----

const glyph = {
  // Pencil at -30deg — designer
  pencil: `
    <g transform="rotate(-30)" fill="none" stroke="white" stroke-width="5" stroke-linejoin="round">
      <rect x="-22" y="-90" width="44" height="160"/>
      <rect x="-22" y="-90" width="44" height="34" fill="${BRAND[300]}" stroke="none"/>
      <line x1="-22" y1="-56" x2="22" y2="-56"/>
      <polygon points="-22,70 0,108 22,70"/>
      <polygon points="-8,90 0,108 8,90" fill="white" stroke="none"/>
    </g>
  `,
  // Curly braces — senior engineer
  curlies: `
    <g fill="none" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
      <path d="M -40 -100 C -80 -100 -80 -50 -100 -10 C -80 30 -80 90 -40 100"/>
      <path d="M 40 -100 C 80 -100 80 -50 100 -10 C 80 30 80 90 40 100"/>
    </g>
  `,
  // Angle brackets — engineer
  angles: `
    <g fill="none" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="-30,-90 -110,0 -30,90"/>
      <polyline points="30,-90 110,0 30,90"/>
    </g>
  `,
  // Up-right arrow — growth / marketing
  arrowUpRight: `
    <g fill="none" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
      <line x1="-90" y1="90" x2="90" y2="-90"/>
      <polyline points="-10,-90 90,-90 90,10"/>
    </g>
  `,
};

// 1200x800 hero image with themed geometric motif + tags.
// `motif` is an SVG string drawn into the centre area; helpers below produce them.
function heroSvg({ category, title, motif, gradFrom = BRAND[800], gradTo = BRAND[950], shift = 0 }) {
  const w = 1200, h = 800;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
    ${chrome({ w, h, gradFrom, gradTo, shift })}
    <g transform="translate(${w/2}, ${h/2 - 60})">${motif}</g>
    <text x="60" y="${h - 60}" font-family="Consolas, 'Courier New', monospace" font-weight="600" font-size="16" fill="${BRAND[300]}" letter-spacing="6">${xml(category)}</text>
    <text x="60" y="${h - 28}" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="28" fill="white" letter-spacing="-0.5">${xml(title)}</text>
  </svg>`;
}

// ----- MOTIFS: each ~360px centered, brand-tinted lines on the dark gradient. -----

const motif = {
  // Stacked containers + signal — Storage IoT
  storage: `
    <g fill="none" stroke="${BRAND[300]}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.95">
      <rect x="-160" y="-30" width="100" height="70" rx="4"/>
      <rect x="-50"  y="-30" width="100" height="70" rx="4"/>
      <rect x="60"   y="-30" width="100" height="70" rx="4"/>
      <rect x="-160" y="50"  width="100" height="70" rx="4" stroke="${BRAND[500]}"/>
      <rect x="-50"  y="50"  width="100" height="70" rx="4"/>
      <rect x="60"   y="50"  width="100" height="70" rx="4"/>
    </g>
    <g fill="${BRAND[300]}" opacity="0.9">
      <circle cx="0"   cy="-110" r="6"/>
      <circle cx="-40" cy="-110" r="3" opacity="0.5"/>
      <circle cx="40"  cy="-110" r="3" opacity="0.5"/>
    </g>
    <g fill="none" stroke="${BRAND[300]}" stroke-width="1.5" opacity="0.5">
      <path d="M -30 -110 Q 0 -140 30 -110"/>
      <path d="M -60 -110 Q 0 -170 60 -110"/>
    </g>
  `,

  // Bars + trendline — Investor SaaS
  investor: `
    <g fill="none" stroke="${BRAND[300]}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="-180" y1="100" x2="180" y2="100"/>
      <rect x="-160" y="30"  width="40" height="70" fill="${BRAND[300]}" fill-opacity="0.15"/>
      <rect x="-100" y="0"   width="40" height="100" fill="${BRAND[300]}" fill-opacity="0.2"/>
      <rect x="-40"  y="-40" width="40" height="140" fill="${BRAND[400]}" fill-opacity="0.3"/>
      <rect x="20"   y="-80" width="40" height="180" fill="${BRAND[400]}" fill-opacity="0.4"/>
      <rect x="80"   y="-110" width="40" height="210" fill="${BRAND[500]}" fill-opacity="0.55"/>
      <polyline points="-140,50 -80,20 -20,-20 40,-60 100,-90" fill="none" stroke="white" stroke-width="3"/>
      <circle cx="100" cy="-90" r="6" fill="white"/>
    </g>
  `,

  // Layered system blocks + connectors — ERP flagship
  erp: `
    <g fill="none" stroke="${BRAND[300]}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="-180" y="-100" width="120" height="60" rx="6"/>
      <rect x="-60"  y="-100" width="120" height="60" rx="6"/>
      <rect x="60"   y="-100" width="120" height="60" rx="6"/>
      <rect x="-100" y="40"   width="200" height="80" rx="6" fill="${BRAND[500]}" fill-opacity="0.18"/>
      <line x1="-120" y1="-40" x2="-50" y2="40"/>
      <line x1="0"    y1="-40" x2="0"   y2="40"/>
      <line x1="120"  y1="-40" x2="50"  y2="40"/>
    </g>
    <g fill="${BRAND[300]}">
      <circle cx="-120" cy="-70" r="4"/>
      <circle cx="0"    cy="-70" r="4"/>
      <circle cx="120"  cy="-70" r="4"/>
    </g>
    <text x="0" y="90" font-family="Consolas, monospace" font-weight="700" font-size="22" fill="white" text-anchor="middle" letter-spacing="3">ERP</text>
  `,

  // Network nodes (deal/investor connections) — Syndication
  syndication: `
    <g fill="none" stroke="${BRAND[300]}" stroke-width="1.8" stroke-linecap="round" opacity="0.7">
      <line x1="-160" y1="-60" x2="0" y2="0"/>
      <line x1="160"  y1="-60" x2="0" y2="0"/>
      <line x1="-180" y1="80"  x2="0" y2="0"/>
      <line x1="180"  y1="80"  x2="0" y2="0"/>
      <line x1="-100" y1="-120" x2="0" y2="0"/>
      <line x1="100"  y1="-120" x2="0" y2="0"/>
      <line x1="0"    y1="140"  x2="0" y2="0"/>
    </g>
    <g fill="${BRAND[300]}">
      <circle cx="-160" cy="-60"  r="10"/>
      <circle cx="160"  cy="-60"  r="10"/>
      <circle cx="-180" cy="80"   r="10"/>
      <circle cx="180"  cy="80"   r="10"/>
      <circle cx="-100" cy="-120" r="8"/>
      <circle cx="100"  cy="-120" r="8"/>
      <circle cx="0"    cy="140"  r="10"/>
    </g>
    <circle cx="0" cy="0" r="22" fill="${BRAND[500]}" stroke="white" stroke-width="3"/>
  `,

  // Phone outline + dots — Mobile service
  mobile: `
    <g fill="none" stroke="${BRAND[300]}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="-70" y="-150" width="140" height="280" rx="20"/>
      <line x1="-30" y1="-130" x2="30" y2="-130"/>
      <rect x="-50" y="-100" width="100" height="70" rx="4" fill="${BRAND[500]}" fill-opacity="0.25"/>
      <line x1="-50" y1="-10"  x2="50" y2="-10"/>
      <line x1="-50" y1="15"   x2="20" y2="15"/>
      <line x1="-50" y1="40"   x2="50" y2="40"/>
      <line x1="-50" y1="65"   x2="30" y2="65"/>
      <circle cx="0" cy="105" r="8"/>
    </g>
  `,

  // Browser frame + grid — Web service
  web: `
    <g fill="none" stroke="${BRAND[300]}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="-200" y="-130" width="400" height="260" rx="8"/>
      <line x1="-200" y1="-100" x2="200" y2="-100"/>
      <circle cx="-180" cy="-115" r="4"/>
      <circle cx="-160" cy="-115" r="4"/>
      <circle cx="-140" cy="-115" r="4"/>
      <rect x="-180" y="-80" width="120" height="80" rx="4" fill="${BRAND[400]}" fill-opacity="0.2"/>
      <rect x="-50"  y="-80" width="120" height="80" rx="4" fill="${BRAND[500]}" fill-opacity="0.3"/>
      <rect x="80"   y="-80" width="100" height="80" rx="4" fill="${BRAND[400]}" fill-opacity="0.2"/>
      <line x1="-180" y1="20"  x2="180" y2="20"/>
      <line x1="-180" y1="50"  x2="120" y2="50"/>
      <line x1="-180" y1="80"  x2="160" y2="80"/>
    </g>
  `,

  // Concentric signal waves + node — IoT
  iot: `
    <g fill="none" stroke="${BRAND[300]}" stroke-width="2" opacity="0.8">
      <path d="M -160 0 Q -160 -90 -100 -90"/>
      <path d="M -100 -90 Q 0 -160 100 -90"/>
      <path d="M 100 -90 Q 160 -90 160 0"/>
      <path d="M -120 -10 Q -120 -60 -80 -60"/>
      <path d="M -80 -60 Q 0 -110 80 -60"/>
      <path d="M 80 -60 Q 120 -60 120 -10"/>
    </g>
    <rect x="-50" y="20" width="100" height="100" rx="8" fill="${BRAND[500]}" fill-opacity="0.3" stroke="${BRAND[300]}" stroke-width="2.5"/>
    <circle cx="0" cy="-10" r="8" fill="${BRAND[300]}"/>
    <g fill="${BRAND[300]}">
      <circle cx="0" cy="70" r="4"/>
      <circle cx="-25" cy="70" r="4" opacity="0.5"/>
      <circle cx="25"  cy="70" r="4" opacity="0.5"/>
    </g>
  `,

  // Node graph (neural network feel) — AI
  ai: `
    <g fill="none" stroke="${BRAND[300]}" stroke-width="1.5" opacity="0.6">
      <line x1="-150" y1="-90" x2="0" y2="-30"/>
      <line x1="-150" y1="-30" x2="0" y2="-30"/>
      <line x1="-150" y1="30"  x2="0" y2="-30"/>
      <line x1="-150" y1="90"  x2="0" y2="-30"/>
      <line x1="-150" y1="-90" x2="0" y2="30"/>
      <line x1="-150" y1="-30" x2="0" y2="30"/>
      <line x1="-150" y1="30"  x2="0" y2="30"/>
      <line x1="-150" y1="90"  x2="0" y2="30"/>
      <line x1="0" y1="-30" x2="150" y2="0"/>
      <line x1="0" y1="30"  x2="150" y2="0"/>
    </g>
    <g fill="${BRAND[300]}">
      <circle cx="-150" cy="-90" r="8"/>
      <circle cx="-150" cy="-30" r="8"/>
      <circle cx="-150" cy="30"  r="8"/>
      <circle cx="-150" cy="90"  r="8"/>
    </g>
    <g fill="${BRAND[500]}" stroke="white" stroke-width="2">
      <circle cx="0" cy="-30" r="12"/>
      <circle cx="0" cy="30"  r="12"/>
    </g>
    <circle cx="150" cy="0" r="14" fill="white"/>
  `,

  // Stacked layers / system architecture — Enterprise
  enterprise: `
    <g fill="none" stroke="${BRAND[300]}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="-180" y="-120" width="360" height="50" rx="6" fill="${BRAND[400]}" fill-opacity="0.15"/>
      <rect x="-180" y="-60"  width="360" height="50" rx="6" fill="${BRAND[500]}" fill-opacity="0.25"/>
      <rect x="-180" y="0"    width="360" height="50" rx="6" fill="${BRAND[500]}" fill-opacity="0.4"/>
      <rect x="-180" y="60"   width="360" height="50" rx="6" fill="${BRAND[400]}" fill-opacity="0.15"/>
    </g>
    <g stroke="${BRAND[300]}" stroke-width="1.5" opacity="0.6">
      <line x1="-60" y1="-95" x2="-60" y2="85"/>
      <line x1="60"  y1="-95" x2="60"  y2="85"/>
    </g>
    <g fill="white" opacity="0.8">
      <circle cx="-60" cy="-95" r="3"/>
      <circle cx="60"  cy="-95" r="3"/>
      <circle cx="-60" cy="85"  r="3"/>
      <circle cx="60"  cy="85"  r="3"/>
    </g>
  `,
};

// ----- IMAGE DEFINITIONS -----

const team = [
  { key: "uzair",     out: "team/uzair.jpg",     initials: "US",            caption: "UZAIR SUFI",        gradFrom: BRAND[700], gradTo: BRAND[950], shift: 0 },
  { key: "designer",  out: "team/designer.jpg",  glyph: glyph.pencil,       caption: "PRODUCT DESIGNER",  gradFrom: BRAND[800], gradTo: BRAND[950], shift: 8 },
  { key: "dev-1",     out: "team/dev-1.jpg",     glyph: glyph.curlies,      caption: "SENIOR ENGINEER",   gradFrom: BRAND[700], gradTo: BRAND[900], shift: -8 },
  { key: "dev-2",     out: "team/dev-2.jpg",     glyph: glyph.angles,       caption: "ENGINEER",          gradFrom: BRAND[800], gradTo: BRAND[950], shift: 4 },
  { key: "marketing", out: "team/marketing.jpg", glyph: glyph.arrowUpRight, caption: "GROWTH",            gradFrom: BRAND[700], gradTo: BRAND[950], shift: -4 },
];

const caseStudies = [
  { key: "cs-storage",     out: "case-studies/storage-iot.jpg",   category: "REAL ESTATE · IOT",   title: "Mobile + IoT for a US storage operator", motif: motif.storage,     gradFrom: BRAND[800], gradTo: BRAND[950], shift: 0 },
  { key: "cs-investor",    out: "case-studies/investor-saas.jpg", category: "PROPTECH · SAAS",     title: "Investor SaaS for real estate agents",   motif: motif.investor,    gradFrom: BRAND[700], gradTo: BRAND[950], shift: 6 },
  { key: "cs-erp",         out: "case-studies/erp.jpg",           category: "MANUFACTURING · ERP", title: "Custom ERP for a US co-manufacturer",    motif: motif.erp,         gradFrom: BRAND[700], gradTo: BRAND[900], shift: -6 },
  { key: "cs-syndication", out: "case-studies/syndication.jpg",   category: "PROPTECH · MARKETPLACE", title: "Real estate investment & syndication", motif: motif.syndication, gradFrom: BRAND[800], gradTo: BRAND[950], shift: 4 },
];

const services = [
  { key: "svc-mobile",     out: "services/mobile.jpg",     category: "SERVICE", title: "Mobile App Development",      motif: motif.mobile,     gradFrom: BRAND[700], gradTo: BRAND[950], shift: 0 },
  { key: "svc-web",        out: "services/web.jpg",        category: "SERVICE", title: "Web Application Development", motif: motif.web,        gradFrom: BRAND[800], gradTo: BRAND[950], shift: 6 },
  { key: "svc-iot",        out: "services/iot.jpg",        category: "SERVICE", title: "IoT & Connected Devices",     motif: motif.iot,        gradFrom: BRAND[700], gradTo: BRAND[900], shift: -6 },
  { key: "svc-ai",         out: "services/ai.jpg",         category: "SERVICE", title: "AI Integration",              motif: motif.ai,         gradFrom: BRAND[800], gradTo: BRAND[950], shift: 4 },
  { key: "svc-enterprise", out: "services/enterprise.jpg", category: "SERVICE", title: "Enterprise Platforms & ERP",  motif: motif.enterprise, gradFrom: BRAND[700], gradTo: BRAND[950], shift: -4 },
];

const ALL = [...team, ...caseStudies, ...services];

async function render(item) {
  const isTeam = team.includes(item);
  const svg = isTeam ? teamSvg(item) : heroSvg(item);
  const outPath = join(OUT, item.out);
  await mkdir(dirname(outPath), { recursive: true });
  await sharp(Buffer.from(svg)).jpeg({ quality: 88, mozjpeg: true }).toFile(outPath);
  console.log(`  wrote ${item.out}`);
}

const onlyArg = process.argv.indexOf("--only");
const only = onlyArg !== -1 ? process.argv[onlyArg + 1] : null;

const work = only ? ALL.filter((i) => i.key === only) : ALL;
if (only && work.length === 0) {
  console.error(`No placeholder with key '${only}'. Available keys: ${ALL.map((i) => i.key).join(", ")}`);
  process.exit(1);
}

console.log(`Generating ${work.length} placeholder${work.length === 1 ? "" : "s"}...`);
for (const item of work) await render(item);
console.log("Done.");
