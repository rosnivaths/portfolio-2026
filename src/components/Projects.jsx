import React from 'react';
import { ExternalLink, BookOpen, Shield, GraduationCap } from 'lucide-react';

const Projects = () => {
  const projectList = [
    {
      title: 'AI-Driven E-Learning Hub',
      description: 'A platform for automated curriculum delivery utilizing modern web technologies and artificial intelligence.',
      stack: ['React', 'Tailwind', 'OpenAI'],
      icon: <BookOpen className="w-6 h-6 text-brand-accent" />,
      color: 'from-brand-accent/20 to-transparent'
    },
    {
      title: 'SME Network Infrastructure',
      description: 'Secure network configuration and robust architecture tailored for small and medium-sized businesses.',
      stack: ['Cisco CCNA', 'Fortinet', 'Security'],
      icon: <Shield className="w-6 h-6 text-indigo-400" />,
      color: 'from-indigo-500/20 to-transparent'
    },
    {
      title: 'Digital Literacy Training Portal',
      description: 'An advanced Learning Management System dedicated to NGO capacity building and digital skills enhancement.',
      stack: ['Moodle', 'AWS', 'Google Workspace'],
      icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
      color: 'from-emerald-500/20 to-transparent'
    }
  ];

  return (
    <section className="w-full animate-slide-up" style={{ animationDelay: '0.4s' }}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-8 h-1 bg-brand-accent rounded-full"></span>
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projectList.map((project, index) => (
          <div 
            key={index} 
            className={`glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-slate-500/50 transition-colors ${index === 2 ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''}`}
          >
            {/* Background gradient hint */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${project.color} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-6">
                {project.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-300 mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent hover:text-white transition-colors">
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
