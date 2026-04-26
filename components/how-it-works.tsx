/**
 * MASTER TEMPLATE: BOS – How it Works
 *
 * Four-step explainer: customer reaches out -> Micah handles voice & chat
 * -> books straight into Calendly / Google Calendar -> owner gets notified.
 */

import { PhoneCall, MessageCircle, CalendarCheck, BellRing } from "lucide-react"

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "A customer calls or chats",
    desc: "Inbound voice calls and website chat all route to Micah — no menus, no holds.",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "Micah picks up the conversation",
    desc: "She greets your customer, answers their questions, and qualifies the booking.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "She books straight into your calendar",
    desc: "Calendly or Google Calendar — Micah finds the slot and locks the appointment.",
  },
  {
    icon: BellRing,
    step: "04",
    title: "You get notified instantly",
    desc: "Email confirmation lands the moment it's booked. Mobile app coming soon.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            How it works
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
            From missed call to booked appointment in{" "}
            <span className="text-primary">under a minute</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            BOS plugs into the tools you already use, so you can stay on the
            tools, in the chair, or behind the counter — never the phone.
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
