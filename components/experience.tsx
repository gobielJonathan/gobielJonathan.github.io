"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconBuilding, IconCalendar } from "@tabler/icons-react";

const experiences = [
  {
    id: 0,
    company: "DANA Indonesia",
    position: "Software Engineer Web Platform",
    period: "Oct 2025 – Present",
    description: [
      "Reduced page bundle size by 18% by resolving an incorrect code-splitting boundary that caused unrelated page code to be bundled together.",
      "Achieved a 79% bundle size reduction by lazy-loading heavy animation components, significantly improving initial page load performance.",
      "Improved Core Web Vitals by preloading critical scripts to reduce Total Blocking Time and adopting WebP images to accelerate Largest Contentful Paint.",
      "Built internal CLI tools that clarified route ownership and standardized feature scaffolding across the codebase.",
      "Automated local SSL certificate setup, removing a recurring blocker for Android emulator testing.",
    ],
    technologies: ["Vue.js", "TypeScript", "Lottie", "WebP", "CLI", "WebPerf"],
    color: "from-sky-500 to-blue-600",
  },
  {
    id: 1,
    company: "Tokopedia Inc.",
    position: "Software Engineer Web Platform",
    period: "Sept 2021 – Oct 2025",
    description: [
      "Implemented automation reporting before releases to keep quality visible.",
      "Introduced bundle size checks in pull requests before merge.",
      "Helped steer the Tokopedia web platform migration into the TikTok ecosystem.",
      "Cut development build time by roughly 90%, improving day-to-day developer flow.",
      "Standardized i18n across the broader web platform ecosystem.",
    ],
    technologies: ["React", "Next.js", "Docker", "GraphQL", "TypeScript", "Tailwind CSS"],
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    company: "Bina Nusantara Inc.",
    position: "Research & Development Team",
    period: "Sept 2019 – Sept 2021",
    description: [
      "Led enhancements to web and mobile products with a strong performance lens.",
      "Redesigned the Hiring Web App by moving it from jQuery toward a Next.js architecture.",
      "Revamped the Teaching Assistant App by replacing an ASP.NET implementation with Next.js.",
      "Mentored teaching assistants during R&D delivery work.",
    ],
    technologies: ["C# Web API", "ReactJS", "Angular", "Laravel", "IIS", "SQL Server", "Flutter"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    company: "Bina Nusantara Inc.",
    position: "Teaching Assistant",
    period: "Jun 2018 – Sept 2019",
    description: [
      "Ran progressive project tests across game, analysis, web, network, and mobile tracks.",
      "Taught practicum material spanning algorithms, databases, multimedia, security, and web.",
      "Handled assessment and student guidance across multiple technical courses.",
    ],
    technologies: ["C#", "PHP", "Laravel", "CSS"],
    color: "from-emerald-500 to-teal-500",
  },
];

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-7 sm:pl-10"
    >
      <div className="absolute left-0 top-6 flex -translate-x-1/2 items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.2 }}
          className={`h-4 w-4 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-background shadow-lg`}
        />
      </div>

      <motion.div
        whileHover={{ y: -4, boxShadow: "0 24px 48px -28px rgba(15, 23, 42, 0.42)" }}
        transition={{ duration: 0.25 }}
        className="panel ml-3 p-5 sm:ml-5 sm:p-6"
      >
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="section-kicker text-primary">{exp.period}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-[-0.05em]">
              {exp.position}
            </h3>
            <div className="mt-2 flex items-center gap-1.5">
              <IconBuilding size={14} className="text-primary" />
              <span className="text-sm font-semibold text-foreground">{exp.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-border/70 bg-background/65 px-3 py-2 text-sm text-muted-foreground">
            <IconCalendar size={14} />
            <span>{exp.period}</span>
          </div>
        </div>

        <ul className="mb-5 space-y-2">
          {exp.description.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.12 + i * 0.05 + 0.3 }}
              className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
            >
              <span className={`mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${exp.color}`} />
              {item}
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="rounded-full border border-border/70 bg-background/65 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-foreground"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="experience" ref={sectionRef} className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16"
        >
          <span className="section-kicker">Experience</span>
          <h2 className="section-heading mt-3 max-w-2xl">
            A track record built on cleaner systems, faster pages, and fewer surprises in production.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-border/50">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-accent to-primary/20"
            />
          </div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


