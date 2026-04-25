import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeDownload from './components/ResumeDownload';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      {/* Background ambient effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-accent/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[150px]"></div>
      </div>

      {/* Main Content */}
      <main id="portfolio-content" className="flex-grow z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col gap-20 sm:gap-32">
        <div className="w-full flex justify-end">
          <ResumeDownload />
        </div>
        
        <Hero />
        <Skills />
        <Projects />
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
