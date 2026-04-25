import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex gap-4">
      <a href="mailto:placeholder@email.com" aria-label="Email" className="text-slate-400 hover:text-brand-accent transition-colors">
        <Mail className="w-5 h-5" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-brand-accent transition-colors">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-brand-accent transition-colors">
        <Github className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Contact;
