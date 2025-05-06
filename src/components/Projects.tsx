import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A Mern-stack e-commerce platform with real-time inventory, secure payments, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-pink-500 to-rose-500'
    },
   /*  {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard that aggregates social media metrics with beautiful visualizations.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      tech: ['React', 'Chart.js', 'Firebase', 'TailwindCSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-purple-500 to-indigo-500'
    }, */
    {
      title: 'AI Task Manager',
      description: 'Smart task management app that uses AI to prioritize and categorize tasks.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tech: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card rounded-xl overflow-hidden bg-white"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative group">
              <div className="absolute top-4 right-0 bg-yellow-400 text-xs font-semibold text-gray-900 px-3 py-1 rounded-l-full shadow-md">
  Soon Live Demo
</div>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white`}
                    >
                      {tech}
                    </span>
                    
                  ))}
                </div>
                {/* <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;