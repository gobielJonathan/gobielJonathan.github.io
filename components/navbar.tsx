"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-200"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mounted ? theme : "placeholder"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="block w-4 h-4"
        >
          {mounted && (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

const navItems = [
  { name: "Home",       href: "#home",       id: "home" },
  { name: "About",      href: "#about",      id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects",   href: "#projects",   id: "projects" },
  { name: "Skills",     href: "#skills",     id: "skills" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled]           = useState(false)
  const [menuOpen, setMenuOpen]           = useState(false)
  const isMobile                          = useMobile()
  const clickLockRef                      = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    if (clickLockRef.current) clearTimeout(clickLockRef.current)
    clickLockRef.current = setTimeout(() => { clickLockRef.current = null }, 1200)
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      if (clickLockRef.current) return
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el) {
          const { top, bottom } = el.getBoundingClientRect()
          if (top <= 120 && bottom >= 120) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // close menu on route change / resize
  useEffect(() => {
    if (!isMobile) setMenuOpen(false)
  }, [isMobile])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative">
            <span className="text-lg font-bold text-gradient">Jonathan Gobiel</span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-primary to-purple-400 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                    transition={{ type: "spring", stiffness: 380, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile fullscreen menu ───────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/90 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-16 inset-x-4 z-50 rounded-2xl border border-border/50 bg-card/90 backdrop-blur-xl p-6 shadow-xl shadow-black/10"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => { handleNavClick(item.id); setMenuOpen(false) }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${activeSection === item.id ? "bg-primary" : "bg-muted-foreground/30"}`} />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
