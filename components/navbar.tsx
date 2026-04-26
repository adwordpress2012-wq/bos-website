"use client"

/**
 * MASTER TEMPLATE: BOS – Top navigation
 *
 * TODO: Tenant Replace Here
 * Logo, brand name, and nav links are sourced from `lib/tenant-config.ts`.
 * To swap the logo per-tenant, replace `/public/bos-logo-dark.png`.
 *
 * Visual note: navbar background matches the hero navy so the BOS logo
 * (which already has a navy starfield background) blends seamlessly.
 */

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { tenantConfig } from "@/lib/tenant-config"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { brand, nav, contact } = tenantConfig

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-accent/95 text-accent-foreground backdrop-blur supports-[backdrop-filter]:bg-accent/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo + brand — bigger logo image blends into navy background */}
        <Link href="#home" className="flex items-center gap-3" aria-label={brand.name}>
          <span className="relative h-14 w-14 shrink-0 overflow-hidden">
            <Image
              src={brand.logoSrc}
              alt={brand.logoAlt}
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-2xl font-extrabold tracking-tight">
              {brand.name}
            </span>
            <span className="text-[11px] font-medium text-primary/90">
              {brand.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-accent-foreground/75 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href={contact.phoneTel}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Call Micah
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-accent-foreground md:hidden"
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
        <div className="border-t border-white/5 bg-accent md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-accent-foreground/80 hover:bg-white/5 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contact.phoneTel}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Call Micah · {contact.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
