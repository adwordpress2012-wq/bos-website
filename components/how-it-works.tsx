/**
 * MASTER TEMPLATE: BOS – How it Works
 *
 * Four-step explainer: customer reaches out -> Micah handles voice & chat
 * -> books straight into Calendly / Google Calendar -> owner gets notified.
 */

import { MessageSquareReply, CalendarCheck, BellRing, Inbox } from "lucide-react"

const steps = [
  {
    icon: MessageSquareReply,
    step: "01",
    title: "24/7 instant reply on WhatsApp & SMS",
    desc: "Micah responds in seconds so no enquiry sits unread or goes cold.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Bookings auto-synced to your calendar",
    desc: "Confirmed jobs and appointments are written directly into your schedule.",
  },
  {
    icon: BellRing,
    step: "03",
    title: "Owner notified instantly",
    desc: "Receive real-time booking alerts by SMS and email.",
  },
  {
    icon: Inbox,
    step: "04",
    title: "All conversations in one inbox",
    desc: "No staff needed to triage messages across channels.",
  },
]

export function HowItWorks() {
  return (
    <section id="features" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Features & outcomes
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
            Built to protect every enquiry and convert it into revenue
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Stop lost bookings, missed calls, and unread DMs with one always-on AI receptionist.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <li
              key={step}
              className="relative flex flex-col rounded-2xl border border-primary/15 bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span
                aria-hidden
                className="absolute right-5 top-5 font-display text-4xl font-bold leading-none text-primary/30"
              >
                {step}
              </span>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
