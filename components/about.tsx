"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Reveal } from "@/components/motion/reveal"

const toolkit = [
  "AI agent teams",
  "Loop engineering",
  "AI code review",
  "E2E automation",
  "React",
  "Next.js",
  "Vue",
  "TypeScript",
  "Node.js",
  "Web performance",
  "CI/CD",
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"])

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:items-center">
        <Reveal>
          <div ref={ref} className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.8rem] border border-border/70">
            <motion.div style={{ y }} className="absolute inset-[-8%]">
              <Image
                src="/me.jpg"
                alt="Portrait of Jonathan Gobiel"
                fill
                sizes="(max-width: 768px) 90vw, 30vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 rounded-full border border-border/70 bg-background/85 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              Jakarta, Indonesia
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="section-kicker">About</span>
            <h2 className="section-heading mt-3">A frontend engineer who started treating AI like infrastructure.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              I&apos;ve been building for the web since 2018: teaching and R&amp;D at Bina Nusantara, then four years on
              Tokopedia&apos;s web platform through its move into the TikTok ecosystem, and now product engineering at DANA.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              The constant has been the unglamorous parts: bundle size, build time, release quality. Agent teams are the
              newest tool for exactly that work. I care less about clever prompts and more about the loop around them:
              what the agent sees, how it gets feedback, and where a human signs off.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-8">
            <p className="rule-label">toolkit</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {toolkit.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.03 }}
                  whileHover={{ y: -2 }}
                  className={`chip cursor-default ${i < 4 ? "border-primary/40 bg-primary/10" : ""}`}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
