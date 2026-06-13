"use client"

import { motion } from "framer-motion"
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandVue,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandNodejs,
  IconBrandDocker,
  IconBrandGit,
  IconBrandFigma,
  IconBrandMysql,
  IconBrandMongodb,
  IconBrandTailwind,
  IconBrandGithub,
  IconBrandGraphql,
  IconBrandFlutter,
  IconBrandLaravel,
} from "@tabler/icons-react"

const skillGroups = [
  {
    label: "Frontend",
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "React", Icon: IconBrandReact },
      { name: "Next.js", Icon: IconBrandNextjs },
      { name: "Vue.js", Icon: IconBrandVue },
      { name: "TypeScript", Icon: IconBrandTypescript },
      { name: "JavaScript", Icon: IconBrandJavascript },
      { name: "HTML5", Icon: IconBrandHtml5 },
      { name: "CSS3", Icon: IconBrandCss3 },
      { name: "Tailwind", Icon: IconBrandTailwind },
    ],
  },
  {
    label: "Backend and data",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Node.js", Icon: IconBrandNodejs },
      { name: "Laravel", Icon: IconBrandLaravel },
      { name: "GraphQL", Icon: IconBrandGraphql },
      { name: "MySQL", Icon: IconBrandMysql },
      { name: "MongoDB", Icon: IconBrandMongodb },
    ],
  },
  {
    label: "Tools and workflow",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Docker", Icon: IconBrandDocker },
      { name: "Git", Icon: IconBrandGit },
      { name: "GitHub", Icon: IconBrandGithub },
      { name: "Figma", Icon: IconBrandFigma },
      { name: "Flutter", Icon: IconBrandFlutter },
    ],
  },
]

const contributions = [
  {
    value: "Frontend systems",
    label: "Designing UI architecture teams can keep extending.",
  },
  {
    value: "Performance passes",
    label: "Finding the expensive pieces and making them cheaper to ship.",
  },
  {
    value: "Release support",
    label: "Helping product work land cleanly across environments and teams.",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 bg-muted/20 dark:bg-muted/10" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16"
        >
          <span className="section-kicker">Toolbox</span>
          <h2 className="section-heading mt-3 max-w-2xl">
            The stack is broad, but the value is in choosing the right level of complexity.
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <div className="space-y-5">
            {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="panel p-5 sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full bg-gradient-to-br ${group.color}`} />
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                  {group.label}
                </span>
                <div className="h-px flex-1 bg-border/50" />
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map(({ name, Icon }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + i * 0.04 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="group flex cursor-default items-center gap-2 rounded-2xl border border-border/70 bg-background/65 px-4 py-3 transition-all duration-200 hover:border-primary/30 hover:bg-card"
                  >
                    <Icon size={18} className="text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="text-sm font-medium">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="panel panel-grid h-fit p-6 sm:p-8"
          >
            <p className="section-kicker">How I contribute</p>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-foreground">
              Useful in the room before and after the code is written.
            </h3>

            <div className="mt-8 space-y-4">
            {contributions.map(({ value, label }, i) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-[1.2rem] border border-border/70 bg-background/60 p-4"
              >
                <p className="font-display text-2xl font-semibold tracking-[-0.05em] text-foreground">{value}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{label}</p>
              </motion.div>
            ))}
            </div>

            <div className="mt-8 rounded-[1.2rem] border border-dashed border-border/80 bg-card/45 p-4">
              <p className="section-kicker">Common stack mix</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                React or Vue on the client, TypeScript as the glue, Node.js or Laravel behind it, and a constant bias toward removing friction for users and teammates.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
