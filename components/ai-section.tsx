/**
 * MASTER TEMPLATE: BOS – Built with AI for real small businesses
 * Generic across tenants. Edit copy as needed.
 */

import { Brain, Zap, ShieldCheck, LineChart } from "lucide-react"

const pillars = [
  {
    icon: Brain,
    title: "Conversational AI",
    desc: "Natural voice & chat that handles real customer enquiries — not scripted menus.",
  },
  {
    icon: Zap,
    title: "Instant response",
    desc: "Inbound calls answered in under a second — no missed leads, no voicemail tag.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first",
    desc: "Customer data stays yours. Encrypted at rest with audit-friendly logs.",
  },
  {
    icon: LineChart,
    title: "Always learning",
    desc: "Micah gets sharper with every call — picking up your tone, services and prices.",
  },
]

export function AiSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Built with AI
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
            Built with AI for the way small business actually works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            From the moment a customer dials in to the second they walk through
            your door — BOS handles the busywork so you can focus on the job.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-primary/15 bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
