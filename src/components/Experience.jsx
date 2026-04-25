import React, { useState } from 'react';
import { Briefcase, Calendar, MousePointerClick } from 'lucide-react';
import Modal from './Modal';

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      title: 'Lead E-Learning Platform Specialist',
      company: 'TechEdu Solutions',
      period: '2019 - Present',
      description: 'Spearheaded the design and deployment of Moodle and Canvas LMS platforms serving 10,000+ active users.',
      fullDetail: 'As the Lead E-Learning Platform Specialist at TechEdu Solutions, I took full ownership of modernizing the educational technology stack.\n\nKey Responsibilities & Achievements:\n• Architected and deployed highly available Moodle and Canvas LMS clusters on AWS, serving over 10,000 daily active users with 99.99% uptime.\n• Integrated AI-driven analytics dashboards using Python and specialized APIs to track student performance and predict dropout rates, allowing early intervention.\n• Automated course provisioning and user synchronization with Active Directory, reducing administrative overhead by 40%.\n• Conducted extensive training workshops for faculty on how to leverage digital tools for hybrid learning environments.',
      tags: ['Moodle', 'Canvas LMS', 'AWS', 'Python', 'Active Directory']
    },
    {
      title: 'Senior Network Infrastructure Engineer',
      company: 'Global Systems Inc.',
      period: '2015 - 2019',
      description: 'Managed and scaled enterprise network architecture using Cisco and Fortinet technologies.',
      fullDetail: 'Directed the network operations team for a rapidly growing multinational corporation, ensuring secure and high-performance connectivity across 12 regional offices.\n\nKey Responsibilities & Achievements:\n• Managed and scaled enterprise network architecture utilizing Cisco Nexus switches and Fortinet Next-Generation Firewalls.\n• Led the physical-to-cloud migration of critical on-premise servers to AWS infrastructure, completing the project 2 months ahead of schedule.\n• Implemented strict VLAN segmentation, 802.1x authentication, and site-to-site IPsec VPNs.\n• Successfully passed 3 rigorous compliance and cybersecurity audits with zero critical findings.',
      tags: ['Cisco Nexus', 'Fortinet', 'AWS Migration', 'IPsec VPN', 'Cybersecurity Compliance']
    },
    {
      title: 'IT Support & Systems Administrator',
      company: 'EduTech Non-Profit',
      period: '2012 - 2015',
      description: 'Administered Linux and Windows server environments. Provided Tier 3 technical support and implemented campus-wide Wi-Fi.',
      fullDetail: 'Started as the sole IT administrator for a non-profit organization dedicated to bringing technology to underserved communities.\n\nKey Responsibilities & Achievements:\n• Administered a hybrid environment of Linux (Ubuntu/CentOS) and Windows Server 2012 machines.\n• Planned and implemented a complete campus-wide Wi-Fi overhaul using Ubiquiti UniFi access points, supporting 1,000+ concurrent devices.\n• Provided Tier 3 technical support for hardware and software issues.\n• Designed and delivered mandatory cybersecurity awareness training for over 500 staff and volunteers.',
      tags: ['Windows Server', 'Linux Admin', 'Ubiquiti UniFi', 'IT Support', 'Training']
    }
  ];

  return (
    <section className="w-full animate-slide-up" style={{ animationDelay: '0.4s' }}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-8 h-1 bg-brand-accent rounded-full"></span>
        Professional Experience
      </h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="w-full text-left glass-panel p-6 md:p-8 rounded-xl relative overflow-hidden group hover:border-brand-accent/50 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedExp(exp)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedExp(exp); }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent/50 group-hover:bg-brand-accent transition-colors"></div>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2 group-hover:text-brand-accent transition-colors">
                  <Briefcase className="w-5 h-5 text-brand-accent" />
                  {exp.title}
                </h3>
                <h4 className="text-lg text-indigo-300 font-medium">{exp.company}</h4>
              </div>
              <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
                <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
                <div className="bg-brand-accent/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-110 hidden sm:block">
                  <MousePointerClick className="w-4 h-4 text-brand-accent" />
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {exp.description}
            </p>
            <div className="mt-4 text-sm font-medium text-brand-accent sm:hidden">
              Tap for full details →
            </div>
          </div>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedExp}
        onClose={() => setSelectedExp(null)}
        title={selectedExp?.title}
        content={selectedExp?.fullDetail}
        tags={selectedExp?.tags}
        icon={<Briefcase className="w-6 h-6 text-brand-accent" />}
      />
    </section>
  );
};

export default Experience;
