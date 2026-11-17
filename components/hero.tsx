"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import LoopOrbit from "@/components/loop-orbit"
import { Magnetic } from "@/components/motion/magnetic"
import { SplitWords } from "@/components/motion/split-words"
import { SocialRow } from "@/components/social-dock"
import { loopStages } from "@/lib/loop"

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()
  const [step, setStep] = useState(0)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  // Only tick while the hero is on screen and nobody is hovering the loop.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (reduce || paused || !inView) return
    const id = window.setInterval(() => setStep((s) => s + 1), 2400)
    return () => window.clearInterval(id)
  }, [reduce, paused, inView])

  const active = step % loopStages.length
  const stage = loopStages[active]

  const select = (index: number) => {
    setStep((s) => s - (s % loopStages.length) + index)
  }

  return (
    <section ref={sectionRef} id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-28">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-border/70 bg-card/80 px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur sm:text-[0.66rem] sm:tracking-[0.2em]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--loop))] animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--loop))]" />
            </span>
            Product Engineer · Jakarta<span className="hidden sm:inline">, Indonesia</span>
          </motion.p>

          <h1 className="font-display text-[3.1rem] font-semibold leading-[0.95] tracking-[-0.065em] text-foreground sm:text-[4.6rem] lg:text-[5.6rem]">
            <span className="mb-4 block font-body text-base font-semibold tracking-normal text-muted-foreground sm:text-lg">
              Jonathan Gobiel —
            </span>
            <SplitWords text="Product engineering" className="block" delay={0.05} />
            <SplitWords text="with agents" className="block" delay={0.18} />
            <SplitWords
              text="in the loop."
              className="block"
              wordClassName="text-gradient text-gradient-animated"
              delay={0.3}
            />
          </h1>

          <motion.p
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          >
            I&apos;m a frontend and product engineer at DANA Indonesia. I design multi-agent bot teams that build, review,
            test, and fix frontend code in closed feedback loops, with engineers approving the calls that matter.
          </motion.p>

          {/* live status line, synced with the orbit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-6 flex items-center gap-2 font-mono text-xs text-muted-foreground sm:text-sm"
            aria-live="polite"
          >
            <span className="text-[hsl(var(--loop))]">$</span>
            <span>loop</span>
            <span className="text-foreground/40">→</span>
            <span className="relative inline-flex h-5 overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={stage.id}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className={stage.human ? "text-[hsl(var(--accent))]" : "text-foreground"}
                >
                  {stage.status}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="caret inline-block h-4 w-[2px] bg-foreground/60" aria-hidden />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Magnetic>
              <Link
                href="/blog/what-is-ai-loop-engineering"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-semibold text-background shadow-[0_18px_40px_-20px_hsl(var(--primary)/0.8)] transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Read: What is AI loop engineering?
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href="https://drive.google.com/file/d/1a1-wxCLWo7g_69liq2J3YrXAMpy06GnA/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card/70 px-6 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/50"
              >
                Open resume
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 lg:hidden"
          >
            <SocialRow className="flex-wrap" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease }}
          className="relative px-4 sm:px-10 lg:px-0"
        >
          <LoopOrbit step={step} onSelect={select} onHoverChange={setPaused} />
          <p className="mt-4 text-center font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
            hover or tap a stage
          </p>
        </motion.div>
      </div>

      <motion.a
        href="#loop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground sm:flex"
      >
        how the loop runs
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-6 w-px bg-gradient-to-b from-foreground/50 to-transparent"
        />
      </motion.a>
    </section>
  )
}
