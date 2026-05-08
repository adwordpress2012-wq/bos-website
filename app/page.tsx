import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const features = [
    {
      title: "Restaurant reservations",
      description:
        "Capture high-intent diners and automate reservation slots with clear customer context.",
    },
    {
      title: "Salon appointments",
      description:
        "Support stylists with service-specific booking flows, availability checks, and clean handoffs.",
    },
    {
      title: "Motel and hotel enquiries",
      description:
        "Handle stay requests, dates, and booking preferences through structured, trackable forms.",
    },
    {
      title: "Booking request capture",
      description:
        "Collect complete booking details first time, reducing back-and-forth and lost opportunities.",
    },
    {
      title: "Calendar-ready workflows",
      description:
        "Move every approved request into a schedule-ready state so teams can action immediately.",
    },
    {
      title: "Notifications via DOS",
      description:
        "Trigger updates to your team through DOS so nothing slips through operational cracks.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col bg-[#03050a] text-white">
      <Navbar />

      <section id="home" className="relative overflow-hidden border-b border-white/10">
        <div className="dos-ambient-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            AI Booking System by DOS
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2rem,6vw,4.3rem)] font-extrabold leading-[1.04] tracking-tight">
            Booking systems for modern businesses.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
            BOS powers reservations, appointments, booking flows, and customer scheduling through the DOS ecosystem.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/40 bg-gradient-to-r from-[#6d28d9] via-[#0ea5e9] to-[#10b981] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(14,165,233,0.45)] transition-transform hover:-translate-y-0.5"
            >
              Explore Booking System
            </a>
            <a
              href="https://directiveos.com.au"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors hover:border-cyan-300/40 hover:text-cyan-200"
            >
              Back to DOS
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">What BOS does</h2>
          <p className="mt-4 max-w-3xl text-white/70">
            BOS is the booking layer of DOS, purpose-built for operational teams that need reliable booking flows without fragmented tools.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_rgba(12,22,38,0.55)]"
              >
                <h3 className="font-display text-lg font-semibold text-cyan-200">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-[#0b1020]/80 p-7 backdrop-blur-xl">
            <h3 className="font-display text-2xl font-bold">BOS + Micah + COS</h3>
            <p className="mt-3 text-white/75">
              BOS works with Micah AI Receptionist while COS handles conversations. BOS handles booking flows so operations stay structured end-to-end.
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-[#0b1020]/80 p-7 backdrop-blur-xl">
            <h3 className="font-display text-2xl font-bold">DOS remains the central hub</h3>
            <p className="mt-3 text-white/75">
              Stripe checkout and onboarding happen on DOS. Legal pages and client setup happen on DOS. BOS stays focused on high-performance booking infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section id="demo" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="rounded-3xl border border-cyan-300/25 bg-gradient-to-br from-[#11152a] via-[#10182d] to-[#0a1122] p-8 shadow-[0_0_45px_rgba(34,211,238,0.2)] md:p-10">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Built for DOS ecosystem onboarding
            </h2>
            <p className="mt-4 max-w-3xl text-white/75">
              BOS feels native inside Directive OS. Use DOS for pricing, onboarding, and legal workflows, then activate BOS as your AI booking module.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://directiveos.com.au/pricing"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/20"
              >
                Pricing
              </a>
              <a
                href="https://directiveos.com.au/onboarding"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/20"
              >
                Onboarding
              </a>
              <a
                href="https://directiveos.com.au/contact"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/20"
              >
                Book Demo
              </a>
              <a
                href="https://directiveos.com.au"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/20"
              >
                Back to DOS
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-18">
          <p className="text-center text-sm text-white/70">
            BOS is the AI booking product under DOS. DOS remains the main sales, checkout, onboarding, legal, and Command Centre hub.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
