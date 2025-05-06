import React from 'react';
import { Menu, X, Github, Linkedin, Mail, Instagram } from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
        {/* <a href="#home" className="text-2xl font-bold text-gray-800">Explore My Creations</a>
           */}
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLinks />
            <SocialLinks />
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <NavLinks />
              <div className="flex justify-center gap-4 pt-4 border-t">
                <SocialLinks />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLinks = () => (
  <div className="flex md:flex-row flex-col gap-4 md:gap-8 text-base font-medium">
    {['about', 'skills', 'projects', 'contact'].map((section) => (
      <a
        key={section}
        href={`#${section}`}
        className="relative text-gray-600 hover:text-indigo-600 transition-colors duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 hover:before:w-full before:bg-indigo-600 before:transition-all before:duration-300"
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </a>
    ))}
  </div>
);

const SocialLinks = () => (
  <div className="flex gap-4">
    <a href="https://github.com/asrafaleem" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
      <Github size={20} />
    </a>
    <a href="https://www.linkedin.com/in/asrafaleem/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
      <Linkedin size={20} />
    </a>
    <a href="https://www.instagram.com/_.asraf.__/?next=%2Fyour_instagram_username%2F" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
      <Instagram size={20} />
    </a>
    <a
  href="mailto:asrafaleem8@gmail.com"
  className="text-gray-600 hover:text-gray-900"
>
  <Mail size={20} />
</a>

  </div>
);

export default Header;
