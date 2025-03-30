
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 lg:px-20">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <span className="font-mono text-highlight">Hi, my name is</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-light mb-4 font-sans"
        >
          Jonathan Gobiel.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 font-sans"
        >
          I build accessible, pixel-perfect digital experiences for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-slate max-w-2xl mb-10 font-sans"
        >
          I'm a Front End Engineer specializing in modern front-end technologies.
          Currently focused on building exceptional web experiences at{' '}
          <a href="https://www.tokopedia.com" target="_blank" rel="noopener noreferrer" className="link-with-highlight">
            Tokopedia
          </a>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#projects">
            <Button className="group bg-transparent hover:bg-highlight/10 text-highlight border border-highlight px-7 py-5 rounded font-sans">
              Check out my work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
