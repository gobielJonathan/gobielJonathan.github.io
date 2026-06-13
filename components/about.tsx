"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { IconBriefcase, IconMail, IconMapPin, IconUser } from "@tabler/icons-react"

const info = [
  { Icon: IconUser, label: "Name", value: "Jonathan Gobiel" },
  { Icon: IconMail, label: "Email", value: "jonathangobiel13@gmail.com" },
  { Icon: IconMapPin, label: "Location", value: "Jakarta, Indonesia" },
  { Icon: IconBriefcase, label: "Availability", value: "Open for freelance" },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16"
        >
          <span className="section-kicker">About</span>
          <h2 className="section-heading mt-3 max-w-2xl">
            A frontend-heavy engineer who cares about how the release feels after launch.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="panel panel-grid relative overflow-hidden p-4 sm:p-5"
          >
            <div className="relative h-[360px] w-full overflow-hidden rounded-[1.4rem] border border-border/70 sm:h-[430px]">
              <Image
                src="/me.jpg"
                alt="Portrait of Jonathan Gobiel, Full Stack Engineer"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-4">
                <div className="rounded-full border border-border/80 bg-background/80 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground backdrop-blur-sm">
                  Jakarta, Indonesia
                </div>
                <div className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-foreground backdrop-blur-sm">
                  available now
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-[1.2rem] border border-border/70 bg-background/82 p-4 backdrop-blur-sm">
                  <p className="font-display text-2xl font-semibold tracking-[-0.05em]">Jonathan Gobiel</p>
                  <p className="mt-1 text-sm text-muted-foreground">Full stack engineer with a frontend systems bias</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-[1.1rem] border border-border/70 bg-background/55 p-3">
                <p className="section-kicker text-primary">focus</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Architecture, performance, and maintainable product UI.
                </p>
              </div>
              <div className="rounded-[1.1rem] border border-border/70 bg-background/55 p-3">
                <p className="section-kicker text-primary">mode</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Shipping with product, design, and platform teams.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="panel p-6 sm:p-8">
              <p className="text-lg leading-8 text-foreground/90 sm:text-xl">
                I work best on products that need both polish and discipline: the interface has to feel good,
                but the code also has to survive the next sprint, the next teammate, and the next traffic spike.
              </p>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Over the past 5+ years I have shipped web applications across commerce, fintech, internal
                tooling, government, and consumer products. My strongest lane is frontend engineering with
                React, Next.js, Vue, and TypeScript, backed by enough Node.js and PHP experience to own the
                full path from feature idea to production release.
              </p>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                The work I enjoy most sits where product ambition meets engineering constraint: slimming
                bundles, improving developer workflows, smoothing migrations, and turning dense requirements
                into interfaces people can actually navigate.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {info.map(({ Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
                  className="panel flex items-start gap-3 p-4"
                >
                  <div className="rounded-2xl border border-border/70 bg-background/70 p-2.5">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-[0.64rem] uppercase tracking-[0.26em] text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-foreground">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="panel p-6 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="section-kicker">What teams get</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                    <li>Clear communication between product intent and implementation detail.</li>
                    <li>Frontend decisions that reduce fragility instead of adding cleverness.</li>
                    <li>Attention to performance before it becomes a release problem.</li>
                  </ul>
                </div>
                <div>
                  <p className="section-kicker">Current stack</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["React", "Next.js", "Vue", "TypeScript", "Node.js", "Web performance"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/70 bg-background/65 px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
