import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 md:ml-[280px]">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'