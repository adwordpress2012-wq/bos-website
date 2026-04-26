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
    name: "BOS",
    tagline: "AI Business Solution",
    logoSrc: "/bos-logo-dark.png", // TODO: Tenant Replace Here
    logoAlt: "BOS logo",
    domain: "bos.com.au",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "How it Works", href: "#how" },
    { label: "Micah", href: "#micah" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Welcome to",
    headlinePrimary: "BOS",
    headlineHighlight: "AI Business Solution",
    subheadline:
      "Micah, your AI receptionist, answers every call and chat — books the appointment straight into your Calendly or Google Calendar, and emails you the moment it's locked in. Built for hairdressers, barbers, tradies, cafes and small business owners.",
    primaryCta: {
      label: "Call Micah",
      sublabel: "02 5850 4038",
      href: "tel:+61258504038",
    },
    secondaryCta: { label: "Book a quick chat", href: "#book" },
  },

  micah: {
    name: "Micah",
    title: "Your AI Receptionist",
    description:
      "When a customer calls or chats your business, Micah picks up — day or night. She answers questions, books the appointment into your calendar, and sends you an email so nothing slips through the cracks.",
    capabilities: [
      "Picks up every voice call and web chat, 24/7",
      "Books appointments straight into Calendly or Google Calendar",
      "Emails you the moment a booking is confirmed",
      "Mobile app notifications coming soon",
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
    email: "hello@bos.com.au",
    phone: "02 5850 4038",
    phoneTel: "tel:+61258504038",
    address: "Sydney, NSW, Australia",
  },

  footer: {
    poweredBy: "Powered by BOS",
    poweredByUrl: "https://bos.com.au",
    socials: [
      { label: "Twitter", href: "https://twitter.com/" },
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "LinkedIn", href: "https://linkedin.com/" },
    ],
    legalLinks: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
}
