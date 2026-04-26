/**
 * MASTER TEMPLATE: BOS – Industries we serve
 *
 * TODO: Tenant Replace Here
 * Replace `tenantConfig.industries` in `lib/tenant-config.ts` with the
 * tenant's target verticals. Industry images live in `/public/industry-*.jpg`.
 *
 * Visual: dark theme. Full-color photos with a navy gradient overlay at the
 * bottom for label legibility on dark cards.
 */

import Image from "next/image"
import { Phone } from "lucide-react"
import { tenantConfig } from "@/lib/tenant-config"

export function IndustriesGrid() {
  const { industries, contact } = tenantConfig

  return (
    <section
      id="industries"
      className="scroll-mt-20 bg-muted py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Built for
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
              Small business owners who can&apos;t answer every call
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              If you&apos;re on the tools, with a client, or behind the counter —
              Micah is on the phone for you. Designed for the trades and
              service businesses keeping the country running.
            </p>
          </div>

          <a
            href={contact.phoneTel}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            Try Micah · {contact.phone}
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <article
              key={i.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={i.image || "/placeholder.svg"}
                  alt={i.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Navy gradient overlay at bottom for label legibility */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card via-card/70 to-transparent"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="font-display text-lg font-bold leading-tight text-foreground">
                  {i.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {i.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
