import Link from "next/link"

const posts = [
  "How to stop missing WhatsApp bookings after hours",
  "7 ways salons and clinics turn DMs into confirmed appointments",
  "Customer communication playbook for local service businesses",
]

export function InsightsSection() {
  return (
    <section id="insights" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Insights
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Business tips to win more bookings
            </h2>
          </div>
          <Link
            href="#contact"
            className="rounded-full border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10"
          >
            Contact Us for Custom Plans
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.map((title) => (
            <article key={title} className="rounded-2xl border border-primary/20 bg-card p-5">
              <p className="text-sm text-foreground">{title}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
