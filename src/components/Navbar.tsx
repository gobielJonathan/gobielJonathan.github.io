
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-navy-dark/90 backdrop-blur-md py-4 shadow-md' : 'py-6'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a href="#" className="text-highlight font-mono font-bold text-2xl">JG</a>
        </motion.div>
        
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 font-mono">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1) }}
              >
                <a href={item.href} className="nav-link">
                  <span className="text-highlight mr-1">{`0${i + 1}.`}</span>
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10 font-sans">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>
          </motion.div>
        </nav>
        
        <div className="md:hidden flex items-center">
          {/* Mobile menu button would go here */}
          <Button variant="ghost" size="icon" className="text-slate hover:text-highlight font-sans">
            <span className="sr-only">Open menu</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
