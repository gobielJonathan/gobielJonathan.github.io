"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SocialRow } from "@/components/social-dock"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

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
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* ── Mesh gradient background ──────────────────────────── */}
      <div className="absolute inset-0 mesh-bg" />

      {/* ── Parallax blobs ────────────────────────────────────── */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] animate-blob pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[80px] animate-blob animation-delay-2000 pointer-events-none"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute -bottom-24 left-1/3 w-[350px] h-[350px] rounded-full bg-pink-500/8 blur-[80px] animate-blob animation-delay-4000 pointer-events-none"
      />

      {/* ── Grid pattern overlay ───────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)/1) 1px,transparent 1px),linear-gradient(90deg,hsl(var(--foreground)/1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Main content ──────────────────────────────────────── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto px-8 py-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for freelance
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
              <span className="block text-foreground/90">Hi, I'm</span>
              <span className="block text-gradient glow">Gobiel 👋</span>
            </h1>
          </motion.div>

          {/* Type animation */}
          <motion.div variants={itemVariants} className="h-12 mb-8">
            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground flex items-center gap-2">
              <span>I</span>
              <TypeAnimation
                sequence={[
                  "build full-stack web apps",
                  2000,
                  "craft pixel-perfect UIs",
                  2000,
                  "ship production-ready code",
                  2000,
                  "turn ideas into products",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={65}
                repeat={Infinity}
                className="text-primary font-semibold"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Full Stack Engineer with 5+ years building scalable web applications. Specialized in React, Next.js, and Node.js — from concept to deployment.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link href="#projects">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300"
              >
                <Eye className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                View My Work
                <span className="absolute inset-0 animate-shimmer" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="group border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              onClick={() => window.open("https://drive.google.com/file/d/1a1-wxCLWo7g_69liq2J3YrXAMpy06GnA/view", "_blank")}
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download CV
            </Button>
          </motion.div>

          {/* Social links — visible on mobile only (desktop uses the fixed dock) */}
          <motion.div variants={itemVariants} className="mt-8 lg:hidden">
            <SocialRow />
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap gap-8"
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "20+", label: "Projects Shipped" },
              { value: "2", label: "Companies" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl font-bold text-gradient">{stat.value}</span>
                <span className="text-sm text-muted-foreground mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </motion.div>
    </section>
  )
}



