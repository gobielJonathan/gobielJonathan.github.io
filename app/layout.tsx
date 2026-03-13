import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import SocialDock from "@/components/social-dock"
import { ThemeProvider } from "@/components/theme-provider"
import SmoothScroll from "@/components/smooth-scroll"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" })

export const metadata: Metadata = {
  title: "Jonathan Gobiel | Portfolio",
  description: "Professional portfolio showcasing my work and skills as a fullstack developer",
  keywords: ["portfolio", "developer", "fullstack developer", "web development", "frontend", "backend"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.gobiel.online/",
    title: "Jonathan Gobiel | Portfolio",
    description: "Professional portfolio showcasing my work and skills as a fullstack developer",
    siteName: "Jonathan Gobiel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Gobiel | Portfolio",
    description: "Professional portfolio showcasing my work and skills as a fullstack developer",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-jakarta">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
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
