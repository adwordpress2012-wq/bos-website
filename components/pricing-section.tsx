"use client"

import { Check } from "lucide-react"
import Link from "next/link"

type Plan = {
  name: string
  price: string
  setup: string
  cta: string
  href: string
  stripeUrl?: string
  highlighted?: boolean
  badge?: string
  items: string[]
}

const chatPlans: Plan[] = [
  {
    name: "Starter (The Snippet)",
    price: "$149/mo",
    setup: "$0 setup (Founding Member)",
    cta: "Get Started - $0 Setup",
    href: "#contact",
    stripeUrl: "https://buy.stripe.com/test_00w9AS9pReVXgPR9eH5wI00",
    badge: "3 spots left",
    items: [
      "300 chats per month",
      "Website chat only",
      "24/7 AI engagement",
      "Overage: 25c per extra chat",
    ],
  },
  {
    name: "Growth (The Full OS)",
    price: "$299/mo",
    setup: "$799 one-off setup",
    cta: "Get Micah Now",
    href: "#contact",
    highlighted: true,
    badge: "Most Popular",
    items: [
      "1,000 chats per month",
      "Web + WhatsApp + SMS",
      "Conversions and bookings",
      "Overage: 20c per extra chat",
    ],
  },
  {
    name: "Scale (Multi-Venue)",
    price: "$599/mo",
    setup: "$1,499 one-off setup",
    cta: "Contact Us for Custom Plans",
    href: "#contact",
    items: [
      "5,000 chats per month",
      "All channels + CRM backend sync",
      "3-5 branches + automation",
      "Overage: 20c per extra chat",
    ],
  },
]

const voicePlans = [
  {
    name: "Solo (1 chair/tradie)",
    setup: "$499",
    monthly: "$99/mo",
    seat: "-",
    minutes: "200 min",
    overage: "$20/10 min",
    features: "Everything in chat plans + voice calls",
  },
  {
    name: "Studio (2-5 staff)",
    setup: "$799",
    monthly: "$149/mo",
    seat: "+$25/mo",
    minutes: "400 min",
    overage: "$20/10 min",
    features: "Everything in chat plans + more minutes, seat flexibility",
  },
  {
    name: "Multi-Location (2+ shops)",
    setup: "$1,499",
    monthly: "$249/mo",
    seat: "+$25/mo",
    minutes: "800 min",
    overage: "$20/10 min",
    features: "Everything in chat plans + unlimited branches, top support",
  },
]

export function PricingSection() {
  const handlePayment = (url: string) => {
    // Ensure we track the transition from pricing to the checkout flow.
    window.location.href = url
  }

  return (
    <section id="pricing" className="scroll-mt-20 bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            No-fuss pricing.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Never miss a booking again. Clear monthly pricing with automatic overage protection.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {chatPlans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-6 ${
                plan.highlighted
                  ? "border-primary bg-card shadow-[0_0_30px_rgba(0,255,157,0.22)]"
                  : "border-primary/25 bg-card"
              }`}
            >
              {plan.badge && (
                <span className="inline-flex rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-semibold uppercase text-primary">
                  {plan.badge}
                </span>
              )}
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-4 font-display text-5xl font-black text-foreground">{plan.price}</p>
              <p className="mt-1 text-sm text-primary">{plan.setup}</p>
              <ul className="mt-6 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              {plan.stripeUrl ? (
                <button
                  type="button"
                  onClick={() => handlePayment(plan.stripeUrl!)}
                  className="btn-glow-pulse mt-7 inline-flex w-full justify-center rounded-full bg-[#00FF9D] px-5 py-3 text-sm font-bold text-black transition hover:opacity-90"
                >
                  {plan.cta}
                </button>
              ) : (
                <Link
                  href={plan.href}
                  className="btn-glow-pulse mt-7 inline-flex w-full justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  {plan.cta}
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-primary/20 bg-card">
          <div className="border-b border-primary/20 px-6 py-4">
            <h3 className="font-display text-2xl font-bold">Voice Plans</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              No lock-in contracts. Cancel anytime.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-[#131d2a] text-left text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Plan</th>
                  <th className="px-4 py-3">Setup</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Per-Seat</th>
                  <th className="px-4 py-3">Voice Minutes incl.</th>
                  <th className="px-4 py-3">Overage</th>
                  <th className="px-4 py-3">Features</th>
                </tr>
              </thead>
              <tbody>
                {voicePlans.map((plan) => (
                  <tr key={plan.name} className="border-t border-primary/10">
                    <td className="px-4 py-3 font-medium text-foreground">{plan.name}</td>
                    <td className="px-4 py-3">{plan.setup}</td>
                    <td className="px-4 py-3">{plan.monthly}</td>
                    <td className="px-4 py-3">{plan.seat}</td>
                    <td className="px-4 py-3">{plan.minutes}</td>
                    <td className="px-4 py-3">{plan.overage}</td>
                    <td className="px-4 py-3">{plan.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-primary/20 px-6 py-4">
            <p className="text-xs text-muted-foreground">
              Voice setup includes Twilio number, persona tuning, Calendly handoff, dashboard onboarding, and website chat snippet.
            </p>
            <Link
              href="#contact"
              className="btn-glow-pulse inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
