"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Tilt from "react-parallax-tilt"
import { IconMapPin, IconMail, IconUser, IconBriefcase } from "@tabler/icons-react"

const info = [
  { Icon: IconUser,      label: "Name",         value: "Jonathan Gobiel" },
  { Icon: IconMail,      label: "Email",        value: "jonathangobiel13@gmail.com" },
  { Icon: IconMapPin,    label: "Location",     value: "Jakarta, Indonesia" },
  { Icon: IconBriefcase, label: "Availability", value: "Open for freelance" },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Subtle bg blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">Who I Am</span>
          <h2 className="section-heading mt-2">About Me</h2>
          <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* ── Profile Image with Tilt ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable
              glareMaxOpacity={0.08}
              glareColor="hsl(262 83% 70%)"
              glarePosition="all"
              scale={1.02}
              transitionSpeed={1000}
              className="rounded-2xl"
            >
              <div className="relative h-[360px] sm:h-[420px] w-full overflow-hidden rounded-2xl border border-primary/10">
                <Image
                  src="/me.jpg"
                  alt="Jonathan Gobiel"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                {/* Reveal animation */}
                <motion.div
                  initial={{ scaleY: 1 }}
                  whileInView={{ scaleY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "top" }}
                  className="absolute inset-0 bg-primary z-10"
                />
                {/* Name badge */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="glass rounded-xl px-4 py-2">
                    <p className="font-semibold text-sm">Jonathan Gobiel</p>
                    <p className="text-xs text-muted-foreground">Full Stack Engineer</p>
                  </div>
                </div>
              </div>
            </Tilt>

            {/* Decorative corner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-4 -right-4 h-20 w-20 border-2 border-primary/30 rounded-2xl hidden md:block"
            />
          </motion.div>

          {/* ── Text Content ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full Stack Engineer with over <span className="text-foreground font-semibold">5 years of experience</span> building modern, scalable web applications. While my core expertise lies in frontend development — React, Vue 3, TypeScript — I also have solid backend experience with Node.js and PHP to deliver robust, end-to-end solutions.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              My journey started in college and I've since worked across industries delivering high-quality products. I love turning complex requirements into clean, performant, and delightful user experiences.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {info.map(({ Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-3 p-3 rounded-xl border border-border/50 bg-card/40 hover:border-primary/30 hover:bg-card/70 transition-all duration-200"
                >
                  <div className="p-1.5 rounded-lg bg-primary/10 shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-medium mt-0.5">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
