
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 px-6 text-center text-xs text-slate border-t border-navy-light font-sans">
      <p className="mb-2">Designed & Built by Jonathan Gobiel</p>
      <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
