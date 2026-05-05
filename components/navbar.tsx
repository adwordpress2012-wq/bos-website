"use client"

/**
 * MASTER TEMPLATE: BOS – Top navigation
 *
 * TODO: Tenant Replace Here
 * Logo, brand name, and nav links are sourced from `lib/tenant-config.ts`.
 * To swap the logo per-tenant, replace `/public/bos-logo-dark.png`.
 *
 * Visual note: navbar background uses the dominant navy sampled from the
 * current logo image (#000C26) so the logo blends into the header.
 */

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { tenantConfig } from "@/lib/tenant-config"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { brand, nav, contact } = tenantConfig
  const mobileLinks = nav.filter((item) =>
    ["Templates", "Live Demos", "Pricing"].includes(item.label),
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/15 bg-[#0B0E14] text-white">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo + brand */}
        <Link href="#home" className="logo-container flex items-center gap-2.5 py-1" aria-label={brand.name}>
          <span className="relative h-12 w-12 shrink-0">
            <Image
              src={brand.logoSrc}
              alt={brand.logoAlt}
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </span>
          <span className="logo-title font-display text-2xl font-extrabold tracking-tight">
            {brand.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href={contact.phoneTel}
            className="btn-glow-pulse hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            <Sparkles className="h-4 w-4" />
            Book Micah
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-primary/20 bg-[#0B0E14] shadow-[0_16px_30px_rgba(0,0,0,0.5)] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6" aria-label="Mobile">
            {mobileLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-lg font-semibold text-white transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-glow-pulse mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              <Sparkles className="h-4 w-4" />
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
