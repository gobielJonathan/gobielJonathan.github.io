"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Calendar } from "lucide-react";

// Sample experience data
const experiences = [
  {
    id: 1,
    company: "Tokopedia Inc.",
    position: "Software Engineer Web Platform",
    period: "Sept 2021 - Present",
    description: (
      <>
        <ul className="list-disc ml-5">
        <li>Implementing automation reporting prior to release, ensuring seamless quality control.</li>
<li>Introducing a bundle size checker in PRs before merges, optimizing performance.</li>
<li>Leading the smooth migration of the Tokopedia web platform into the TikTok ecosystem.</li>
<li>Achieving a 90% reduction in build time during development, enhancing the developer experience.</li>
<li>Standardizing the use of i18n across the Tokopedia web platform ecosystem to support internationalization.</li>
<li>Migrating Tokopedia Web Services into the TikTok ecosystem, ensuring platform compatibility and operational continuity.</li>
</ul>
      </>
    ),
    technologies: [
      "React",
      "Next.js",
      "Docker",
      "Graphql",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    company: "Bina Nusantara Inc.",
    position: "Research & Developement Team",
    period: "Sept 2019 - Sept 2021",
    description: (
      <ol className="list-disc ml-5">
       <li>Led enhancements to existing web and mobile applications, focusing on performance optimization and modernizing legacy systems.</li>
<li>Redesigned the Hiring Web Application by migrated the platform from a jQuery-based template to a modern, high-performing Next.js architecture.</li>
<li>Revamped the Teaching Assistant Web Application by transitioned the system from ASP.NET to Next.js, improving maintainability and user experience.</li>
<li>Provided mentorship to teaching assistants during the research and development phase, supporting their growth and technical proficiency.</li>
      </ol>
    ),
    technologies: [
      "C# Web API",
      "ReactJS",
      "Angular",
      "Laravel",
      "IIS",
      "SQL Server",
      "Java",
      "Flutter",
    ],
  },
  {
    id: 3,
    company: "Bina Nusantara Inc.",
    position: "Teaching Assistant",
    period: "Jun 2018 - Sept 2019",
    description: (
      <ol className="list-disc ml-5">
        <li>
          Progressive tests (projects) for assistant Game, Analysis, Web,
          Network, Mobile
        </li>
        <li>
          Practicum teaching (Algorithm, Database, Multimedia, Security, Web)
        </li>
        <li>Answer marking</li>
      </ol>
    ),
    technologies: ["C#", "PHP (Laravel)", "CSS", "PHP"],
  },
];

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
              <div className="absolute -left-[48px] bg-background p-1 border-2 border-muted rounded-full">
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

                <div className="text-muted-foreground mb-4">
                  {exp.description}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
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
  );
}
