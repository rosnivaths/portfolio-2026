import React, { useState } from 'react';
import { Server, Network, Terminal, BrainCircuit, Cloud, ShieldAlert } from 'lucide-react';
import Modal from './Modal';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillsList = [
    { 
      name: 'System & Network Admin', 
      icon: <Server className="w-8 h-8 text-brand-accent" />,
      iconSmall: <Server className="w-6 h-6 text-brand-accent" />,
      detail: "Extensive experience in managing enterprise-level server environments.\n\n• Windows Server & Active Directory administration\n• VMware & Hyper-V virtualization\n• SAN/NAS storage provisioning\n• Backup & Disaster Recovery planning",
      tags: ['Windows Server', 'VMware', 'Active Directory', 'Veeam']
    },
    { 
      name: 'Cisco Technologies', 
      icon: <Network className="w-8 h-8 text-indigo-400" />,
      iconSmall: <Network className="w-6 h-6 text-indigo-400" />,
      detail: "Expertise in designing, implementing, and troubleshooting complex Cisco networks.\n\n• Routing protocols (OSPF, EIGRP, BGP)\n• Switching (VLANs, STP, VTP)\n• ASA Firewalls & VPN configurations\n• Network performance optimization",
      tags: ['Cisco iOS', 'OSPF', 'BGP', 'Firepower']
    },
    { 
      name: 'Linux Systems', 
      icon: <Terminal className="w-8 h-8 text-emerald-400" />,
      iconSmall: <Terminal className="w-6 h-6 text-emerald-400" />,
      detail: "Proficient in deploying and maintaining secure Linux distributions.\n\n• Ubuntu, CentOS, & RHEL administration\n• Bash scripting for automation\n• Web server setup (Apache, Nginx)\n• System hardening & patch management",
      tags: ['Ubuntu', 'Bash', 'Nginx', 'Docker']
    },
    { 
      name: 'Generative AI', 
      icon: <BrainCircuit className="w-8 h-8 text-purple-400" />,
      iconSmall: <BrainCircuit className="w-6 h-6 text-purple-400" />,
      detail: "Integrating cutting-edge AI solutions into educational workflows.\n\n• Prompt engineering for instructional design\n• LLM API integration (OpenAI, Claude)\n• Automated content generation pipelines\n• AI-driven student analytics",
      tags: ['OpenAI API', 'Prompt Engineering', 'LangChain']
    },
    { 
      name: 'Cloud Platforms', 
      icon: <Cloud className="w-8 h-8 text-sky-400" />,
      iconSmall: <Cloud className="w-6 h-6 text-sky-400" />,
      detail: "Architecting highly available cloud infrastructures for scalable applications.\n\n• AWS (EC2, S3, RDS, VPC)\n• Google Workspace administration\n• Cloud migration strategies\n• Identity and Access Management (IAM)",
      tags: ['AWS EC2', 'AWS S3', 'Google Workspace', 'Cloud IAM']
    },
    { 
      name: 'Cybersecurity Awareness', 
      icon: <ShieldAlert className="w-8 h-8 text-rose-400" />,
      iconSmall: <ShieldAlert className="w-6 h-6 text-rose-400" />,
      detail: "Fostering a culture of security and ensuring organizational compliance.\n\n• Phishing simulation and training\n• Vulnerability assessments\n• Endpoint security management\n• Incident response planning",
      tags: ['CompTIA Security+', 'Endpoint Protection', 'Auditing']
    },
  ];

  return (
    <section className="w-full animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-8 h-1 bg-brand-accent rounded-full"></span>
        Core Expertise
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {skillsList.map((skill, index) => (
          <button 
            key={index}
            onClick={() => setSelectedSkill(skill)}
            className="w-full text-left glass-panel p-6 rounded-xl flex items-center gap-4 hover:scale-[1.02] hover:bg-white/5 hover:border-brand-accent/50 transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
          >
            <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors shrink-0">
              {skill.iconSmall}
            </div>
            <h3 className="font-semibold text-slate-200 group-hover:text-brand-accent transition-colors">
              {skill.name}
            </h3>
          </button>
        ))}
      </div>

      <Modal 
        isOpen={!!selectedSkill}
        onClose={() => setSelectedSkill(null)}
        title={selectedSkill?.name}
        content={selectedSkill?.detail}
        tags={selectedSkill?.tags}
        icon={selectedSkill?.icon}
      />
    </section>
  );
};

export default Skills;
