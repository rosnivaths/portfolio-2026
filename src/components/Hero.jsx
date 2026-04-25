import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="animate-fade-in w-full">
      <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-sm font-medium tracking-wide">
        Available for new opportunities
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
        ROS Sopheak
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-indigo-400 mt-2">
          ICT & E-Learning Platform Specialist
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        A skilled professional with over <span className="text-white font-semibold">11 years of experience</span> in designing digital training programs and managing complex IT infrastructure. Dedicated to bridging the gap between technology and education.
      </p>
      
      <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <a href="mailto:contact@example.com" className="glass-button px-6 py-3 rounded-lg font-medium flex items-center gap-2 group">
          Contact Me
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        
        <div className="flex gap-4">
          <a href="#" className="p-3 rounded-lg glass-panel hover:bg-white/5 hover:text-brand-accent transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-lg glass-panel hover:bg-white/5 hover:text-brand-accent transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
