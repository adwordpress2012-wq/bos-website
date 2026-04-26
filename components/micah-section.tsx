/**
 * MASTER TEMPLATE: BOS – Meet Micah, Your AI Receptionist
 *
 * TODO: Tenant Replace Here
 * Configure name, copy, and capabilities in
 * `lib/tenant-config.ts → tenantConfig.micah`.
 */

"use client"

import { Mic, Phone, Calendar, MessageSquare, Check } from "lucide-react"
import { tenantConfig } from "@/lib/tenant-config"
import { useState } from "react"

export function MicahSection() {
  const { micah, contact } = tenantConfig
  const [listening, setListening] = useState(false)

  return (
    <section
      id="micah"
      className="relative scroll-mt-20 bg-background py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:items-center">
        {/* Visual */}
        <div className="relative">
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-3xl border border-primary/20 bg-card text-card-foreground shadow-[0_0_60px_rgba(255,214,0,0.08)]">
            <div className="bg-starfield pointer-events-none absolute inset-0 rounded-3xl opacity-70" aria-hidden />

            {/* Mic orb */}
            <button
              type="button"
              onClick={() => setListening((v) => !v)}
              aria-pressed={listening}
              aria-label={listening ? "Stop listening" : "Talk to Micah"}
              className="group relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_60px_rgba(255,214,0,0.45)] transition-transform hover:scale-105"
            >
              {listening && (
                <>
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" aria-hidden />
                  <span className="absolute -inset-4 animate-pulse rounded-full border border-primary/40" aria-hidden />
                </>
              )}
              <Mic className="h-14 w-14" />
            </button>

            {/* Floating chips */}
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-accent-foreground/15 bg-accent/60 px-3 py-1.5 text-xs font-medium backdrop-blur">
              <Phone className="h-3.5 w-3.5 text-primary" />
              Voice calls
            </div>
            <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-accent-foreground/15 bg-accent/60 px-3 py-1.5 text-xs font-medium backdrop-blur">
              <MessageSquare className="h-3.5 w-3.5 text-primary" />
              Web chat
            </div>
            <div className="absolute bottom-10 left-8 flex items-center gap-2 rounded-full border border-accent-foreground/15 bg-accent/60 px-3 py-1.5 text-xs font-medium backdrop-blur">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              Calendar
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            AI Receptionist
          </span>

          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
            Meet {micah.name}, {micah.title}
          </h2>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {micah.description}
          </p>

          <ul className="mt-8 space-y-3">
            {micah.capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm leading-relaxed text-foreground md:text-base">
                  {cap}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={contact.phoneTel}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Call {micah.name} · {contact.phone}
            </a>
            <button
              type="button"
              onClick={() => setListening((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Mic className="h-4 w-4" />
              {listening ? "Stop demo" : "Try a voice demo"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
