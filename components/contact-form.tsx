"use client"

/**
 * MASTER TEMPLATE: BOS – Book a quick chat
 *
 * TODO: Tenant Replace Here
 * Wire `handleSubmit` to your backend (e.g. a Next.js Server Action,
 * Supabase insert, or HubSpot endpoint). Contact info is configured
 * in `lib/tenant-config.ts → tenantConfig.contact`.
 */

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Check } from "lucide-react"
import { tenantConfig } from "@/lib/tenant-config"

export function ContactForm() {
  const { contact } = tenantConfig
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // TODO: Tenant Replace Here — connect to your backend / CRM
    await new Promise((r) => setTimeout(r, 700))
    setLoading(false)
    setSubmitted(true)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section
      id="book"
      className="scroll-mt-20 bg-muted py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6" id="contact">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Info */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Get in touch
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
              Book a quick chat with the BOS team
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Tell us about your business — we&apos;ll show you how Micah
              answers your calls and books appointments. Or skip the form and
              call Micah right now.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href={contact.phoneTel}
                  className="font-medium text-foreground hover:text-primary"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-medium text-foreground hover:text-primary"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="font-medium text-foreground">{contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-primary/20 bg-card p-6 shadow-[0_0_60px_rgba(255,214,0,0.06)] md:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-7 w-7" strokeWidth={3} />
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                  Thanks — we&apos;ll be in touch
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  We&apos;ll reach out shortly to set up your quick chat.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="name" label="Name" type="text" required />
                  <Field id="business" label="Business name" type="text" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="email" label="Email" type="email" required />
                  <Field id="phone" label="Phone" type="tel" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    What does your business do?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="e.g. I run a barber shop and miss calls when I'm with a client."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Book quick chat"}
                  <Send className="h-4 w-4" />
                </button>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  By submitting, you agree to our Terms and Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type,
  required,
}: {
  id: string
  label: string
  type: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-primary">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
        placeholder={label}
      />
    </div>
  )
}
