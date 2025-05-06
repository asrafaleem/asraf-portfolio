import React from 'react';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="md:w-1/2 flex justify-center">
            <img 
              src={profileImg}
              alt="Asraf Profile"
             className="w-72 h-72 rounded-full object-cover shadow-xl border-4 border-blue-300 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Description */}
          <div className="md:w-1/2 text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              👋 Hi, I'm <span className="font-semibold text-blue-700">Asraf A</span>, an enthusiastic Information Technology student passionate about crafting user-friendly front-end experiences. I’m currently studying at <strong>Muthayammal Engineering College</strong>.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              🚀 I thrive on transforming complex ideas into sleek, functional designs. Outside of coding, I'm constantly exploring the latest in tech, building projects, and expanding my skills.
            </p>
            <div className="space-y-4 text-base">
              <div className="flex items-center gap-2">
                <span className="font-semibold w-28">🎓 Education:</span>
                <span>B.Tech in Information Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold w-28">📍 Location:</span>
                <span>Salem, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold w-28">📧 Email:</span>
                <span>asrafaleem8@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
