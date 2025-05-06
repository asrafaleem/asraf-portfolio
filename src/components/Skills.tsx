import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['HTML5', 'CSS3','Bootstrap5', 'JavaScript', 'React'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      category: 'Tools',
      items: ['Git', 'VS Code'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Programing Languages',
      items: ['Java','C'],
      color: 'from-teal-500 to-emerald-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="skill-card bg-gray-800 p-6 rounded-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 w-20 mb-6 rounded bg-gradient-to-r ${skillGroup.color}`}></div>
              <h3 className="text-xl font-semibold mb-4 text-white">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color}`}></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;