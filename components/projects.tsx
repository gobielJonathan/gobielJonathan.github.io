"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { Spotlight } from "@/components/motion/spotlight"

type Project = {
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
  highlights?: string[]
}

const featured: Project[] = [
  {
    title: "CariEV",
    image: "/projects/cariev.webp",
    description: "Find public and private EV charging stations nearby, with one-tap navigation handoff.",
    technologies: ["Next.js", "React", "Leaflet", "Tailwind CSS"],
    liveUrl: "https://cariev.gobiel.online/",
    highlights: ["Charger discovery across providers", "Navigation handoff, no re-searching"],
  },
  {
    title: "KirimFile",
    image: "/projects/kirimfile.webp",
    description: "Peer-to-peer file sharing in the browser across Android, iOS, and desktop, with nothing to install.",
    technologies: ["WebRTC", "React", "JavaScript"],
    liveUrl: "https://kirimfile.gobiel.online/",
    highlights: ["Direct transfer over WebRTC", "No sign-up: open, pair, share"],
  },
  {
    title: "Edit PDF",
    image: "/edit-pdf.png",
    description: "Edit and sign PDF text directly in the browser. Files never leave your device.",
    technologies: ["React", "JavaScript"],
    liveUrl: "https://editpdf.gobiel.online/",
    highlights: ["Private by design, no uploads", "Free, with zero sign-up"],
  },
]

const archive: Project[] = [
  {
    title: "TalkToMe",
    description: "A Google Meet style video calling app with real-time audio and video over WebRTC.",
    technologies: ["Next.js", "WebRTC", "Socket.io"],
    githubUrl: "https://github.com/gobielJonathan/talktome/",
  },
  { title: "Aerium", description: "Landing page for a premium residence.", technologies: ["Next.js", "Tailwind CSS"], liveUrl: "https://www.aerium-residences.com/" },
  { title: "Crowde", description: "Schedule and survey-location management with real-time data.", technologies: ["React", "Golang"], liveUrl: "https://www.crowde.co/" },
  { title: "Fita", description: "Health app with programs for building healthier habits.", technologies: ["Next.js", "Tailwind CSS"], liveUrl: "https://fita.co.id/" },
  { title: "Cubes", description: "Accounting management training system for enterprises in Indonesia.", technologies: ["Next.js", "Laravel"], liveUrl: "https://cubes.crmsindonesia.org/login?return_url=/" },
  { title: "Inaskills", description: "Competition management system for Indonesia's Ministry of Manpower.", technologies: ["Laravel", "MySQL"], liveUrl: "https://inaskills.kemnaker.go.id/" },
  { title: "Kleveru", description: "Platform connecting beauty service providers and customers.", technologies: ["Next.js", "Laravel"], liveUrl: "https://kleveru.co.id/" },
  { title: "Sense", description: "Hospitality management system for laundry operations.", technologies: ["React", "Golang"], liveUrl: "https://www.sensehospitality.id/" },
  { title: "Brc Depo", description: "E-commerce store for household equipment.", technologies: ["Next.js", "PostgreSQL"], liveUrl: "https://brcdepo.com/" },
]

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <Spotlight className="group h-full rounded-[1.6rem] border border-border/70 bg-card/85">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col p-3.5">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.2rem] border border-border/60 bg-muted/50">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />
            ) : null}
            <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-md backdrop-blur transition-all duration-500 group-hover:opacity-100 group-hover:rotate-0 rotate-[-45deg]">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <div className="flex flex-1 flex-col px-2.5 pb-2.5 pt-5">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">{project.title}</h3>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[hsl(var(--loop))]">live</span>
            </div>
            <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{project.description}</p>
            {project.highlights ? (
              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-xs leading-5 text-muted-foreground">
                    <span aria-hidden className="text-primary">→</span>
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </a>
      </Spotlight>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <Reveal>
          <span className="section-kicker">Side projects</span>
          <h2 className="section-heading mt-3 max-w-3xl">Small products I built and still run.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Each one started from a real annoyance: finding a charger, sending a file, editing a PDF without uploading it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featured.map((p, i) => (
            <FeaturedCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-16 flex items-center gap-4">
          <span className="section-kicker">Earlier work</span>
          <div className="h-px flex-1 bg-border/70" />
        </Reveal>

        <ul className="mt-4 divide-y divide-border/70 border-b border-border/70">
          {archive.map((p, i) => {
            const href = p.liveUrl ?? p.githubUrl
            return (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                transition={{ duration: 0.45, delay: (i % 5) * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 overflow-hidden px-2 py-4 sm:grid-cols-[10rem_minmax(0,1fr)_auto] sm:px-4"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 origin-left scale-x-0 bg-primary/[0.06] transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />
                  <span className="relative font-display text-lg font-semibold tracking-[-0.03em] text-foreground transition-transform duration-500 group-hover:translate-x-1">
                    {p.title}
                  </span>
                  <span className="relative hidden text-sm text-muted-foreground sm:block">{p.description}</span>
                  <span className="relative flex items-center gap-3">
                    <span className="hidden font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground lg:inline">
                      {p.technologies.join(" · ")}
                    </span>
                    {p.liveUrl ? (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    ) : (
                      <Github className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    )}
                  </span>
                </a>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
