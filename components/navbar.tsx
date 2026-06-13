"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useMobile } from "@/hooks/use-mobile"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const handleThemeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(newTheme)
      })
    } else {
      setTheme(newTheme)
    }
  }

  return (
    <button
      onClick={handleThemeToggle}
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
  { name: "Home",       href: "/#home",       id: "home" },
  { name: "About",      href: "/#about",      id: "about" },
  { name: "Experience", href: "/#experience", id: "experience" },
  { name: "Projects",   href: "/#projects",   id: "projects" },
  { name: "Skills",     href: "/#skills",     id: "skills" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled]           = useState(false)
  const [menuOpen, setMenuOpen]           = useState(false)
  const pathname                          = usePathname()
  const isMobile                          = useMobile()
  const clickLockRef                      = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    if (clickLockRef.current) clearTimeout(clickLockRef.current)
    clickLockRef.current = setTimeout(() => { clickLockRef.current = null }, 1200)
  }

  useEffect(() => {
    const isBlogRoute = pathname.startsWith("/blog")

    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      if (isBlogRoute) {
        setActiveSection("blog")
        return
      }

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
  }, [pathname])

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
            ? "bg-background/82 backdrop-blur-md border-b border-border/60 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.35)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-card/80 font-display text-lg font-semibold tracking-[-0.06em] text-foreground transition-transform duration-200 group-hover:-translate-y-0.5">
              JG
            </span>
            <span className="flex flex-col">
              <span className="font-display text-lg font-semibold tracking-[-0.05em] text-foreground">Jonathan Gobiel</span>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">web platform engineer</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/70 bg-card/72 px-2 py-1 shadow-[0_14px_40px_-28px_rgba(15,23,42,0.4)] backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-background border border-border/80"
                    transition={{ type: "spring", stiffness: 380, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
            <Link
              href="/blog"
              onClick={() => handleNavClick("blog")}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                activeSection === "blog"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeSection === "blog" && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-background border border-border/80"
                  transition={{ type: "spring", stiffness: 380, damping: 35 }}
                />
              )}
              <span className="relative z-10">Blog</span>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              className="rounded-2xl border border-border/70 bg-card/80 p-2 text-muted-foreground transition-all hover:text-foreground hover:bg-muted/60 md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/78 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-4 top-20 z-50 panel panel-grid p-5"
            >
              <div className="rule-label mb-4">sections</div>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/blog"
                  onClick={() => { handleNavClick("blog"); setMenuOpen(false) }}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    activeSection === "blog"
                      ? "border-primary/30 bg-primary/10 text-foreground"
                      : "border-transparent text-muted-foreground hover:border-border/70 hover:bg-muted/60 hover:text-foreground"
                  }`}
                >
                  <span>Blog</span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">/blog</span>
                </Link>
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
                      className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                        activeSection === item.id
                          ? "border-primary/30 bg-primary/10 text-foreground"
                          : "border-transparent text-muted-foreground hover:border-border/70 hover:bg-muted/60 hover:text-foreground"
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">#{item.id}</span>
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
