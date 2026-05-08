/**
 * MASTER TEMPLATE: Bookos Multi-Tenant Real Estate – bookos.com.au
 * Root layout: fonts, metadata, theme color, and the html background class.
 */
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import Script from "next/script"
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

export const metadata: Metadata = {
  title: "BOS | AI Booking System by DOS",
  description:
    "BOS powers reservations, appointments, booking flows, and customer scheduling through the DOS ecosystem.",
  metadataBase: new URL("https://bookos.com.au"),
  openGraph: {
    title: "BOS | AI Booking System by DOS",
    description:
      "Booking systems for modern businesses across the DOS platform.",
    url: "https://bookos.com.au",
    siteName: "BOS",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#03050A",
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
        <Script
          src="https://chatos.com.au/micah-widget.js"
          data-client-id="micah-demo"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
