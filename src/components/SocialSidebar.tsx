
import React from 'react';
import { motion } from 'framer-motion';
import { GitHub, Linkedin, Mail } from 'lucide-react';

const SocialSidebar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2 }}
      className="fixed left-6 bottom-0 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-slate"
    >
      <a 
        href="https://github.com/gobielJonathan" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-slate hover:text-highlight transition-colors hover:-translate-y-1"
        aria-label="GitHub Profile"
      >
        <GitHub className="h-5 w-5" />
      </a>
      
      <a 
        href="https://linkedin.com/in/jonathan-gobiel" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-slate hover:text-highlight transition-colors hover:-translate-y-1"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="h-5 w-5" />
      </a>
      
      <a 
        href="mailto:jonathangobiel13@gmail.com" 
        className="text-slate hover:text-highlight transition-colors hover:-translate-y-1"
        aria-label="Email"
      >
        <Mail className="h-5 w-5" />
      </a>
    </motion.div>
  );
};

export default SocialSidebar;
