import React from 'react';
import { Network, Cloud, ShieldCheck, GraduationCap, Award } from 'lucide-react';

const Certifications = () => {
  const sectors = [
    {
      title: 'Networking & Infrastructure',
      description: 'Expertise in routing, switching, and enterprise network design for high-availability environments.',
      iconSmall: <Network className="w-6 h-6 text-brand-accent" />,
      color: 'from-brand-accent/20 to-transparent',
      certificates: [
        { name: 'CCNA 7.0', link: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html' },
        { name: 'CCNP Enterprise', link: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-enterprise.html' },
        { name: 'Network+', link: 'https://www.comptia.org/certifications/network' },
        { name: 'NSE 4', link: 'https://training.fortinet.com/local/custom/program/certification.php?id=4' }
      ]
    },
    {
      title: 'Cloud Computing',
      description: 'Scalable cloud deployments, serverless architecture, and distributed systems management.',
      iconSmall: <Cloud className="w-6 h-6 text-indigo-400" />,
      color: 'from-indigo-500/20 to-transparent',
      certificates: [
        { name: 'AWS Solutions Architect', link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
        { name: 'AWS SysOps Admin', link: 'https://aws.amazon.com/certification/certified-sysops-admin-associate/' },
        { name: 'Google Cloud Architect', link: 'https://cloud.google.com/learn/certification/cloud-architect' },
        { name: 'Azure Admin', link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/' }
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'Security auditing, threat mitigation, vulnerability assessments, and strict compliance enforcement.',
      iconSmall: <ShieldCheck className="w-6 h-6 text-rose-400" />,
      color: 'from-rose-500/20 to-transparent',
      certificates: [
        { name: 'Security+', link: 'https://www.comptia.org/certifications/security' },
        { name: 'CISSP', link: 'https://www.isc2.org/Certifications/CISSP' },
        { name: 'CEH', link: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/' },
        { name: 'CISM', link: 'https://www.isaca.org/credentialing/cism' }
      ]
    },
    {
      title: 'E-Learning Platforms',
      description: 'Administration of LMS platforms, educational technology, and digital capacity building.',
      iconSmall: <GraduationCap className="w-6 h-6 text-emerald-400" />,
      color: 'from-emerald-500/20 to-transparent',
      certificates: [
        { name: 'Moodle MEC', link: 'https://moodle.com/mec/' },
        { name: 'Workspace Admin', link: 'https://cloud.google.com/learn/certification/workspace-administrator' },
        { name: 'Canvas Educator', link: 'https://www.instructure.com/canvas/canvas-certified-educator' },
        { name: 'Blackboard Trainer', link: 'https://www.anthology.com/products/teaching-and-learning/learning-effectiveness/anthology-academy' }
      ]
    }
  ];

  return (
    <section className="w-full animate-slide-up" style={{ animationDelay: '0.5s' }}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-8 h-1 bg-brand-accent rounded-full"></span>
        Certifications & Badges
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {sectors.map((sector, index) => (
          <div 
            key={index} 
            className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-brand-accent/50 transition-colors"
          >
            {/* Background gradient hint */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${sector.color} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-6 shadow-inner">
                {sector.iconSmall}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {sector.title}
              </h3>
              
              <p className="text-slate-300 mb-6 line-clamp-3 flex-grow">
                {sector.description}
              </p>
              
              {/* Clickable Certificate Tabs */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/30">
                {sector.certificates.map((cert, i) => (
                  <a 
                    key={i} 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-slate-800 hover:bg-brand-accent/20 text-slate-300 hover:text-brand-accent border border-slate-700 hover:border-brand-accent/40 transition-colors shadow-sm"
                  >
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    {cert.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
