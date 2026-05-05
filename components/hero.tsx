/**
 * MASTER TEMPLATE: BOS – Hero / banner
 *
 * TODO: Tenant Replace Here
 * Headline, subheadline, and CTA copy are configured in
 * `lib/tenant-config.ts → tenantConfig.hero`.
 *
 * Visual: deep navy background with starfield, animated Micah voice
 * waveform on the right (replacing the old logo orb), and a glowing
 * pulsing yellow "Call Micah" tel: button.
 */

import Link from "next/link"
import { MessageCircle, Sparkles, Mic } from "lucide-react"
import { tenantConfig } from "@/lib/tenant-config"

export function Hero() {
  const { hero } = tenantConfig

  // Staggered delays/heights for the waveform bars to feel "alive"
  const waveBars = [
    { h: 28, d: "0s" },
    { h: 64, d: "0.15s" },
    { h: 96, d: "0.3s" },
    { h: 140, d: "0.05s" },
    { h: 180, d: "0.45s" },
    { h: 220, d: "0.2s" },
    { h: 180, d: "0.55s" },
    { h: 140, d: "0.1s" },
    { h: 96, d: "0.4s" },
    { h: 64, d: "0.25s" },
    { h: 28, d: "0.5s" },
  ]

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-accent text-accent-foreground"
    >
      {/* Decorative starfield */}
      <div className="bg-starfield pointer-events-none absolute inset-0 opacity-80" aria-hidden />
      {/* Soft yellow glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-12 lg:items-center">
        {/* Copy */}
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-black leading-[1.02] tracking-tight text-balance text-accent-foreground">
            {hero.headlinePrimary}
          </h1>

          <p className="mt-3 font-display text-xl font-bold tracking-tight text-primary md:text-3xl">
            {hero.headlineHighlight}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-accent-foreground/85 md:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href={hero.primaryCta.href}
              className="btn-glow-pulse group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground transition-transform hover:-translate-y-0.5 md:text-lg"
              aria-label={`${hero.primaryCta.label} on ${hero.primaryCta.sublabel}`}
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 ring-1 ring-primary-foreground/20">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="flex flex-col items-start leading-tight">
                <span>{hero.primaryCta.label}</span>
                <span className="text-xs font-semibold opacity-80 md:text-sm">
                  {hero.primaryCta.sublabel}
                </span>
              </span>
            </Link>

            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary/20"
            >
              <MessageCircle className="h-4 w-4" />
              {hero.secondaryCta.label}
            </Link>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-accent-foreground/75 md:text-base">
            Stop lost bookings, missed calls, and unread DMs - Micah brings you more customers, more revenue, automatically.
          </p>

          {/* Trust strip */}
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-accent-foreground/10 pt-6 text-sm">
            <div>
              <dt className="text-accent-foreground/60">Calls answered</dt>
              <dd className="mt-1 font-display text-2xl font-bold">24/7</dd>
            </div>
            <div>
              <dt className="text-accent-foreground/60">Avg booking uplift</dt>
              <dd className="mt-1 font-display text-2xl font-bold">+20%</dd>
            </div>
            <div>
              <dt className="text-accent-foreground/60">Missed calls</dt>
              <dd className="mt-1 font-display text-2xl font-bold">0</dd>
            </div>
          </dl>
        </div>

        {/* Right column — Micah voice waveform animation */}
        <div className="relative lg:col-span-5">
          <div
            className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center"
            role="img"
            aria-label="Micah voice activity waveform"
          >
            {/* Soft yellow halo */}
            <div className="absolute inset-6 rounded-full bg-primary/15 blur-3xl" aria-hidden />

            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-primary/15" aria-hidden />
            <div className="absolute inset-8 rounded-full border border-primary/10" aria-hidden />

            {/* Waveform bars */}
            <div className="relative z-10 flex h-64 items-center justify-center gap-2 px-8 md:h-80">
              {waveBars.map((bar, i) => (
                <span
                  key={i}
                  className="bos-wave-bar block w-2.5 rounded-full bg-primary md:w-3"
                  style={{
                    height: `${bar.h}px`,
                    animationDelay: bar.d,
                    boxShadow: "0 0 18px rgba(0, 255, 157, 0.55)",
                  }}
                />
              ))}
            </div>

            {/* Mic chip badge */}
            <span className="absolute bottom-6 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-primary/30 bg-accent/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
              <Mic className="h-3.5 w-3.5" />
              Micah is listening
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
