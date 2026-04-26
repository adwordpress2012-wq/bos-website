/**
 * ============================================================================
 * MASTER TEMPLATE: BOS — AI Business Partner — bos.com.au
 * ----------------------------------------------------------------------------
 * This file composes the full one-page experience. It is intentionally thin —
 * all tenant-specific content lives in `lib/tenant-config.ts` and brand colors
 * in `app/globals.css`. To onboard a new client:
 *
 *   1. Edit `lib/tenant-config.ts`     — copy, industries, contact, socials
 *   2. Replace `/public/bos-logo-dark.png` with the tenant's logo
 *   3. (Optional) tweak `--primary` / `--accent` in `app/globals.css`
 *
 * No edits should be required in this file.
 * ============================================================================
 */

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { MicahSection } from "@/components/micah-section"
import { IndustriesGrid } from "@/components/industries-grid"
import { MultiTenantSection } from "@/components/multi-tenant-section"
import { AiSection } from "@/components/ai-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MicahSection />
      <IndustriesGrid />
      <MultiTenantSection />
      <AiSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
