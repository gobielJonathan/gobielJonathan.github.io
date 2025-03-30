
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const About = () => {
  const skills = [
    "Node.js", "TypeScript", "Docker", "GraphQL", "CSS", 
    "React.js", "Flutter", "Laravel", "MySQL", "Vue.js", "Angular"
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-highlight font-mono mr-2">01.</span> About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="mb-4">
            Hello! I'm Jonathan, a web software engineer with over 5 years of experience in designing, developing, and 
            optimizing high-performance, responsive websites. My expertise lies in crafting efficient, scalable web solutions 
            using modern technologies.
          </p>
          
          <p className="mb-4">
            My journey in web development began during my time at Bina Nusantara University, where I honed my skills 
            by working on research projects and enhancing existing applications. Now at Tokopedia, I focus on 
            optimizing performance, automating workflows, and ensuring seamless integration across platforms.
          </p>
          
          <p className="mb-4">
            I enjoy solving complex problems and turning ideas into reality through elegant interfaces. 
            My goal is to build applications that not only function flawlessly but also provide exceptional user experiences.
          </p>

          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or mentoring aspiring developers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-1"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-highlight/30 rounded-lg blur opacity-25 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative aspect-square bg-navy border border-highlight/50 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Jonathan Gobiel"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-highlight/10 hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-slate-light font-semibold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index % 6) }}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
