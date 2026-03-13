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
      "Improved Core Web Vitals by preloading critical scripts to reduce Total Blocking Time (TBT) and adopting WebP images to accelerate Largest Contentful Paint (LCP).",
      "Enhanced developer experience by building two internal CLI tools: a Route Inspector for tracing URL-to-component ownership, and a module scaffolding generator that standardises new feature structure across the codebase.",
      "Improved team productivity by automating local SSL certificate setup, eliminating a recurring blocker that prevented Android emulator testing.",
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
      "Implemented automation reporting prior to release, ensuring seamless quality control.",
      "Introduced a bundle size checker in PRs before merges, optimizing performance.",
      "Led the smooth migration of the Tokopedia web platform into the TikTok ecosystem.",
      "Achieved a 90% reduction in build time during development, enhancing DX.",
      "Standardized i18n across the Tokopedia web platform ecosystem.",
      "Migrated Tokopedia Web Services into the TikTok ecosystem.",
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
      "Led enhancements to existing web & mobile apps, focusing on performance optimization.",
      "Redesigned the Hiring Web App — migrated from jQuery to Next.js architecture.",
      "Revamped the Teaching Assistant App — transitioned from ASP.NET to Next.js.",
      "Mentored teaching assistants during the R&D phase.",
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
      "Progressive project tests for Game, Analysis, Web, Network, Mobile assistants.",
      "Practicum teaching: Algorithm, Database, Multimedia, Security, Web.",
      "Answer marking and student guidance.",
    ],
    technologies: ["C#", "PHP (Laravel)", "CSS", "PHP"],
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
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 -translate-x-1/2 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.2 }}
          className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-background shadow-lg`}
        />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -4, boxShadow: "0 20px 40px -12px hsl(var(--primary)/0.15)" }}
        transition={{ duration: 0.25 }}
        className="glass-card rounded-2xl p-6 ml-4"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
          <div>
            <h3 className="text-lg font-bold leading-tight">{exp.position}</h3>
            <div className="flex items-center gap-1.5 mt-1">
              <IconBuilding size={14} className="text-primary" />
              <span className="text-primary font-semibold text-sm">{exp.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 text-muted-foreground text-sm">
            <IconCalendar size={14} />
            <span>{exp.period}</span>
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-1.5 mb-5">
          {exp.description.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.12 + i * 0.05 + 0.3 }}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className={`mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color} shrink-0`} />
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="text-xs px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15 font-medium"
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
    <section id="experience" ref={sectionRef} className="relative py-28 overflow-hidden">
      {/* Bg accent */}
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">My Journey</span>
          <h2 className="section-heading mt-2">Work Experience</h2>
          <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border/50">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-purple-400 to-primary/20"
            />
          </div>

          {/* Experience cards */}
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


