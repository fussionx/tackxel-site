---
name: add-service-page
description: Scaffold a new service page under /services/<slug>, wire it into the Nav.tsx dropdown, and (if it has a dark hero) register it in the DARK_HERO_PAGES check so the header colors flip correctly. Use when the user asks to add a service page or a new entry under /services.
---

# Adding a service page

Service pages live at `src/app/services/<slug>/` and follow a strict pattern. Three places must stay in sync — missing any one of them creates visible bugs.

## Required inputs

Before scaffolding, confirm with the user:

1. **Slug** (kebab-case, e.g. `ai-consulting`) — becomes `/services/<slug>`
2. **Display name** (e.g. "AI Consulting") — shown in the Nav dropdown
3. **Nav category** — which of these groups in `serviceMenu`:
   - `Artificial Intelligence`
   - `Product & Startup Services`
   - `Development`
   - `Strategic Services`
   - `Cloud & DevOps`
   - `Engagement Models`
4. **Hero style**: dark hero (white text on dark background) or light hero? This determines whether the page goes into the `isDarkHero` check.
5. **Page metadata**: title, meta description, and 1–2 sentence lead paragraph.

If the user provides intent but not all of these, propose values and confirm.

## Files to create

### 1. `src/app/services/<slug>/layout.tsx`

Reference `src/app/services/ai-consulting/layout.tsx`. Exports `metadata`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "<Display Name> | Tackxel",
  description: "<meta description>",
  alternates: { canonical: "https://tackxel.com/services/<slug>" },
  openGraph: {
    title: "<Display Name> | Tackxel",
    description: "<meta description>",
    url: "https://tackxel.com/services/<slug>",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
```

### 2. `src/app/services/<slug>/page.tsx`

Read an existing service page in the same nav category to match its tone, structure, and density (hero → value props → bullets/cards → metrics → FAQ → CTA). Reuse:

- `Reveal`, `Parallax`, `Counter` from `src/components/`
- `lucide-react` icons (don't hand-roll SVGs)
- Utility classes from `globals.css`: `.btn-primary`, `.btn-brand`, `.btn-secondary`, `.btn-ghost-light`, `.badge`, `.badge-dark`, `.hero-glow`, `.grid-bg`, `.grid-bg-light`, `.hairline`
- Section container pattern: `max-w-7xl mx-auto px-6 lg:px-8` with `py-24 lg:py-32`

Most pages use `"use client"` because of expand/collapse FAQs and animation triggers.

## Files to edit

### 3. `src/components/Nav.tsx` — `serviceMenu` (around line 9)

Add the entry under the correct category:

```ts
{ name: "<Display Name>", href: "/services/<slug>" },
```

This drives both the desktop dropdown and the mobile menu — no separate mobile update needed.

### 4. `src/components/Nav.tsx` — `isDarkHero` check (around line 56) — **DARK HERO PAGES ONLY**

If the new page has a dark hero, append its pathname to the OR chain on the `isDarkHero` line:

```ts
|| pathname === "/services/<slug>"
```

Skip this step for light-hero pages. Forgetting this on a dark-hero page leaves the logo dark on a dark background — invisible.

## Verification before reporting done

- Run `npm run build` to confirm the page compiles and metadata is valid.
- Visit `/services/<slug>` in `npm run dev` and check: nav dropdown shows the new entry under the right category, header colors flip correctly on the new page, and mobile menu includes it.

## Notes

- `npm run lint` is a no-op in this repo — don't rely on it.
- Install with `npm install --legacy-peer-deps` if dependencies need refreshing.
- Some `href: "/services"` entries in `serviceMenu` are placeholders for pages that don't exist yet — don't treat them as broken.
