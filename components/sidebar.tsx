"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home",       href: "#home",       id: "home" },
  { name: "About",      href: "#about",      id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects",   href: "#projects",   id: "projects" },
  { name: "Skills",     href: "#skills",     id: "skills" },
]

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/gobielJonathan/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jonathan-gobiel/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/gobiel__",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
  },
]

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const NavList = ({ onClickItem }: { onClickItem?: () => void }) => (
    <nav className="space-y-0.5">
      {navItems.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
        >
          <Link
            href={item.href}
            onClick={onClickItem}
            className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeSection === item.id
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
            }`}
          >
            {/* Active indicator */}
            <motion.span
              layoutId="nav-indicator"
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-primary rounded-full transition-all ${
                activeSection === item.id ? "opacity-100" : "opacity-0"
              }`}
            />
            {item.name}
            {activeSection === item.id && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 rounded-xl bg-primary/8 -z-10"
              />
            )}
          </Link>
        </motion.div>
      ))}
    </nav>
  )

  const SocialRow = () => (
    <div className="flex items-center gap-2">
      {socialLinks.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-200"
        >
          {icon}
        </a>
      ))}
    </div>
  )

  // ── Mobile top bar ──────────────────────────────────────────
  if (isMobile) {
    return (
      <>
        <header className="fixed top-0 inset-x-0 h-16 z-50 flex items-center px-4 border-b border-border/50 bg-background/80 backdrop-blur-xl">
          <button
            className="p-2 rounded-xl border border-border/50 hover:bg-muted/60 transition-all"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/" className="ml-4 text-lg font-bold tracking-tight">
            <span className="text-gradient">Jonathan Gobiel</span>
          </Link>
          <div className="ml-auto">
            <button
              className="p-2 rounded-xl border border-border/50 hover:bg-muted/60 transition-all"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </header>

        {/* Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
                className="fixed left-0 top-0 bottom-0 w-72 z-50 bg-background border-r border-border/50 flex flex-col p-6"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="font-bold text-lg">Jonathan Gobiel</p>
                    <p className="text-xs text-muted-foreground">Full Stack Engineer</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-muted/60 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <NavList onClickItem={() => setIsOpen(false)} />

                <div className="mt-auto pt-6 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <SocialRow />
                    <button
                      className="p-2 rounded-xl border border-border/50 hover:bg-muted/60 transition-all"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">© {new Date().getFullYear()} Jonathan Gobiel</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <div className="h-16" />
      </>
    )
  }

  // ── Desktop sidebar ─────────────────────────────────────────
  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] z-50 flex flex-col border-r border-border/40 bg-background/70 backdrop-blur-xl">
      {/* Header */}
      <div className="p-6 pb-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="group block">
            <span className="text-xl font-bold text-gradient">Jonathan Gobiel</span>
          </Link>
          <p className="text-xs text-muted-foreground mt-1 font-medium tracking-wide uppercase">Full Stack Engineer</p>
        </motion.div>

        {/* Active section indicator badge */}
        <div className="mt-4 h-px bg-gradient-to-r from-primary/30 via-primary/10 to-transparent" />
      </div>

      {/* Nav */}
      <div className="flex-1 px-4 overflow-y-auto">
        <NavList />
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border/40">
        <div className="flex items-center justify-between mb-3">
          <SocialRow />
          <button
            className="p-2 rounded-xl border border-border/40 hover:bg-muted/60 text-muted-foreground hover:text-foreground transition-all"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
        <p className="text-[11px] text-muted-foreground">© {new Date().getFullYear()} Jonathan Gobiel</p>
      </div>
    </aside>
  )
}



