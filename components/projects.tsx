"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Tilt from "react-parallax-tilt"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "TalkToMe",
    image: "/talktome-icon.png",
    description: "Web application designed to replicate the functionality of Google Meet, with real-time audio and video via WebRTC.",
    technologies: ["Next.js", "React", "Tailwind CSS", "WebRTC", "Socket.io"],
    liveUrl: "https://talktome.up.railway.app/",
    githubUrl: "https://github.com/gobielJonathan/talktome/",
    highlights: [
      "Real-time browser communication via WebRTC.",
      "Room-based interaction that feels immediate and lightweight.",
      "Built as a practical systems exercise, not just a visual clone.",
    ],
  },
  {
    id: 2,
    title: "Aerium",
    image: "/aerium.svg",
    description: "Premium residences landing page with elegant UI and smooth animations.",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn/ui"],
    liveUrl: "https://www.aerium-residences.com/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Crowde",
    image: "/crowde.webp",
    description: "A system that manages schedules and survey locations with real-time data.",
    technologies: ["React", "Golang"],
    liveUrl: "https://www.crowde.co/",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Fita",
    image: "/fita.png",
    description: "A health app with comprehensive features and programs to start living a healthy life.",
    technologies: ["Tailwind CSS", "Next.js"],
    liveUrl: "https://fita.co.id/",
    githubUrl: "",
  },
  {
    id: 5,
    title: "Cubes",
    image: "/cubes.webp",
    description: "Accounting management training system used by enterprises across Indonesia.",
    technologies: ["Next.js", "Laravel"],
    liveUrl: "https://cubes.crmsindonesia.org/login?return_url=/",
    githubUrl: "",
  },
  {
    id: 6,
    title: "Inaskills",
    image: "/kemnaker.webp",
    description: "Competition management system used by Indonesia's Ministry of Manpower.",
    technologies: ["jQuery", "Laravel", "MySQL", "Bootstrap"],
    liveUrl: "https://inaskills.kemnaker.go.id/",
    githubUrl: "",
  },
  {
    id: 7,
    title: "Kleveru",
    image: "/kleveru.webp",
    description: "Beauty industry platform connecting service providers and customers.",
    technologies: ["Next.js", "Laravel", "MySQL", "Bootstrap"],
    liveUrl: "https://kleveru.co.id/",
    githubUrl: "",
  },
  {
    id: 8,
    title: "Sense",
    image: "/sense.webp",
    description: "Hospitality management system for laundry operations.",
    technologies: ["React", "Golang"],
    liveUrl: "https://www.sensehospitality.id/",
    githubUrl: "",
  },
  {
    id: 9,
    title: "Brc Depo",
    image: "/brc-depo.png",
    description: "E-commerce application for selling household equipment.",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://brcdepo.com/",
    githubUrl: "",
  },
  {
    id: 10,
    title: "CariEV",
    image: "https://media.licdn.com/dms/image/v2/D5622AQHHo59ZSPuAeg/feedshare-shrink_800/B56ZzlSc2WHIAg-/0/1773373346039?e=1775088000&v=beta&t=aTa9BmpadqQ-q49LTBYev7fGJd_DIPa00dXUywSmJbQ",
    description: "Discover public and private EV charging stations near you with one-tap navigation redirection.",
    technologies: ["Next.js", "React", "Leaflet", "Tailwind CSS"],
    liveUrl: "https://cariev.gobiel.online/",
    githubUrl: "",
    highlights: [
      "Unifies charger discovery across multiple providers.",
      "Supports quick navigation handoff instead of making users re-search.",
      "Designed around a real local mobility problem rather than a demo brief.",
    ],
  },
  {
    id: 11,
    title: "KirimFile",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGHbfuPcv9uug/feedshare-shrink_800/B56ZsQprBeIcAg-/0/1765510919128?e=1775088000&v=beta&t=-tJPQxvCzYGBkZSiy0oar-TtTEUydalDMB6-PxFC_6M",
    description: "Browser-based peer-to-peer file sharing that works on Android, iOS, and desktop with zero installs.",
    technologies: ["WebRTC", "React", "JavaScript"],
    liveUrl: "https://kirimfile.gobiel.online/",
    githubUrl: "",
    highlights: [
      "Serverless peer-to-peer transfer via WebRTC.",
      "Cross-platform by default with no sign-up burden.",
      "Built around immediacy: open, pair, and share.",
    ],
  },
  {
    id: 12,
    title: "Edit PDF",
    image: "/edit-pdf.png",
    description: "Edit PDF text directly in your browser — 100% private, no uploads to any server.",
    technologies: ["React", "JavaScript"],
    liveUrl: "https://editpdf.gobiel.online/",
    githubUrl: "",
    highlights: [
      "Sign any PDF — completely free, forever",
      "Effortlessly intuitive, no learning curve needed",
      "Zero sign-up, zero friction — just open and edit",
    ],
  },
]

const featuredProjectIds = new Set([10, 11, 1])
const featuredProjects = projects.filter((project) => featuredProjectIds.has(project.id))
const archiveProjects = projects.filter((project) => !featuredProjectIds.has(project.id))

function FeaturedProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.01} transitionSpeed={1200} className="h-full">
        <article className="panel group overflow-hidden p-4 sm:p-5">
          <div className="relative h-52 overflow-hidden rounded-[1.35rem] border border-border/70 bg-muted/40 sm:h-64">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} project screenshot`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t border-border/70 bg-background/82 px-4 py-3 backdrop-blur-sm">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-background"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-background"
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </a>
              )}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker text-primary">featured build</p>
                <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-foreground">
                  {project.title}
                </h3>
              </div>
              <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-foreground">
                live product
              </span>
            </div>

            <p className="text-sm leading-7 text-muted-foreground sm:text-base">{project.description}</p>
            {project.highlights && (
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-[1rem] border border-border/70 bg-background/60 px-3 py-3 text-xs leading-5 text-muted-foreground sm:text-sm"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/70 bg-background/65 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Tilt>
    </motion.div>
  )
}

function ArchiveProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="panel overflow-hidden p-4"
    >
      <div className="relative h-40 overflow-hidden rounded-[1.2rem] border border-border/70 bg-muted/35">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} project screenshot`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain p-5"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-[-0.05em] text-foreground">{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border/70 bg-background/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-background"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Open
        </a>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-background"
          >
            <Github className="h-3.5 w-3.5" />
            Code
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16"
        >
          <span className="section-kicker">Selected work</span>
          <h2 className="section-heading mt-3 max-w-3xl">
            A mix of production products, experiments, and tools that solve specific user problems.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Instead of throwing every thumbnail at the first screen, these are the builds that best show how I work: practical, product-shaped, and live.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-14 flex items-center gap-4">
          <span className="section-kicker">Archive</span>
          <div className="h-px flex-1 bg-border/70" />
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {archiveProjects.map((project, index) => (
            <ArchiveProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
