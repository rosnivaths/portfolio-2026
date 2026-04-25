import React from 'react';
import { Server, Network, Terminal, BrainCircuit, Cloud, ShieldAlert } from 'lucide-react';

const Skills = () => {
  const skillsList = [
    { name: 'System & Network Admin', icon: <Server className="w-6 h-6 text-brand-accent" /> },
    { name: 'Cisco Technologies', icon: <Network className="w-6 h-6 text-indigo-400" /> },
    { name: 'Linux Systems', icon: <Terminal className="w-6 h-6 text-emerald-400" /> },
    { name: 'Generative AI', icon: <BrainCircuit className="w-6 h-6 text-purple-400" /> },
    { name: 'Cloud Platforms', icon: <Cloud className="w-6 h-6 text-sky-400" /> },
    { name: 'Cybersecurity Awareness', icon: <ShieldAlert className="w-6 h-6 text-rose-400" /> },
  ];

  return (
    <section className="w-full animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-8 h-1 bg-brand-accent rounded-full"></span>
        Core Expertise
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {skillsList.map((skill, index) => (
          <div 
            key={index}
            className="glass-panel p-6 rounded-xl flex items-center gap-4 hover:scale-[1.02] hover:bg-white/5 transition-all duration-300 group"
          >
            <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
              {skill.icon}
            </div>
            <h3 className="font-semibold text-slate-200 group-hover:text-white transition-colors">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
