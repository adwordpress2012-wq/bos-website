import { TrendingUp, Wallet, PhoneOff } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "+20%",
    label: "average bookings per month",
  },
  {
    icon: Wallet,
    value: "$5,000+",
    label: "saved yearly from missed appointments",
  },
  {
    icon: PhoneOff,
    value: "0",
    label: "missed calls with Micah live",
  },
]

export function ResultsSection() {
  return (
    <section id="results" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Results that matter
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Growth insights for local operators
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <article key={label} className="rounded-2xl border border-primary/20 bg-card p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-5 font-display text-4xl font-bold text-primary">{value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
