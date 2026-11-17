"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Reveal } from "@/components/motion/reveal"

type Role = {
  title: string
  period: string
  points: string[]
  tags?: string[]
  highlight?: boolean
}

type Company = {
  name: string
  period: string
  roles: Role[]
}

const companies: Company[] = [
  {
    name: "DANA Indonesia",
    period: "Oct 2025 – Present",
    roles: [
      {
        title: "Product Engineer",
        period: "Since Jul 2026",
        highlight: true,
        points: [
          "Designed and operate a multi-agent AI team for a consumer fintech mobile web product, with specialized agents for frontend development, code review, DevOps, QA, and technical documentation.",
          "Introduced AI loop engineering: closed feedback loops in which agents build, review, test, fix, and deploy, with engineers approving key decisions.",
          "Automated pull request monitoring, multi-agent code review, test case generation, and end-to-end testing on iOS and Android.",
        ],
        tags: ["AI agents", "Loop engineering", "CI/CD", "E2E automation"],
      },
      {
        title: "Software Engineer, Web Platform",
        period: "From Oct 2025",
        points: [
          "Reduced page bundle size by 18% by fixing a code-splitting boundary that bundled unrelated page code together.",
          "Cut bundle size by 79% on a heavy page by lazy-loading animation components.",
          "Improved Core Web Vitals by preloading critical scripts and moving images to WebP.",
          "Built internal CLI tools for route ownership and feature scaffolding.",
        ],
        tags: ["Vue.js", "TypeScript", "Web performance", "CLI"],
      },
    ],
  },
  {
    name: "Tokopedia (ByteDance / TikTok Shop)",
    period: "Sep 2021 – Oct 2025",
    roles: [
      {
        title: "Software Engineer, Web Platform",
        period: "Sep 2021 – Oct 2025",
        points: [
          "Helped steer the Tokopedia web platform migration into the TikTok ecosystem.",
          "Cut development build time by roughly 90%.",
          "Introduced bundle size checks in pull requests and automated pre-release reporting.",
          "Standardized i18n across the web platform ecosystem.",
        ],
        tags: ["React", "Next.js", "GraphQL", "Docker"],
      },
    ],
  },
  {
    name: "Bina Nusantara",
    period: "Jun 2018 – Sep 2021",
    roles: [
      {
        title: "Research & Development",
        period: "Sep 2019 – Sep 2021",
        points: [
          "Moved the hiring web app from jQuery to Next.js, and the teaching assistant app from ASP.NET to Next.js.",
          "Mentored teaching assistants during R&D delivery work.",
        ],
        tags: ["React", "Next.js", "C# Web API", "Flutter"],
      },
      {
        title: "Teaching Assistant",
        period: "Jun 2018 – Sep 2019",
        points: ["Taught practicum courses across algorithms, databases, security, and web, and ran project assessments."],
      },
    ],
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] })
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <Reveal>
          <span className="section-kicker">Experience</span>
          <h2 className="section-heading mt-3 max-w-3xl">
            From web platforms at scale to agent teams that ship them.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-14">
          <div aria-hidden className="absolute bottom-0 left-0 top-0 hidden w-px bg-border md:block md:left-[14rem]">
            <motion.div style={{ height: fill }} className="w-full bg-gradient-to-b from-primary via-[hsl(var(--loop))] to-transparent" />
          </div>

          <div className="space-y-14">
            {companies.map((company) => (
              <div key={company.name} className="grid gap-6 md:grid-cols-[12.5rem_minmax(0,1fr)]">
                <Reveal className="md:pr-8 md:pt-1">
                  <p className="font-display text-xl font-semibold tracking-[-0.03em] text-foreground">{company.name}</p>
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {company.period}
                  </p>
                </Reveal>

                <div className="space-y-4 md:pl-10">
                  {company.roles.map((role, i) => (
                    <Reveal key={role.title} delay={i * 0.08}>
                      <article
                        className={`group relative rounded-[1.4rem] border p-5 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_hsl(var(--primary)/0.55)] sm:p-6 ${
                          role.highlight ? "border-primary/40 bg-primary/[0.06]" : "border-border/70 bg-card/80 hover:border-primary/30"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`absolute -left-[2.85rem] top-7 hidden h-3 w-3 rounded-full ring-4 ring-background md:block ${
                            role.highlight ? "bg-primary" : "bg-border group-hover:bg-primary"
                          } transition-colors duration-300`}
                        />
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                          <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">{role.title}</h3>
                          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary">{role.period}</span>
                        </div>
                        <ul className="mt-4 space-y-2.5">
                          {role.points.map((point) => (
                            <li key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                              <span aria-hidden className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-[hsl(var(--loop))]" />
                              {point}
                            </li>
                          ))}
                        </ul>
                        {role.tags ? (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {role.tags.map((tag) => (
                              <span key={tag} className="chip">
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
