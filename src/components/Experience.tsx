
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: "tokopedia",
      role: "Web Software Engineer",
      company: "Tokopedia",
      date: "Sep 2021 - Present",
      description: [
        "Implementing automation reporting prior to release, ensuring seamless quality control.",
        "Introducing a bundle size checker in PRs before merges, optimizing performance.",
        "Leading the smooth migration of the Tokopedia web platform into the TikTok ecosystem.",
        "Achieving a 90% reduction in build time during development, enhancing the developer experience.",
        "Standardizing the use of i18n across the Tokopedia web platform ecosystem to support internationalization.",
        "Migrating Tokopedia Web Services into the TikTok ecosystem, ensuring platform compatibility and operational continuity."
      ]
    },
    {
      id: "binus",
      role: "Research and Development Team",
      company: "Bina Nusantara University",
      date: "Sep 2019 - Sep 2021",
      description: [
        "Led enhancements to existing web and mobile applications, focusing on performance optimization and modernizing legacy systems.",
        "Redesigned the Hiring Web Application: Migrated the platform from a jQuery-based template to a modern, high-performing Next.js architecture.",
        "Revamped the Teaching Assistant Web Application: Transitioned the system from ASP.NET to Next.js, improving maintainability and user experience.",
        "Provided mentorship to teaching assistants during the research and development phase, supporting their growth and technical proficiency."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 lg:px-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-highlight font-mono mr-2">02.</span> Where I've Worked
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue="tokopedia" className="mt-8">
          <TabsList className="bg-navy w-full border-b border-navy-light flex overflow-x-auto scrollbar-none mb-8">
            {experiences.map((exp, index) => (
              <TabsTrigger 
                key={exp.id} 
                value={exp.id}
                className="data-[state=active]:text-highlight data-[state=active]:border-b-2 data-[state=active]:border-highlight px-4 py-2 font-mono text-sm"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id} className="animate-slide-in">
              <div>
                <h3 className="text-xl font-semibold text-slate-light">
                  {exp.role}{' '}
                  <span className="text-highlight">@ {exp.company}</span>
                </h3>
                <div className="flex items-center text-sm text-slate mb-4 mt-1 font-mono">
                  <Calendar className="h-4 w-4 mr-2" />
                  {exp.date}
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex"
                    >
                      <ChevronRight className="h-5 w-5 text-highlight flex-shrink-0 mr-2" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <motion.div 
        className="mt-12 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <div className="relative pl-10 timeline-item">
          <div className="timeline-dot"></div>
          <h3 className="text-lg font-semibold text-slate-light">Computer Science</h3>
          <p className="text-sm text-slate-light">Bina Nusantara University</p>
          <p className="text-sm text-slate mt-1">Education</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
