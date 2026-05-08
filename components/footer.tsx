import Link from "next/link"

export function Footer() {
  const productLinks = [
    { label: "DOS", href: "https://directiveos.com.au" },
    { label: "COS", href: "https://directiveos.com.au" },
    { label: "BOS", href: "#home" },
  ]

  const legalAndOnboarding = [
    { label: "Terms", href: "https://directiveos.com.au/terms" },
    { label: "Privacy", href: "https://directiveos.com.au/privacy" },
    { label: "Onboarding", href: "https://directiveos.com.au/onboarding" },
    { label: "Contact", href: "https://directiveos.com.au/contact" },
  ]

  return (
    <footer className="border-t border-white/10 bg-[#03050a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="#home" className="inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c3aed] via-[#22d3ee] to-[#00ff9d] text-sm font-black text-[#051014] shadow-[0_0_30px_rgba(34,211,238,0.45)]">
                BOS
              </span>
              <span className="font-display text-lg font-bold tracking-tight">BOS</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              BOS is the booking layer of DOS. Stripe checkout, onboarding, legal, and Command Centre workflows remain on DOS.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-cyan-200/80">
              Powered by Directive OS
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/60">
              Platform
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {productLinks.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    target={n.href.startsWith("http") ? "_blank" : undefined}
                    rel={n.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-white/80 transition-colors hover:text-cyan-300"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/60">
              Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {legalAndOnboarding.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/80 transition-colors hover:text-cyan-300"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/65 md:flex-row md:items-center">
          <p>AI Booking System by DOS</p>
          <p>© 2026 BOS. Booking infrastructure in the Directive OS ecosystem.</p>
        </div>
      </div>
    </footer>
  )
}
