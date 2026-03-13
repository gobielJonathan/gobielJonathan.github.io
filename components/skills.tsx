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
    label: "Backend & DB",
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
    label: "Tools & More",
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

const stats = [
  { value: "5+", label: "Years Coding", pct: 80 },
  { value: "20+", label: "Projects Done", pct: 70 },
  { value: "~100%", label: "Client Satisfaction", pct: 92 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* BG accents */}
      <div className="absolute inset-0 bg-muted/20 dark:bg-muted/10" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">What I Know</span>
          <h2 className="section-heading mt-2">Skills & Tools</h2>
          <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto" />
        </motion.div>

        {/* Skill groups */}
        <div className="space-y-12 mb-20">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${group.color}`} />
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {group.label}
                </span>
                <div className="flex-1 h-px bg-border/50" />
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
                    className="group flex items-center gap-2 px-4 py-2 rounded-xl border border-border/50 bg-card/60 hover:border-primary/30 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5 transition-all duration-200 cursor-default"
                  >
                    <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm font-medium">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold mb-8 text-center">Milestones</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map(({ value, label, pct }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-semibold text-foreground">{label}</span>
                  <span className="text-2xl font-bold text-gradient">{value}</span>
                </div>
                <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-purple-400"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
