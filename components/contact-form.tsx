"use client"

/**
 * MASTER TEMPLATE: BOS – Book a quick chat
 *
 * Contact form submits via mailto for lightweight lead capture.
 */

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { tenantConfig } from "@/lib/tenant-config"

export function ContactForm() {
  const { contact } = tenantConfig

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = String(formData.get("name") ?? "")
    const email = String(formData.get("email") ?? "")
    const message = String(formData.get("message") ?? "")
    const subject = encodeURIComponent(`Micah enquiry from ${name || "Website visitor"}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
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
              Stop missing customers. Start booking them.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Tell us about your business and we&apos;ll tailor Micah to your booking flow, channels, and team.
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
          <div className="rounded-3xl border border-primary/20 bg-card p-6 shadow-[0_0_60px_rgba(0,255,157,0.14)] md:p-8">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="name" label="Name" type="text" required />
                <Field id="email" label="Email" type="email" required />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                  <span className="ml-0.5 text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Tell us about your business and what you need."
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Book Micah Now
                <Send className="h-4 w-4" />
              </button>
              <p className="text-xs leading-relaxed text-muted-foreground">
                This opens your email app and sends your message to {contact.email}.
              </p>
            </form>
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
