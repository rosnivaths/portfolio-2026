import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import PulseRunner from './components/PulseRunner';
import Contact from './components/Contact';
import ResumeDownload from './components/ResumeDownload';
import ResumeTemplate from './components/ResumeTemplate';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <ResumeTemplate />
      <BackgroundEffects />

      {/* Top Left Remark */}
      <div className="absolute top-0 left-0 w-full z-50 bg-rose-500/10 border-b border-rose-500/20 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-2 text-rose-200 text-sm font-medium flex items-center justify-center sm:justify-start gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          This is an example page of a portfolio. All information is not valid.
        </div>
      </div>

      {/* Main Content */}
      <main id="portfolio-content" className="flex-grow z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col gap-20 sm:gap-32 mt-8">
        <Hero />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        
        <section className="w-full animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-brand-accent rounded-full"></span>
            Digital Break Zone
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl">
            Take a quick break. Jump over the glitches and see how high you can score!
          </p>
          <PulseRunner />
        </section>
      </main>

      {/* Footer */}
      <footer className="z-10 mt-auto border-t border-brand-border bg-brand-dark/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} ROS Sopheak. All rights reserved.
          </p>
          <Contact />
        </div>
      </footer>
    </div>
  );
}

export default App;
