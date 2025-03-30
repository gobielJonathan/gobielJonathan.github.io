
import React from 'react';
import { motion } from 'framer-motion';
import { GitHub, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-20">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-highlight font-mono mr-2">04.</span> Get In Touch
      </motion.h2>

      <div className="max-w-2xl mx-auto text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-semibold text-slate-light mb-4"
        >
          Let's Connect
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate mb-8"
        >
          I'm currently looking for new opportunities and my inbox is always open.
          Whether you have a question, job opportunity, or just want to say hello,
          I'll do my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <a href="mailto:jonathangobiel13@gmail.com">
            <Button className="bg-transparent hover:bg-highlight/10 text-highlight border border-highlight px-7 py-5 rounded">
              Say Hello
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
        >
          <a 
            href="mailto:jonathangobiel13@gmail.com" 
            className="flex items-center gap-2 text-slate hover:text-highlight transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>jonathangobiel13@gmail.com</span>
          </a>
          
          <a 
            href="tel:+6282261976970" 
            className="flex items-center gap-2 text-slate hover:text-highlight transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>+62 82261976970</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex justify-center gap-8"
        >
          <a 
            href="https://github.com/gobielJonathan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate hover:text-highlight transition-colors"
            aria-label="GitHub Profile"
          >
            <GitHub className="h-6 w-6" />
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
