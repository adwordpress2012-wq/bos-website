import { PlayCircle } from "lucide-react"

const testimonials = [
  {
    quote: "Micah doubled our bookings in the first month!",
    name: "Mia R.",
    business: "Glow Beauty Studio",
  },
  {
    quote: "We finally stopped missing after-hours enquiries and our calendar is full.",
    name: "Daniel R.",
    business: "Northside Physio Clinic",
  },
  {
    quote: "Micah handles the back-and-forth so my team can focus on customers in-store.",
    name: "Alicia T.",
    business: "Harbor Barber Co.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Micah Works for Small Businesses Like Yours
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-primary/30 bg-card p-6 md:p-8">
            <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-[#0F1722] text-center">
              <div>
                <PlayCircle className="mx-auto h-12 w-12 text-primary" />
                <p className="mt-3 text-sm text-muted-foreground">
                  Video testimonial placeholder
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-primary/30 bg-card p-6">
            <p className="font-display text-2xl font-bold text-foreground">
              "Micah doubled our bookings in the first month!"
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Mia R. - Glow Beauty Studio</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.quote} className="rounded-2xl border border-primary/20 bg-card p-5">
              <p className="text-sm text-foreground">{item.quote}</p>
              <p className="mt-4 text-xs uppercase tracking-wide text-primary">
                {item.name} - {item.business}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
