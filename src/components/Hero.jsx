import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import ResumeDownload from './ResumeDownload';

const Hero = () => {
  return (
    <section className="animate-fade-in w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
      {/* Text Content */}
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-sm font-medium tracking-wide">
            Available for new opportunities
          </div>
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
          <a href="mailto:rossopheaks@gmail.com" className="glass-button px-6 py-3 rounded-lg font-medium flex items-center gap-2 group">
            Contact Me
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/sopheak-ros-5b277797" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg glass-panel hover:bg-white/5 hover:text-brand-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-lg glass-panel hover:bg-white/5 hover:text-brand-accent transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex flex-col items-center gap-8 animate-fade-in shrink-0 mt-8 md:mt-0">
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 relative">
          <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative w-full h-full rounded-full border-4 border-slate-800 shadow-2xl overflow-hidden glass-panel group">
            <img
              src="profile.jpg"
              alt="ROS Sopheak"
              crossOrigin="anonymous"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="relative z-10 w-full flex justify-center hover:scale-105 transition-transform">
          <ResumeDownload />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex text-slate-500">
        <div className="w-8 h-12 rounded-full border-2 border-slate-600 flex justify-center pt-2">
          <div className="w-1 h-3 bg-brand-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
