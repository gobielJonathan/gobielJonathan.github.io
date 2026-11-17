"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Bot, GitPullRequest, Rocket, ScrollText, ShieldCheck, TestTubes, Wrench } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { Spotlight } from "@/components/motion/spotlight"
import { agentRoles, loopStages } from "@/lib/loop"

const stageIcons = [ScrollText, Wrench, GitPullRequest, TestTubes, ShieldCheck, Rocket]

export default function AgentLoop() {
  const listRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] })
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="loop" className="relative py-24 sm:py-32">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="section-kicker">How I work</span>
            <h2 className="section-heading mt-3">
              Agents handle volume.
              <span className="block text-muted-foreground">I handle judgment.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
              A one-shot prompt never learns whether its code compiled, passed review, or survived a real device.
              Loop engineering wires those outcomes back in, so each agent step starts from what actually happened.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <p className="rule-label">the bot team</p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {agentRoles.map((role, i) => (
                <motion.li
                  key={role.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Spotlight className="flex h-full items-start gap-3 rounded-2xl border border-border/70 bg-card/70 p-3.5">
                    <Bot className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{role.name}</p>
                      <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{role.note}</p>
                    </div>
                  </Spotlight>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute bottom-6 left-[15px] top-6 w-px bg-border sm:left-[23px]">
            <motion.div style={{ height: fill }} className="w-full bg-gradient-to-b from-primary via-[hsl(var(--loop))] to-accent" />
          </div>
        <ol ref={listRef} className="relative space-y-4 pl-10 sm:pl-14">

          {loopStages.map((stage, i) => {
            const Icon = stageIcons[i]
            return (
              <li key={stage.id} className="relative">
                <motion.span
                  aria-hidden
                  initial={{ scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "0px 0px -30% 0px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className={`absolute -left-10 top-5 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-background sm:-left-14 sm:h-12 sm:w-12 ${
                    stage.human ? "border-[hsl(var(--accent))] text-[hsl(var(--accent))]" : "border-primary text-primary"
                  }`}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.span>

                <Reveal y={20}>
                  <Spotlight
                    className={`rounded-[1.4rem] border p-5 sm:p-6 ${
                      stage.human
                        ? "border-[hsl(var(--accent)/0.55)] bg-[hsl(var(--accent)/0.08)]"
                        : "border-border/70 bg-card/80"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">{stage.label}</h3>
                      <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                        {stage.human ? "human" : "agents"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-[0.95rem] sm:leading-7">{stage.detail}</p>
                  </Spotlight>
                </Reveal>
              </li>
            )
          })}

          <li className="relative">
            <Reveal y={16}>
              <p className="flex items-center gap-2 pl-1 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[hsl(var(--loop))]">
                <span aria-hidden>↺</span> fail anywhere → back to build, with the logs attached
              </p>
            </Reveal>
          </li>
        </ol>
        </div>
      </div>
    </section>
  )
}
