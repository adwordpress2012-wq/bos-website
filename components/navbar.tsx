"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const nav = [
    { label: "Features", href: "#features" },
    { label: "Industries", href: "#industries" },
    { label: "Demo", href: "#demo" },
    { label: "Pricing", href: "https://directiveos.com.au/pricing", external: true },
    { label: "Back to DOS", href: "https://directiveos.com.au", external: true },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#05070d]/80 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-3 py-1" aria-label="BOS">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c3aed] via-[#22d3ee] to-[#00ff9d] text-sm font-black text-[#051014] shadow-[0_0_30px_rgba(34,211,238,0.45)]">
            BOS
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-extrabold tracking-tight">BOS</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-cyan-200/70">Powered by DOS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="text-sm font-semibold text-white/80 transition-colors hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://directiveos.com.au/contact"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-cyan-300/40 bg-gradient-to-r from-[#5b21b6] via-[#0ea5e9] to-[#10b981] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(14,165,233,0.4)] transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Book Demo
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-cyan-300 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-white/10 bg-[#05070d]/95 shadow-[0_16px_30px_rgba(0,0,0,0.5)] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-lg font-semibold text-white transition-colors hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://directiveos.com.au/contact"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/40 bg-gradient-to-r from-[#5b21b6] via-[#0ea5e9] to-[#10b981] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
