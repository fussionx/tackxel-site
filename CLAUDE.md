# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- Next.js 15.5.18 (App Router) + React 19 RC (pinned to `19.0.0-rc-66855b96-20241106`) + TypeScript strict
- Tailwind CSS 3.4 + PostCSS, Framer Motion for animations, Lucide for icons
- Deployed on Vercel

## Install / commands

- **Install:** `npm install --legacy-peer-deps` — required because React 19 RC has strict peer constraints. Plain `npm install` will fail.
- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint` is intentionally a **no-op** (replaced to unblock Vercel deploys, commit `5fbd258`). Do not rely on it to catch anything. TypeScript strict mode is the only style guardrail.
- Don't upgrade React off the pinned RC without explicit sign-off. Don't downgrade Next.js below 15.5.18 (patched for CVE-2025-66478).

## Styling

- **Fonts are Geist (sans + mono), not Inter.** The README is wrong on this — `tailwind.config.mjs` is the source of truth.
- Custom Tailwind theme in `tailwind.config.mjs`:
  - `brand-{50..950}` (anchored at `brand-500` = `#3159A5`)
  - `neutral-{50..950}` (cool gray, Linear/Vercel-style — overrides Tailwind's default neutral)
  - Custom type scales: `eyebrow`, `h3`, `h2`, `h2-lg`, `h1`, `h1-lg`
  - Custom shadows: `subtle`, `card`, `elevated`, `card-dark`, `brand-glow`
- Reusable utility classes live in `src/app/globals.css` — check there before building duplicates:
  - Buttons: `.btn-primary`, `.btn-brand`, `.btn-secondary`, `.btn-ghost-light`, `.btn-get-in-touch`
  - Badges: `.badge`, `.badge-dark`
  - Backgrounds: `.hero-glow`, `.grid-bg`, `.grid-bg-light`, `.hairline`, `.dot-pulse`

## Pages and routing

App Router, file-based. Standard pattern for a service page at `src/app/services/<slug>/`:

- `page.tsx` — content (usually `"use client"` for interactivity)
- `layout.tsx` — exports `metadata` with `title`, `description`, canonical URL, and OpenGraph tags. Use `src/app/services/ai-consulting/layout.tsx` as the reference.

## Nav.tsx gotcha (read this before adding pages)

`src/components/Nav.tsx` has **two places that must be updated** when adding a service page:

1. `serviceMenu` object — the dropdown entries (also drives the mobile menu).
2. `DARK_HERO_PAGES` / the `isDarkHero` pathname check — if the new page has a dark hero, its pathname must be added so the logo/text switches color. Currently a long hardcoded OR chain; easy to miss.

The `/add-service-page` skill handles both.

## Reusable components

Before building new ones, check `src/components/`:

- `Reveal` — fade-in on scroll (Framer Motion)
- `Parallax` — scroll-linked motion
- `Counter` — animated metric counter
- `Nav`, `Footer`

Use `lucide-react` for icons by default; don't hand-roll SVGs unless there's a design reason.

## Commits

Imperative, brief, no trailing punctuation. Examples from history:

- `Add 4 product pages: strategy, design, UI/UX, POC/MVP. Remove discovery workshop from nav`
- `Upgrade Next.js to 15.5.18 (patched CVE-2025-66478)`
- `Replace lint script with no-op to fix Vercel deploy`

Use parenthetical notes for technical context (CVE refs, reason for a workaround).
