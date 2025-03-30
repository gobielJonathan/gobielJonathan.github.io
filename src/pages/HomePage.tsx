
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, AtSign, ExternalLink } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-navy-dark flex">
      {/* Left sidebar navigation */}
      <motion.aside 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="hidden md:flex flex-col justify-between fixed left-0 top-0 h-screen p-10 w-96 border-r border-navy-light"
      >
        <div>
          <h1 className="text-5xl font-bold text-slate-light mb-1">Jonathan Gobiel</h1>
          <h2 className="text-xl text-slate mb-10">Web Software Engineer</h2>
          
          <nav className="mt-16">
            <ul className="space-y-6">
              <li>
                <a href="#about" className="text-slate hover:text-highlight text-lg transition-colors flex items-center">
                  <span className="w-8 h-[1px] bg-slate mr-4"></span>
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate hover:text-highlight text-lg transition-colors flex items-center">
                  <span className="w-8 h-[1px] bg-slate mr-4"></span>
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate hover:text-highlight text-lg transition-colors flex items-center">
                  <span className="w-8 h-[1px] bg-slate mr-4"></span>
                  PROJECTS
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex gap-5">
          <a 
            href="https://github.com/gobielJonathan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-highlight transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/jonathan-gobiel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-highlight transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="https://instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-highlight transition-colors"
            aria-label="Instagram Profile"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a 
            href="mailto:jonathangobiel13@gmail.com" 
            className="text-slate hover:text-highlight transition-colors"
            aria-label="Email"
          >
            <AtSign className="h-6 w-6" />
          </a>
        </div>
      </motion.aside>
      
      {/* Mobile navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-6 bg-navy-dark border-b border-navy-light">
        <h1 className="text-2xl font-bold text-slate-light">Jonathan Gobiel</h1>
      </div>
      
      {/* Main content area */}
      <main className="w-full md:ml-96 px-6 md:px-16 py-20 md:py-10">
        <div className="max-w-3xl">
          {/* About section */}
          <motion.section 
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <p className="text-lg text-slate mb-6">
              I'm a web software engineer passionate about building exceptional web 
              experiences with modern technologies. My focus is on creating interfaces 
              that blend thoughtful design with robust engineering. I enjoy crafting 
              applications that not only look great but are meticulously built for 
              performance and usability.
            </p>
            
            <p className="text-lg text-slate mb-6">
              Currently, I'm a Web Software Engineer at <a href="https://www.tokopedia.com" target="_blank" rel="noopener noreferrer" className="text-highlight">Tokopedia</a>, 
              specializing in optimizing performance and automating workflows. I focus on 
              implementing automation reporting prior to release and standardizing i18n 
              across the Tokopedia web platform ecosystem.
            </p>
            
            <p className="text-lg text-slate mb-6">
              In the past, I've had the opportunity to develop software across a variety 
              of settings — from my work at <a href="#" className="text-highlight">Bina Nusantara University</a> where 
              I enhanced existing web and mobile applications, focusing on performance optimization
              and modernizing legacy systems.
            </p>
            
            <p className="text-lg text-slate">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or mentoring aspiring developers.
            </p>
          </motion.section>
          
          {/* Experience section */}
          <motion.section 
            id="experience"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="timeline-entry group">
              <div className="flex items-center">
                <span className="text-slate text-sm whitespace-nowrap">2021 — PRESENT</span>
                <div className="h-[1px] flex-1 bg-navy-light ml-4 group-hover:bg-highlight transition-colors duration-300"></div>
              </div>
              
              <div className="mt-3">
                <h3 className="text-xl text-slate-light flex items-center">
                  Web Software Engineer 
                  <span className="text-highlight mx-2">·</span> 
                  Tokopedia 
                  <a href="https://www.tokopedia.com" target="_blank" rel="noopener noreferrer" className="ml-2 text-slate hover:text-highlight">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="text-slate flex items-baseline">
                    <span className="h-1 w-1 bg-highlight rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span>Implementing automation reporting prior to release, ensuring seamless quality control.</span>
                  </li>
                  <li className="text-slate flex items-baseline">
                    <span className="h-1 w-1 bg-highlight rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span>Introducing a bundle size checker in PRs before merges, optimizing performance.</span>
                  </li>
                  <li className="text-slate flex items-baseline">
                    <span className="h-1 w-1 bg-highlight rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span>Leading the smooth migration of the Tokopedia web platform into the TikTok ecosystem.</span>
                  </li>
                  <li className="text-slate flex items-baseline">
                    <span className="h-1 w-1 bg-highlight rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span>Achieving a 90% reduction in build time during development, enhancing the developer experience.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-entry group mt-12">
              <div className="flex items-center">
                <span className="text-slate text-sm whitespace-nowrap">2019 — 2021</span>
                <div className="h-[1px] flex-1 bg-navy-light ml-4 group-hover:bg-highlight transition-colors duration-300"></div>
              </div>
              
              <div className="mt-3">
                <h3 className="text-xl text-slate-light flex items-center">
                  Research and Development Team
                  <span className="text-highlight mx-2">·</span> 
                  Bina Nusantara University
                  <a href="#" className="ml-2 text-slate hover:text-highlight">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </h3>
                <ul className="mt-4 space-y-3">
                  <li className="text-slate flex items-baseline">
                    <span className="h-1 w-1 bg-highlight rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span>Led enhancements to existing web and mobile applications, focusing on performance optimization and modernizing legacy systems.</span>
                  </li>
                  <li className="text-slate flex items-baseline">
                    <span className="h-1 w-1 bg-highlight rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span>Redesigned the Hiring Web Application: Migrated the platform from a jQuery-based template to a modern, high-performing Next.js architecture.</span>
                  </li>
                  <li className="text-slate flex items-baseline">
                    <span className="h-1 w-1 bg-highlight rounded-full mr-3 flex-shrink-0 mt-2"></span>
                    <span>Revamped the Teaching Assistant Web Application: Transitioned the system from ASP.NET to Next.js, improving maintainability and user experience.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-entry group mt-12">
              <div className="flex items-center">
                <span className="text-slate text-sm">EDUCATION</span>
                <div className="h-[1px] flex-1 bg-navy-light ml-4"></div>
              </div>
              
              <div className="mt-3">
                <h3 className="text-xl text-slate-light">
                  Computer Science
                  <span className="text-highlight mx-2">·</span> 
                  Bina Nusantara University
                </h3>
              </div>
            </div>
          </motion.section>
          
          {/* Projects section */}
          <motion.section 
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="project-entry">
              <div className="flex items-center mb-2">
                <h3 className="text-xl text-slate-light">TalkToMe</h3>
                <div className="h-[1px] flex-1 bg-navy-light mx-4"></div>
                <div className="flex gap-3">
                  <a href="https://github.com/gobielJonathan/TalkToMe" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <p className="text-slate mb-3">A web application designed to replicate the functionality of Google Meet, but without the 1-hour meeting time limitation.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-highlight font-mono">Next.js</span>
                <span className="text-xs text-highlight font-mono">WebRTC</span>
                <span className="text-xs text-highlight font-mono">TailwindCSS</span>
              </div>
            </div>
            
            <div className="project-entry mt-10">
              <div className="flex items-center mb-2">
                <h3 className="text-xl text-slate-light">Kleveru</h3>
                <div className="h-[1px] flex-1 bg-navy-light mx-4"></div>
                <div className="flex gap-3">
                  <a href="https://github.com/gobielJonathan/Kleveru" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <p className="text-slate mb-3">A system that operates in the field of beauty, providing management solutions for beauty salons and spas.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-highlight font-mono">Next.js</span>
                <span className="text-xs text-highlight font-mono">Laravel</span>
                <span className="text-xs text-highlight font-mono">TailwindCSS</span>
              </div>
            </div>
            
            <div className="project-entry mt-10">
              <div className="flex items-center mb-2">
                <h3 className="text-xl text-slate-light">Fita</h3>
                <div className="h-[1px] flex-1 bg-navy-light mx-4"></div>
                <div className="flex gap-3">
                  <a href="https://github.com/gobielJonathan/Fita" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <p className="text-slate mb-3">A health application with comprehensive features and programs to help users start living a healthy life.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-highlight font-mono">Next.js</span>
                <span className="text-xs text-highlight font-mono">TailwindCSS</span>
                <span className="text-xs text-highlight font-mono">Firebase</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
              <div className="project-card p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <Folder className="h-10 w-10 text-highlight" />
                  <div className="flex gap-3">
                    <a href="https://github.com/gobielJonathan/Sense" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <h4 className="text-slate-light text-lg mb-2">Sense</h4>
                <p className="text-slate mb-4 text-sm">A system that manages laundry services, from customer orders to delivery tracking.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-slate-light">React.js</span>
                  <span className="text-xs text-slate-light">Node.js</span>
                  <span className="text-xs text-slate-light">MongoDB</span>
                </div>
              </div>
              
              <div className="project-card p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <Folder className="h-10 w-10 text-highlight" />
                  <div className="flex gap-3">
                    <a href="https://github.com/gobielJonathan/BrcDepo" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <h4 className="text-slate-light text-lg mb-2">Brc Depo</h4>
                <p className="text-slate mb-4 text-sm">An application for selling household equipment with inventory management and order processing.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-slate-light">Next.js</span>
                  <span className="text-xs text-slate-light">TailwindCSS</span>
                  <span className="text-xs text-slate-light">PostgreSQL</span>
                </div>
              </div>
              
              <div className="project-card p-6 hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <Folder className="h-10 w-10 text-highlight" />
                  <div className="flex gap-3">
                    <a href="https://github.com/gobielJonathan/Aerium" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight">
                      <Github className="h-4 w-4" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-highlight">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <h4 className="text-slate-light text-lg mb-2">Aerium</h4>
                <p className="text-slate mb-4 text-sm">A modern landing page for a residential property development with interactive floor plans.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-slate-light">Next.js</span>
                  <span className="text-xs text-slate-light">TailwindCSS</span>
                  <span className="text-xs text-slate-light">Framer Motion</span>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Footer */}
          <footer className="text-center text-slate text-sm pb-10">
            <p>Designed & Built by Jonathan Gobiel</p>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
