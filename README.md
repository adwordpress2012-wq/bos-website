# Bookos — Master Template

> **MASTER TEMPLATE: Bookos Multi-Tenant Real Estate — [bookos.com.au](https://bookos.com.au)**
>
> A conversion-focused, one-page Next.js 14 (App Router) landing page that
> serves as the canonical starting point for every Bookos tenant site.

---

## What is this?

This repository is the **single source of truth** for Bookos client landing
pages. Every new property manager / agency we onboard gets a clone of this
template, lightly customized via a single config file.

It is intentionally:

- **Tenant-agnostic** — no hard-coded brand strings outside of `lib/tenant-config.ts`.
- **Themeable** — brand colors live as CSS variables in `app/globals.css`.
- **Modular** — each section is a self-contained component under `/components`.
- **Comment-rich** — every file meant to be customized has a `/* TODO: Tenant Replace Here */` marker.

---

## Onboarding a new client (3-step playbook)

1. **Duplicate** this repo (e.g. `bookos-tenant-acme-realty`).
2. **Edit `lib/tenant-config.ts`** — brand, hero copy, properties, contact, socials.
3. **Replace** `/public/bos-logo-dark.png` with the tenant's logo (PNG, square).
4. _(Optional)_ Tweak `--primary` / `--accent` HSL values in `app/globals.css`.
5. Deploy to Vercel. Done.

> Future iteration: swap the static config for a runtime fetch keyed by hostname
> (Supabase / Neon) to make this a true single-deployment SaaS.

---

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with semantic design tokens (`--primary`, `--accent`, etc.)
- **lucide-react** icons
- **next/font** (Inter + Space Grotesk) — only two font families
- 100% server components except where interactivity demands otherwise

---

## Project structure

```
app/
  layout.tsx          ← fonts, metadata, theme-color
  page.tsx            ← composes all sections; rarely needs editing
  globals.css         ← brand color tokens (TENANT REPLACE)
components/
  navbar.tsx
  hero.tsx
  micah-section.tsx
  featured-properties.tsx
  multi-tenant-section.tsx
  ai-section.tsx
  contact-form.tsx
  footer.tsx
lib/
  tenant-config.ts    ← ★ THE main per-tenant edit point ★
  utils.ts
public/
  bos-logo-dark.png   ← replace per tenant
  property-{1..6}.jpg ← swap with real listings
```

---

## Customization checklist

| What             | Where                                              |
| ---------------- | -------------------------------------------------- |
| Brand name       | `lib/tenant-config.ts → brand.name`                |
| Logo image       | `public/bos-logo-dark.png` + `brand.logoSrc`       |
| Hero headline    | `lib/tenant-config.ts → hero.*`                    |
| Properties       | `lib/tenant-config.ts → properties[]`              |
| Contact details  | `lib/tenant-config.ts → contact`                   |
| Footer / socials | `lib/tenant-config.ts → footer`                    |
| Colors           | `app/globals.css → :root { --primary, --accent }`  |
| Fonts            | `app/layout.tsx → next/font imports`               |
| Form backend     | `components/contact-form.tsx → handleSubmit`       |

---

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

© Bookos — Powered by [bookos.com.au](https://bookos.com.au)
