"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Tilt from "react-parallax-tilt"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "TalkToMe",
    image: "/talktome-icon.png",
    description: "Web application designed to replicate the functionality of Google Meet, with real-time audio/video via WebRTC.",
    technologies: ["Next.js", "React", "Tailwind CSS", "WebRTC", "Socket.io"],
    liveUrl: "https://talktome.up.railway.app/",
    githubUrl: "https://github.com/gobielJonathan/talktome/",
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
    description: "Discover public & private EV charging stations near you with one-tap navigation redirection — no more juggling multiple provider apps.",
    technologies: ["Next.js", "React", "Leaflet", "Tailwind CSS"],
    liveUrl: "https://cariev.gobiel.online/",
    githubUrl: "",
    highlights: [
      "Discover public & private EV charging stations",
      "Direct navigation redirection to any station",
      "Find nearby chargers at a glance",
      "Replaces multiple provider apps in one place",
    ],
  },
  {
    id: 11,
    title: "KirimFile",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGHbfuPcv9uug/feedshare-shrink_800/B56ZsQprBeIcAg-/0/1765510919128?e=1775088000&v=beta&t=-tJPQxvCzYGBkZSiy0oar-TtTEUydalDMB6-PxFC_6M",
    description: "Browser-based peer-to-peer file sharing — works on Android, iOS, and desktop with zero installs. Just open and share.",
    technologies: ["WebRTC", "React", "JavaScript"],
    liveUrl: "https://kirimfile.gobiel.online/",
    githubUrl: "",
    highlights: [
      "Serverless P2P transfer via WebRTC",
      "Works on any device with a browser",
      "No installs or sign-ups required",
      "Cross-platform: Android, iOS, PC",
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

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        glareEnable
        glareMaxOpacity={0.06}
        glareColor="hsl(262 83% 70%)"
        glarePosition="all"
        scale={1.02}
        transitionSpeed={1200}
        className="h-full"
      >
        <div className="group glass-card rounded-2xl overflow-hidden h-full flex flex-col hover:border-primary/25 transition-colors duration-300">
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-muted/40">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-108"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-all duration-300 backdrop-blur-sm">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-primary text-xs font-semibold hover:bg-white/90 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold border border-white/30 hover:bg-white/30 transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.description}</p>
            {project.highlights && (
              <ul className="flex-1 mb-4 space-y-1">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                    <span className="mt-1 w-1 h-1 rounded-full bg-primary/70 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
            {!project.highlights && <div className="flex-1" />}
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Bg accent */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">Portfolio</span>
          <h2 className="section-heading mt-2">My Projects</h2>
          <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-xl">
            Recent work across different industries — from real-time communication to e-commerce and government platforms.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
