import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      <div className="container mx-auto px-4 py-20 text-center relative">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-slide-in">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Asraf A</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Crafting Digital Experiences with Code
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#projects"
            className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold text-lg"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 font-semibold text-lg"
          >
            Contact Me
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;