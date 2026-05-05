/**
 * ============================================================================
 * MASTER TEMPLATE: BOS — AI Business Partner for Small Business
 * ============================================================================
 *
 * TODO: Tenant Replace Here
 *
 * This is THE primary file to customize when onboarding a new client.
 * Every tenant-specific value (brand, hero copy, industries, contact, etc.)
 * is centralized here so the rest of the codebase stays untouched.
 *
 *  How to clone for a new tenant:
 *  1. Duplicate this repo (e.g. `bos-tenant-{slug}`).
 *  2. Update the `tenantConfig` object below.
 *  3. Replace `/public/bos-logo-dark.png` with the tenant's logo.
 *  4. (Optional) Tweak brand colors in `app/globals.css` (--primary, --accent).
 *  5. Deploy. Done.
 *
 *  Down the line this file can be swapped for a remote fetch
 *  (e.g. Supabase row keyed by hostname) to enable a true multi-tenant
 *  single-deployment SaaS.
 * ============================================================================
 */

export type Industry = {
  id: string
  title: string
  description: string
  image: string
}

export type TenantConfig = {
  // ── Brand ────────────────────────────────────────────────────────────────
  brand: {
    name: string
    tagline: string
    logoSrc: string
    logoAlt: string
    domain: string
  }

  // ── Navigation ───────────────────────────────────────────────────────────
  nav: {
    label: string
    href: string
  }[]

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: string
    headlinePrimary: string
    headlineHighlight: string
    subheadline: string
    primaryCta: { label: string; sublabel: string; href: string }
    secondaryCta: { label: string; href: string }
  }

  // ── Micah (AI Receptionist) ──────────────────────────────────────────────
  micah: {
    name: string
    title: string
    description: string
    capabilities: string[]
  }

  // ── Industries we serve ─────────────────────────────────────────────────
  industries: Industry[]

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    email: string
    phone: string
    phoneTel: string
    address: string
  }

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    poweredBy: string
    poweredByUrl: string
    socials: { label: string; href: string }[]
    legalLinks: { label: string; href: string }[]
  }
}

/* ────────────────────────────────────────────────────────────────────────────
 * DEFAULT TENANT — BOS master / showcase configuration
 * Replace any string, image, or array entry below for a new tenant.
 * ──────────────────────────────────────────────────────────────────────────── */
export const tenantConfig: TenantConfig = {
  brand: {
    name: "BookOS",
    tagline: "Micah AI Receptionist",
    logoSrc: "/directiveos-logo.png", // TODO: Tenant Replace Here
    logoAlt: "BookOS Micah logo",
    domain: "bookos.com.au",
  },

  nav: [
    { label: "Templates", href: "#features" },
    { label: "Live Demos", href: "#live-demo" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#insights" },
  ],

  hero: {
    eyebrow: "Micah by BookOS",
    headlinePrimary: "Never Lose a Booking.",
    headlineHighlight: "Instantly Convert Every Message into Revenue.",
    subheadline:
      "Micah answers your customers instantly on WhatsApp and SMS, books appointments, fills your calendar, and never lets a paying customer slip away. Your 24/7 receptionist for restaurants, salons, clinics, trades, and local businesses.",
    primaryCta: {
      label: "Book Micah Now",
      sublabel: "Fast setup for local businesses",
      href: "#contact",
    },
    secondaryCta: { label: "Chat with Micah", href: "#live-demo" },
  },

  micah: {
    name: "Micah",
    title: "Your AI Receptionist",
    description:
      "Micah handles every customer enquiry in seconds across chat and voice so your team can stay focused on service delivery, not inbox triage.",
    capabilities: [
      "24/7 instant replies on WhatsApp, SMS, and web chat",
      "Bookings auto-synced to your calendar instantly",
      "Owner notifications by SMS and email in real time",
      "All customer conversations in one unified inbox",
    ],
  },

  industries: [
    {
      id: "hairdresser",
      title: "Hairdressers & Salons",
      description:
        "Micah books cuts, colours and treatments while you're with a client.",
      image: "/industry-hairdresser.jpg",
    },
    {
      id: "barber",
      title: "Barber Shops",
      description:
        "Never miss a walk-in enquiry — Micah locks in chair time around your schedule.",
      image: "/industry-barber.jpg",
    },
    {
      id: "tradie",
      title: "Tradies & Handymen",
      description:
        "On the tools? Micah quotes basic jobs and books site visits straight to your calendar.",
      image: "/industry-tradie.jpg",
    },
    {
      id: "cafe",
      title: "Cafes & Small Retail",
      description:
        "Take catering bookings and reservations without leaving the espresso machine.",
      image: "/industry-cafe.jpg",
    },
    {
      id: "mechanic",
      title: "Mechanics & Auto Shops",
      description:
        "Micah books services and inspections while you're under the hood.",
      image: "/industry-mechanic.jpg",
    },
    {
      id: "beauty",
      title: "Beauty & Nails",
      description:
        "Manicures, lashes, facials — Micah keeps your chair full automatically.",
      image: "/industry-beauty.jpg",
    },
    {
      id: "office",
      title: "Small Offices",
      description:
        "A receptionist for the price of a phone line. Micah handles inbound enquiries.",
      image: "/industry-office.jpg",
    },
    {
      id: "retail",
      title: "Retail Shops",
      description:
        "Stock questions, click-and-collect, opening hours — Micah answers them all.",
      image: "/industry-retail.jpg",
    },
  ],

  contact: {
    email: "jayson@bookos.com.au",
    phone: "02 8880 4339",
    phoneTel: "tel:+61288804339",
    address: "Sydney, NSW, Australia",
  },

  footer: {
    poweredBy: "Powered by Directive OS",
    poweredByUrl: "https://directiveos.com.au",
    socials: [
      { label: "Twitter", href: "https://twitter.com/" },
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "LinkedIn", href: "https://linkedin.com/" },
    ],
    legalLinks: [
      { label: "Terms", href: "https://directiveos.com.au/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
}
