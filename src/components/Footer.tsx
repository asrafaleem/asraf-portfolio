import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <a href="https://github.com/asrafaleem" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400">
              <Github size={24} stroke="currentColor" />
            </a>
            <a href="https://www.linkedin.com/in/asrafaleem/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400">
              <Linkedin size={24} stroke="currentColor" />
            </a>
            <a href="https://www.instagram.com/_.asraf.__/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400">
              <Instagram size={24} stroke="currentColor" />
            </a>
            <a href="mailto:asrafaleem8@gmail.com" className="text-white hover:text-indigo-400">
              <Mail size={24} stroke="currentColor" />
            </a>
          </div>
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Asraf A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
