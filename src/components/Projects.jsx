import React, { useState } from 'react';
import { ExternalLink, BookOpen, Shield, GraduationCap, MousePointerClick, Lock } from 'lucide-react';
import Modal from './Modal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: 'AI-Driven E-Learning Hub',
      description: 'A platform for automated curriculum delivery utilizing modern web technologies and artificial intelligence.',
      fullDetail: 'This comprehensive E-Learning Hub was developed to solve the problem of manual curriculum creation and grading bottlenecks.\n\nBy integrating the OpenAI API, the platform dynamically generates quizzes, reading materials, and personalized feedback based on student performance. The frontend is a highly responsive React single-page application styled with Tailwind CSS, ensuring accessibility across all devices.\n\nKey Achievements:\n• Reduced course creation time by 60%\n• Improved student engagement by 35%\n• Scaled to support 5,000 concurrent users',
      stack: ['React', 'Tailwind', 'OpenAI', 'Node.js'],
      icon: <BookOpen className="w-8 h-8 text-brand-accent" />,
      iconSmall: <BookOpen className="w-6 h-6 text-brand-accent" />,
      color: 'from-brand-accent/20 to-transparent'
    },
    {
      title: 'SME Network Infrastructure',
      description: 'Secure network configuration and robust architecture tailored for small and medium-sized businesses.',
      fullDetail: 'A complete end-to-end network redesign for a consortium of medium-sized enterprises experiencing severe network latency and security breaches.\n\nThe project involved migrating legacy switches to a unified Cisco infrastructure, implementing strict VLAN segmentation, and deploying Fortinet Next-Generation Firewalls at the edge.\n\nKey Achievements:\n• Eliminated malware incidents within 12 months\n• Boosted internal network throughput by 300%\n• Established a secure remote-work VPN for 200+ employees',
      stack: ['Cisco CCNA', 'Fortinet', 'Security', 'VLANs'],
      icon: <Shield className="w-8 h-8 text-indigo-400" />,
      iconSmall: <Shield className="w-6 h-6 text-indigo-400" />,
      color: 'from-indigo-500/20 to-transparent'
    },
    {
      title: 'Digital Literacy Training Portal',
      description: 'An advanced Learning Management System dedicated to NGO capacity building and digital skills enhancement.',
      fullDetail: 'Partnered with international NGOs to deploy an accessible, low-bandwidth Learning Management System based on Moodle.\n\nThe portal is hosted on a scalable AWS architecture (EC2, RDS) to handle traffic spikes during nationwide training campaigns. It integrates tightly with Google Workspace for seamless single sign-on (SSO) and document collaboration.\n\nKey Achievements:\n• Certified over 15,000 participants in digital literacy\n• Maintained 99.9% uptime during peak campaign months\n• Reduced infrastructure hosting costs by 25% via AWS optimization',
      stack: ['Moodle', 'AWS EC2', 'AWS RDS', 'SSO'],
      icon: <GraduationCap className="w-8 h-8 text-emerald-400" />,
      iconSmall: <GraduationCap className="w-6 h-6 text-emerald-400" />,
      color: 'from-emerald-500/20 to-transparent'
    },
    {
      title: 'Automated Security Auditing',
      description: 'A comprehensive vulnerability scanning and reporting dashboard for continuous compliance monitoring.',
      fullDetail: 'Built an internal security auditing platform to aggregate vulnerability reports from various tools (Nessus, OpenVAS, SonarQube) into a single, unified dashboard.\n\nThe platform automatically triggers scans during the CI/CD pipeline, alerting developers via Slack to any critical vulnerabilities before deployment to production environments.\n\nKey Achievements:\n• Decreased time-to-remediate critical vulnerabilities by 85%\n• Automated weekly compliance reporting for executive leadership\n• Passed ISO 27001 audit with zero major non-conformities',
      stack: ['Python', 'Docker', 'OWASP', 'Slack API'],
      icon: <Lock className="w-8 h-8 text-rose-400" />,
      iconSmall: <Lock className="w-6 h-6 text-rose-400" />,
      color: 'from-rose-500/20 to-transparent'
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
            className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-brand-accent/50 transition-colors cursor-pointer"
            onClick={() => setSelectedProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedProject(project); }}
          >
            {/* Background gradient hint */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${project.color} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-6">
                  {project.iconSmall}
                </div>
                <div className="bg-brand-accent/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-110">
                  <MousePointerClick className="w-4 h-4 text-brand-accent" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-300 mb-6 line-clamp-3 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 pointer-events-none">
                {project.stack.slice(0,3).map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
              
              <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition-colors">
                Read Details <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        content={selectedProject?.fullDetail}
        tags={selectedProject?.stack}
        icon={selectedProject?.icon}
      />
    </section>
  );
};

export default Projects;
