import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Mono, Manrope, Syne } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import SocialDock from "@/components/social-dock"
import { ThemeProvider } from "@/components/theme-provider"
import SmoothScroll from "@/components/smooth-scroll"

const display = Syne({ subsets: ["latin"], variable: "--font-display" })
const body = Manrope({ subsets: ["latin"], variable: "--font-body" })
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono" })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
  ? process.env.NEXT_PUBLIC_SITE_URL
  : "https://www.gobiel.online"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jonathan Gobiel | Full Stack Developer Indonesia",
    template: "%s | Jonathan Gobiel",
  },
  description:
    "Hire Jonathan Gobiel, a full stack developer in Indonesia. Explore Next.js, React, and Node.js projects, experience, and proven web performance results.",
  keywords: [
    "Jonathan Gobiel",
    "full stack engineer",
    "full stack developer portfolio",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "web performance",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Jonathan Gobiel", url: "https://www.gobiel.online" }],
  creator: "Jonathan Gobiel",
  publisher: "Jonathan Gobiel",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Jonathan Gobiel | Full Stack Developer Indonesia",
    description:
      "Hire Jonathan Gobiel, a full stack developer in Indonesia with proven Next.js, React, and Node.js delivery experience.",
    siteName: "Jonathan Gobiel",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jonathan Gobiel social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Gobiel | Full Stack Developer Indonesia",
    description:
      "Hire Jonathan Gobiel, a full stack developer in Indonesia with proven Next.js, React, and Node.js delivery experience.",
    images: ["/twitter-image"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SmoothScroll>
            <Navbar />
            <SocialDock />
            <main className="min-h-screen">{children}</main>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
