# Tackxel — Software Engineering Firm

A Next.js 15 marketing site for Tackxel, designed in the spirit of modern technology firms like Stripe, Linear, and Vercel.

## Design System

**Typography**
- Inter (body) — `font-sans`
- Inter Tight (display headings) — `font-display`
- JetBrains Mono (technical micro-text) — `font-mono`

**Colors**
- Brand blue scale: `brand-50` → `brand-950`, primary at `brand-500` (#3159A5)
- Neutral scale: `neutral-50` → `neutral-950` (Linear/Vercel-style cool gray)

**Component utilities (in `globals.css`)**
- `.btn-primary` — dark CTA, hovers to brand blue
- `.btn-brand` — brand blue CTA
- `.btn-secondary` — outlined light button
- `.btn-ghost-light` — outlined button on dark backgrounds
- `.badge` / `.badge-dark` — pill labels with pulsing dot
- `.dot-pulse` — small brand-blue dot with halo
- `.hero-glow` — subtle dark radial gradient for hero sections
- `.grid-bg` / `.grid-bg-light` — subtle grid pattern overlays
- `.hairline` — 1px divider

## Pages

| Route       | File                          | Hero      |
| ----------- | ----------------------------- | --------- |
| `/`         | `src/app/page.tsx`            | Dark      |
| `/services` | `src/app/services/page.tsx`   | Light     |
| `/about`    | `src/app/about/page.tsx`      | Dark      |
| `/contact`  | `src/app/contact/page.tsx`    | Light     |

The `Nav` component automatically swaps logo and text colors based on the hero color of the current page (see `DARK_HERO_PAGES` constant).

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev          # http://localhost:3000
npm run build
npm run start
```

The `--legacy-peer-deps` flag is needed because `package.json` pins React 19 RC for forward compatibility. To switch to stable React 18, change `react` and `react-dom` versions to `^18.3.1` and drop the flag.

## Content Direction

Copy is deliberately understated, technical, and credibility-focused — not promotional. Specific claims (response times, certifications, engineer counts) are positioned as falsifiable commitments rather than marketing fluff. Replace placeholder leader bios, exact metrics, and certification claims with verified information before publishing.

## Adding More Pages

Reuse the established patterns:
- Hero: `badge` + `font-display text-display-xl` heading + lead paragraph + button pair
- Section: `max-w-7xl mx-auto px-6 lg:px-8`, vertical padding `py-24 lg:py-32`
- Card grid: `gap-px bg-neutral-200 border border-neutral-200 rounded-lg overflow-hidden` for hairline-separated grids
- Eyebrow: `<span class="badge">` with `<span class="dot-pulse" />` and short label
