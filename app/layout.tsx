/**
 * MASTER TEMPLATE: Bookos Multi-Tenant Real Estate – bookos.com.au
 * Root layout: fonts, metadata, theme color, and the html background class.
 */
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { tenantConfig } from "@/lib/tenant-config"
import "./globals.css"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

// TODO: Tenant Replace Here — SEO metadata
export const metadata: Metadata = {
  title: `${tenantConfig.brand.name} — ${tenantConfig.brand.tagline}`,
  description: tenantConfig.hero.subheadline,
  metadataBase: new URL(`https://${tenantConfig.brand.domain}`),
  openGraph: {
    title: `${tenantConfig.brand.name} — ${tenantConfig.brand.tagline}`,
    description: tenantConfig.hero.subheadline,
    url: `https://${tenantConfig.brand.domain}`,
    siteName: tenantConfig.brand.name,
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#FFD600",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontDisplay.variable} bg-background`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  )
}
