/**
 * MASTER TEMPLATE: BOS – Why small business owners pick BOS
 * Generic across tenants. Edit copy as needed.
 */

import { Clock, DollarSign, CalendarCheck2, Headphones } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Never miss a call",
    desc: "Micah answers 24/7 — including after hours, weekends and lunch breaks.",
  },
  {
    icon: DollarSign,
    title: "Cheaper than a hire",
    desc: "A full-time receptionist for the price of a phone bill. No payroll, no sick days.",
  },
  {
    icon: CalendarCheck2,
    title: "Books straight to your calendar",
    desc: "Calendly or Google Calendar — appointments land where you already work.",
  },
  {
    icon: Headphones,
    title: "Sounds like a real person",
    desc: "Natural voice, friendly tone, and trained on your business — not a generic bot.",
  },
]

export function MultiTenantSection() {
  return (
    <section className="relative overflow-hidden bg-accent py-20 text-accent-foreground md:py-28">
      <div className="bg-starfield pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Why BOS
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance md:text-5xl">
            A receptionist that <span className="text-primary">never</span> clocks off
          </h2>
          <p className="mt-4 text-base leading-relaxed text-accent-foreground/80 md:text-lg">
            Most small businesses lose work because they can&apos;t answer the
            phone. BOS gives you a tireless AI partner that picks up every
            call, books every appointment, and lets you focus on the work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-accent-foreground/10 bg-accent-foreground/5 p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-accent-foreground/75">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
