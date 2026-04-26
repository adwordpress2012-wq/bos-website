/**
 * MASTER TEMPLATE: BOS – Footer
 *
 * TODO: Tenant Replace Here
 * Configure `tenantConfig.footer` and `tenantConfig.brand` in
 * `lib/tenant-config.ts`.
 */

import Image from "next/image"
import Link from "next/link"
import { Twitter, Instagram, Linkedin, Phone } from "lucide-react"
import { tenantConfig } from "@/lib/tenant-config"

const socialIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  Twitter,
  Instagram,
  LinkedIn: Linkedin,
}

export function Footer() {
  const { brand, footer, nav, contact } = tenantConfig

  return (
    <footer className="border-t border-white/5 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="relative h-10 w-10 overflow-hidden">
                <Image
                  src={brand.logoSrc}
                  alt={brand.logoAlt}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                {brand.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-accent-foreground/70">
              {brand.tagline}. Micah answers your calls, books your
              appointments, and emails you the moment it&apos;s done.
            </p>
            <a
              href={contact.phoneTel}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Call Micah · {contact.phone}
            </a>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-foreground/70">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-accent-foreground/80 transition-colors hover:text-primary"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-foreground/70">
              Follow
            </h3>
            <ul className="mt-4 flex items-center gap-3">
              {footer.socials.map((s) => {
                const Icon = socialIcon[s.label]
                return (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent-foreground/15 transition-colors hover:border-primary hover:text-primary"
                    >
                      {Icon ? <Icon className="h-4 w-4" /> : s.label[0]}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-accent-foreground/10 pt-6 text-sm text-accent-foreground/70 md:flex-row md:items-center">
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm text-accent-foreground/80">
              info@bookos.com.au   ABN: 87 754 544 171
            </p>
            <Link
              href={footer.poweredByUrl}
              className="font-medium transition-colors hover:text-primary"
            >
              {footer.poweredBy}
            </Link>
          </div>
          <ul className="flex items-center gap-5">
            {footer.legalLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>© {new Date().getFullYear()} {brand.name}</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
