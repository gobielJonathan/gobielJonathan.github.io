"use client"

import { motion } from "framer-motion"
import { BriefcaseBusiness, Calendar } from "lucide-react"

// Sample experience data
const experiences = [
  {
    id: 1,
    company: "Tech Innovators Inc.",
    position: "Senior Frontend Developer",
    period: "Jan 2022 - Present",
    description:
      "Led the development of the company's flagship product, improving performance by 40%. Mentored junior developers and implemented modern frontend practices.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    period: "Mar 2019 - Dec 2021",
    description:
      "Developed and maintained multiple client projects. Implemented responsive designs and integrated various APIs. Worked in an agile team environment.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "SCSS"],
  },
  {
    id: 3,
    company: "WebCraft Agency",
    position: "Junior Web Developer",
    period: "Jun 2017 - Feb 2019",
    description:
      "Built and maintained websites for various clients. Collaborated with designers to implement pixel-perfect designs. Improved site performance and SEO.",
    technologies: ["JavaScript", "HTML", "CSS", "WordPress", "PHP"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="w-full max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-16 h-1 bg-primary mb-8"></div>
        </motion.div>

        <div className="relative border-l-2 border-muted pl-8 ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[41px] bg-background p-1 border-2 border-muted rounded-full">
                <BriefcaseBusiness className="h-5 w-5 text-primary" />
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

