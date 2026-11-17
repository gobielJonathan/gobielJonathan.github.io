import type React from "react"
import type { Metadata, Viewport } from "next"
import { IBM_Plex_Mono, Manrope, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import Navbar from "@/components/navbar"
import SocialDock from "@/components/social-dock"
import { ThemeProvider } from "@/components/theme-provider"
import SmoothScroll from "@/components/smooth-scroll"
import MotionProvider from "@/components/motion/motion-provider"
import CursorGlow from "@/components/motion/cursor-glow"
import ScrollProgress from "@/components/motion/scroll-progress"
import { site, siteUrl } from "@/lib/site"

import "./globals.css"

const display = Syne({ subsets: ["latin"], variable: "--font-display", display: "swap" })
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" })
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono", display: "swap" })

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef1f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f1a" },
  ],
  colorScheme: "light dark",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: "%s | Jonathan Gobiel",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [...site.keywords],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Google Search Console: after verifying ownership, either keep the DNS TXT method
  // (recommended, nothing needed here) or paste the HTML-tag token below / set
  // NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel. Do not commit a made-up token.
  // verification: { google: "PASTE_SEARCH_CONSOLE_TOKEN_HERE" },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    title: site.title,
    description: site.shortDescription,
    siteName: site.name,
    // images come from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.shortDescription,
    creator: site.twitterHandle,
    // images come from app/twitter-image.tsx
  },
  formatDetection: { email: false, address: false, telephone: false },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MotionProvider>
            <SmoothScroll>
              <ScrollProgress />
              <CursorGlow />
              <Navbar />
              <SocialDock />
              <main id="content" className="relative z-[2] min-h-screen">
                {children}
              </main>
              <Analytics />
            </SmoothScroll>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
