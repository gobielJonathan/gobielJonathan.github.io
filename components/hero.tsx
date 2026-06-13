"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SocialRow } from "@/components/social-dock"

const releaseNotes = [
  {
    label: "Performance",
    value: "79% bundle reduction",
    note: "Lazy-loaded animation paths and tightened split boundaries.",
  },
  {
    label: "Scale",
    value: "Migration without chaos",
    note: "Guided large platform moves across ecosystem boundaries.",
  },
  {
    label: "DX",
    value: "Internal tooling that sticks",
    note: "Built route inspection and scaffolding workflows teams kept using.",
  },
]

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-x-0 top-0 h-px bg-border/70" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 sm:py-16"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-12"
        >
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-card/80 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground shadow-[0_14px_40px_-28px_rgba(15,23,42,0.4)]">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Jakarta based, open for freelance
              </span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="rule-label mb-4">for teams that want quality without release drama</p>
              <h1 className="font-display text-[3.35rem] font-semibold leading-[0.92] tracking-[-0.07em] text-foreground sm:text-[4.5rem] lg:text-[6.4rem]">
                I ship calm,
                <span className="block text-gradient glow">fast web products.</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
            >
              Full stack engineer with 5+ years across product teams in Indonesia. I turn messy requirements into stable releases, cleaner frontend systems, and measurable performance wins.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#projects" className="sm:flex-1 sm:max-w-[220px]">
                <Button
                  size="lg"
                  className="group w-full rounded-2xl bg-foreground px-6 text-primary-foreground shadow-[0_16px_40px_-24px_rgba(15,23,42,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground/92"
                >
                  <Eye className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  See case studies
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="group rounded-2xl border-border/80 bg-card/75 px-6 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card"
                onClick={() => window.open("https://drive.google.com/file/d/1a1-wxCLWo7g_69liq2J3YrXAMpy06GnA/view", "_blank")}
              >
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Open resume
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 lg:hidden">
              <SocialRow className="flex-wrap" />
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 grid grid-cols-2 gap-3 sm:max-w-xl sm:grid-cols-3">
              {[
                { value: "5+", label: "Years in product teams" },
                { value: "20+", label: "Projects shipped" },
                { value: "Web", label: "Frontends, DX, perf" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-[1.35rem] border border-border/70 bg-card/82 px-4 py-4 shadow-[0_14px_36px_-28px_rgba(15,23,42,0.45)]">
                  <div className="font-display text-3xl font-semibold tracking-[-0.06em] text-foreground">{stat.value}</div>
                  <div className="mt-1 text-sm leading-5 text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.aside variants={itemVariants} className="panel panel-grid relative overflow-hidden p-5 sm:p-6 lg:mt-10">
            <div className="absolute right-5 top-5 rounded-full border border-accent/30 bg-accent/12 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-accent-foreground/80">
              release manifest
            </div>
            <div className="pr-20">
              <p className="section-kicker">signature slice</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-foreground">
                Production wins, not portfolio filler.
              </h2>
            </div>

            <div className="mt-8 space-y-4">
              {releaseNotes.map((item) => (
                <div key={item.label} className="rounded-[1.25rem] border border-border/70 bg-background/55 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="section-kicker text-primary">{item.label}</p>
                      <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.05em] text-foreground">
                        {item.value}
                      </h3>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 text-muted-foreground" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.25rem] border border-dashed border-border/80 bg-card/45 p-4">
              <p className="section-kicker">what I optimize for</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Clarity in handoff, disciplined frontend architecture, and pages that feel lighter in production than they did in Figma.
              </p>
            </div>
          </motion.aside>
        </motion.div>
      </motion.div>
    </section>
  )
}



