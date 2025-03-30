
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder, GitHub } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const featuredProjects = [
    {
      title: "TalkToMe",
      description: "A web application designed to replicate the functionality of Google Meet, but without the 1-hour meeting time limitation.",
      tech: ["Next.js", "WebRTC", "TailwindCSS"],
      github: "https://github.com/gobielJonathan/TalkToMe",
      external: "https://talktome.example.com",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Kleveru",
      description: "A system that operates in the field of beauty, providing management solutions for beauty salons and spas.",
      tech: ["Next.js", "Laravel", "TailwindCSS"],
      github: "https://github.com/gobielJonathan/Kleveru",
      external: "https://kleveru.example.com",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Fita",
      description: "A health application with comprehensive features and programs to help users start living a healthy life.",
      tech: ["Next.js", "TailwindCSS", "Firebase"],
      github: "https://github.com/gobielJonathan/Fita",
      external: "https://fita.example.com",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    }
  ];

  const otherProjects = [
    {
      title: "Sense",
      description: "A system that manages laundry services, from customer orders to delivery tracking.",
      tech: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/gobielJonathan/Sense",
      external: "https://sense.example.com"
    },
    {
      title: "Brc Depo",
      description: "An application for selling household equipment with inventory management and order processing.",
      tech: ["Next.js", "TailwindCSS", "PostgreSQL"],
      github: "https://github.com/gobielJonathan/BrcDepo",
      external: "https://brcdepo.example.com"
    },
    {
      title: "Aerium",
      description: "A modern landing page for a residential property development with interactive floor plans.",
      tech: ["Next.js", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/gobielJonathan/Aerium",
      external: "https://aerium.example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-highlight font-mono mr-2">03.</span> Some Things I've Built
      </motion.h2>

      <div className="space-y-32 mt-10 mb-20">
        {featuredProjects.map((project, i) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className={cn(
              "grid grid-cols-12 gap-4 md:gap-10 items-center",
              i % 2 === 1 ? "md:text-right" : ""
            )}
          >
            <div className={cn(
              "col-span-12 md:col-span-7 relative aspect-video group", 
              i % 2 === 1 ? "md:col-start-1" : "md:col-start-6 md:order-2"
            )}>
              <div className="absolute inset-0 bg-highlight/20 mix-blend-multiply rounded-lg overflow-hidden group-hover:bg-transparent transition-colors duration-300">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className={cn(
              "col-span-12 md:col-span-6",
              i % 2 === 1 ? "md:col-start-7 md:order-1" : "md:col-start-1"
            )}>
              <p className="font-mono text-sm text-highlight mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-slate-light mb-4">{project.title}</h3>
              
              <div className="bg-navy-light p-6 rounded-lg shadow-xl mb-4">
                <p className="text-slate">{project.description}</p>
              </div>
              
              <ul className={cn(
                "flex flex-wrap gap-x-4 gap-y-2 mb-6 text-sm font-mono text-slate-light",
                i % 2 === 1 ? "md:justify-end" : ""
              )}>
                {project.tech.map(tech => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              
              <div className={cn(
                "flex items-center gap-4",
                i % 2 === 1 ? "md:justify-end" : ""
              )}>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-light hover:text-highlight transition-colors"
                  aria-label={`${project.title} GitHub Repository`}
                >
                  <GitHub className="h-5 w-5" />
                </a>
                <a 
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-light hover:text-highlight transition-colors"
                  aria-label={`${project.title} Live Site`}
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="text-center text-2xl font-semibold text-slate-light mb-10">Other Noteworthy Projects</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * (i % 3) }}
            className="project-card group"
          >
            <a 
              href={project.external} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card-link"
              aria-label={project.title}
            ></a>
            
            <div className="flex justify-between items-start mb-8">
              <Folder className="h-12 w-12 text-highlight" />
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-light hover:text-highlight transition-colors z-10"
                  aria-label={`${project.title} GitHub Repository`}
                >
                  <GitHub className="h-5 w-5" />
                </a>
                <a 
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-light hover:text-highlight transition-colors z-10"
                  aria-label={`${project.title} Live Site`}
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold text-slate-light mb-2 group-hover:text-highlight transition-colors">
              {project.title}
            </h4>
            
            <p className="text-slate mb-4">{project.description}</p>
            
            <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-auto">
              {project.tech.map(tech => (
                <li key={tech} className="project-tech">{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
