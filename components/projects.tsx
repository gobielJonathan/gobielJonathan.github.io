"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const projects = [
  {
    id: 1,
    title: "TalkToMe",
    image: "/talktome-icon.png",
    description: "web application designed to replicate the functionality of Google Meet",
    technologies: ["Next.js", "React", "Tailwind CSS", 'WebRTC', 'Socket.io'],
    liveUrl: "https://talktome.up.railway.app/",
    githubUrl: "https://github.com/gobielJonathan/talktome/",
  },
  {
    id: 2,
    title: "Crowde",
    image: "/crowde.webp",
    description: "A system that manages schedules and survey locations.",
    technologies: ["React", "Golang"],
    liveUrl: "https://www.crowde.co/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Cubes",
    image: "/cubes.webp",
    description: "A system that operates in the field of accounting management training.",
    technologies: ["Next.js", "Laravel"],
    liveUrl: "https://cubes.crmsindonesia.org/login?return_url=/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Inaskills",
    image: "/kemnaker.webp",
    description: "A system that operates in the field of competitions used by the Ministry of Manpower.",
    technologies: ["Jquery", "Laravel", "MySQL", "Bootstrap"],
    liveUrl: "https://inaskills.kemnaker.go.id/",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Kleveru",
    image: "/kleveru.webp",
    description: "A system that operates in the field of beauty.",
    technologies: ["Next.js", "Laravel", "MySQL", "Bootstrap"],
    liveUrl: "https://kleveru.co.id/",
    githubUrl: "#",
  },

  {
    id:6,
    title: "Sense",
    image: "/sense.webp",
    description: "A system that manages laundry.",
    technologies: ["React", "Golang"],
    liveUrl: "https://www.sensehospitality.id/",
    githubUrl: "#",
  },

  {
    id: 7,
    title: "Fita",
    image: "/fita.png",
    description: "A health application with comprehensive features and programs to help you start living a healthy life.",
    technologies: ["Tailwind CSS", "Next.js"],
    liveUrl: "https://fita.co.id/",
    githubUrl: "#",
  },


  {
    id: 8,
    title: "Brc Depo",
    image: "/brc-depo.png",
    description: "An application for selling household equipment.",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://brcdepo.com/",
    githubUrl: "#",
  },

  {
    id: 9,
    title: "Aerium",
    image: "/aerium.svg",
    description: "Residence Landing Page",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn/ui"],
    liveUrl: "https://www.aerium-residences.com/",
    githubUrl: "#",
  },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const isMobile = useMobile()

  return (
    <section id="projects" className="py-24">
      <div className="w-full max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-16 h-1 bg-primary mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Here are some of my recent projects. Each project is unique and showcases different skills and technologies.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative group"
            >
              <div
                className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8 items-center bg-card rounded-lg p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="relative h-[240px] w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Button size="icon" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                    { Boolean(project.githubUrl) && <Button size="icon" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>}
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

