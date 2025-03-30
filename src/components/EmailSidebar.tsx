
import React from 'react';
import { motion } from 'framer-motion';

const EmailSidebar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2 }}
      className="fixed right-6 bottom-0 hidden md:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-slate"
    >
      <a 
        href="mailto:jonathangobiel13@gmail.com" 
        className="text-slate font-mono text-xs tracking-widest hover:text-highlight transition-colors vertical-text"
        style={{ writingMode: 'vertical-rl' }}
      >
        jonathangobiel13@gmail.com
      </a>
    </motion.div>
  );
};

export default EmailSidebar;
