import React from 'react';

// This component is specifically designed to be rendered into a PDF
const ResumeTemplate = React.forwardRef((props, ref) => {
  return (
    <div className="fixed top-[10000px] left-[10000px] opacity-0 pointer-events-none z-[-50]">
      <div
        ref={ref}
        id="printable-resume"
        style={{
          width: '210mm',
          backgroundColor: '#ffffff',
          color: '#1e293b',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.45',
          boxSizing: 'border-box'
        }}
      >
        {/* ================= PAGE 1 ================= */}
        <div style={{ padding: '12mm 15mm 0 15mm', boxSizing: 'border-box', height: '296mm', overflow: 'hidden' }}>

          {/* Header Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: '#f8fafc', padding: '15px 20px', borderRadius: '12px', marginBottom: '18px', borderBottom: '4px solid #0ea5e9' }}>
            <img
              src="https://rosnivaths.github.io/portfolio-2026/profile.jpg"
              crossOrigin="anonymous"
              alt="ROS Sopheak"
              style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #ffffff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: '34px', margin: '0 0 4px 0', color: '#0f172a', fontWeight: 'bold', letterSpacing: '-0.5px' }}>ROS SOPHEAK</h1>
              <h2 style={{ fontSize: '16px', margin: '0 0 10px 0', color: '#0ea5e9', fontWeight: 'bold' }}>
                ICT & E-Learning Platform Specialist
              </h2>
              <div style={{ fontSize: '11.5px', color: '#475569', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Phnom Penh, Cambodia
                </span>
                <a href="mailto:rossopheaks@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: '#0ea5e9' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  rossopheaks@gmail.com
                </a>
                <a href="https://linkedin.com/in/sopheak-ros-5b277797" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: '#0ea5e9' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  linkedin.com/in/sopheak-ros
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '25px' }}>
            {/* Left Column */}
            <div style={{ flex: '0 0 63%' }}>
              <div className="resume-section" style={{ marginBottom: '18px' }}>
                <h3 style={{ fontSize: '15px', color: '#0f172a', textTransform: 'uppercase', borderBottom: '2px solid #e2e8f0', paddingBottom: '4px', marginBottom: '8px' }}>Professional Profile</h3>
                <p style={{ margin: 0, fontSize: '11.5px', color: '#334155', textAlign: 'justify', lineHeight: '1.5' }}>
                  A highly skilled professional with over 11 years of experience designing digital training programs and managing complex IT infrastructure. Dedicated to bridging the gap between technology and education through innovative e-learning solutions, robust network architecture, and cloud integrations. Proven track record in automating systems, enhancing security postures, and deploying high-availability platforms for thousands of concurrent users.
                </p>
              </div>

              <div className="resume-section">
                <h3 style={{ fontSize: '15px', color: '#0f172a', textTransform: 'uppercase', borderBottom: '2px solid #e2e8f0', paddingBottom: '4px', marginBottom: '12px' }}>Professional Experience</h3>

                <div style={{ marginBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                    <strong style={{ fontSize: '13px', color: '#0f172a' }}>Lead E-Learning Platform Specialist</strong>
                    <span style={{ fontSize: '11px', color: '#0ea5e9', fontWeight: 'bold' }}>2019 - Present</span>
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 'bold', marginBottom: '6px' }}>TechEdu Solutions</div>
                  <ul style={{ margin: 0, paddingLeft: '22px', fontSize: '11px', color: '#334155', lineHeight: '1.45', listStyleType: 'disc' }}>
                    <li style={{ marginBottom: '3px', paddingLeft: '4px' }}>Spearheaded design and deployment of Moodle and Canvas LMS platforms serving 10,000+ active users.</li>
                    <li style={{ marginBottom: '3px', paddingLeft: '4px' }}>Integrated OpenAI API analytics to track student performance and dynamically generate materials.</li>
                    <li style={{ marginBottom: '3px', paddingLeft: '4px' }}>Automated course provisioning and grading workflows, reducing administrative overhead by 60%.</li>
                    <li style={{ paddingLeft: '4px' }}>Managed AWS cloud architecture (EC2, RDS) ensuring 99.9% uptime during peak exam periods.</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                    <strong style={{ fontSize: '13px', color: '#0f172a' }}>Senior Network Infrastructure Engineer</strong>
                    <span style={{ fontSize: '11px', color: '#0ea5e9', fontWeight: 'bold' }}>2015 - 2019</span>
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 'bold', marginBottom: '6px' }}>Global Systems Inc.</div>
                  <ul style={{ margin: 0, paddingLeft: '22px', fontSize: '11px', color: '#334155', lineHeight: '1.45', listStyleType: 'disc' }}>
                    <li style={{ marginBottom: '3px', paddingLeft: '4px' }}>Managed and scaled enterprise network architecture using Cisco switches and Fortinet Firewalls.</li>
                    <li style={{ marginBottom: '3px', paddingLeft: '4px' }}>Led the migration of legacy on-premise servers to highly available AWS cloud infrastructure.</li>
                    <li style={{ marginBottom: '3px', paddingLeft: '4px' }}>Implemented strict VLAN segmentation and secure remote-work VPNs for 200+ employees.</li>
                    <li style={{ paddingLeft: '4px' }}>Achieved zero malware incidents within 12 months following a complete security redesign.</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2px' }}>
                    <strong style={{ fontSize: '13px', color: '#0f172a' }}>IT Support & Systems Administrator</strong>
                    <span style={{ fontSize: '11px', color: '#0ea5e9', fontWeight: 'bold' }}>2012 - 2015</span>
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 'bold', marginBottom: '6px' }}>EduTech Non-Profit</div>
                  <ul style={{ margin: 0, paddingLeft: '22px', fontSize: '11px', color: '#334155', lineHeight: '1.45', listStyleType: 'disc' }}>
                    <li style={{ marginBottom: '3px', paddingLeft: '4px' }}>Administered a hybrid environment of Linux (Ubuntu/CentOS) and Windows Server machines.</li>
                    <li style={{ marginBottom: '3px', paddingLeft: '4px' }}>Implemented a complete campus-wide Wi-Fi overhaul using Ubiquiti UniFi access points.</li>
                    <li style={{ paddingLeft: '4px' }}>Designed and delivered mandatory cybersecurity awareness training for over 500 staff.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ flex: '0 0 37%' }}>
              <div className="resume-section" style={{ marginBottom: '18px' }}>
                <h3 style={{ fontSize: '15px', color: '#0f172a', textTransform: 'uppercase', borderBottom: '2px solid #e2e8f0', paddingBottom: '4px', marginBottom: '10px' }}>Core Expertise</h3>

                <div style={{ marginBottom: '10px' }}>
                  <strong style={{ display: 'block', fontSize: '11.5px', color: '#0f172a', marginBottom: '5px' }}>Infrastructure & Cloud</strong>
                  <div style={{ display: 'block' }}>
                    {['AWS', 'Google Cloud', 'Linux / Ubuntu', 'Docker'].map(s => (
                      <span key={s} style={{ display: 'inline-block', fontSize: '9.5px', padding: '3px 5px', margin: '0 3px 3px 0', backgroundColor: '#f1f5f9', color: '#475569', borderRadius: '3px', border: '1px solid #e2e8f0', lineHeight: '1.3' }}>{s}</span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <strong style={{ display: 'block', fontSize: '11.5px', color: '#0f172a', marginBottom: '5px' }}>Networking & Security</strong>
                  <div style={{ display: 'block' }}>
                    {['Cisco CCNA', 'Fortinet', 'VLANs', 'Firewalls', 'VPNs'].map(s => (
                      <span key={s} style={{ display: 'inline-block', fontSize: '9.5px', padding: '3px 5px', margin: '0 3px 3px 0', backgroundColor: '#f1f5f9', color: '#475569', borderRadius: '3px', border: '1px solid #e2e8f0', lineHeight: '1.3' }}>{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <strong style={{ display: 'block', fontSize: '11.5px', color: '#0f172a', marginBottom: '5px' }}>E-Learning & Dev</strong>
                  <div style={{ display: 'block' }}>
                    {['Moodle / Canvas', 'React', 'Node.js', 'Python', 'OpenAI'].map(s => (
                      <span key={s} style={{ display: 'inline-block', fontSize: '9.5px', padding: '3px 5px', margin: '0 3px 3px 0', backgroundColor: '#f1f5f9', color: '#475569', borderRadius: '3px', border: '1px solid #e2e8f0', lineHeight: '1.3' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE BREAK HERE */}
        <div className="html2pdf__page-break" style={{ pageBreakBefore: 'always', height: '0', margin: 0, padding: 0 }}></div>

        {/* ================= PAGE 2 ================= */}
        <div style={{ padding: '15mm 15mm 0 15mm', boxSizing: 'border-box' }}>

          <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '6px', marginBottom: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <h2 style={{ fontSize: '13px', margin: 0, color: '#64748b' }}>ROS SOPHEAK - Professional Resume</h2>
            <span style={{ fontSize: '10px', color: '#94a3b8' }}>Page 2</span>
          </div>

          <div style={{ display: 'flex', gap: '25px' }}>
            {/* Left Column */}
            <div style={{ flex: '0 0 50%' }}>
              <div className="resume-section">
                <h3 style={{ fontSize: '15px', color: '#0f172a', textTransform: 'uppercase', borderBottom: '2px solid #e2e8f0', paddingBottom: '4px', marginBottom: '12px' }}>Featured Projects</h3>

                <div style={{ marginBottom: '14px' }}>
                  <strong style={{ fontSize: '12.5px', color: '#0f172a', display: 'block', marginBottom: '2px' }}>AI-Driven E-Learning Hub</strong>
                  <span style={{ fontSize: '10px', color: '#0ea5e9', display: 'block', marginBottom: '4px' }}>React, Tailwind, OpenAI, Node.js</span>
                  <p style={{ margin: 0, fontSize: '11px', color: '#334155', textAlign: 'justify', lineHeight: '1.45' }}>
                    A comprehensive platform for automated curriculum delivery utilizing AI. Dynamically generates quizzes, reading materials, and personalized feedback based on student performance.
                  </p>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <strong style={{ fontSize: '12.5px', color: '#0f172a', display: 'block', marginBottom: '2px' }}>Digital Literacy Training Portal</strong>
                  <span style={{ fontSize: '10px', color: '#0ea5e9', display: 'block', marginBottom: '4px' }}>Moodle, AWS EC2, AWS RDS, Google SSO</span>
                  <p style={{ margin: 0, fontSize: '11px', color: '#334155', textAlign: 'justify', lineHeight: '1.45' }}>
                    Partnered with NGOs to deploy an accessible Learning Management System. Certified 15,000+ participants in digital literacy while maintaining 99.9% uptime during peak campaigns.
                  </p>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <strong style={{ fontSize: '12.5px', color: '#0f172a', display: 'block', marginBottom: '2px' }}>Automated Security Auditing</strong>
                  <span style={{ fontSize: '10px', color: '#0ea5e9', display: 'block', marginBottom: '4px' }}>Python, Docker, OWASP, Slack API</span>
                  <p style={{ margin: 0, fontSize: '11px', color: '#334155', textAlign: 'justify', lineHeight: '1.45' }}>
                    Built an internal auditing platform to aggregate vulnerability reports into a unified dashboard, automatically triggering scans during CI/CD pipelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ flex: '0 0 50%' }}>
              <div className="resume-section">
                <h3 style={{ fontSize: '15px', color: '#0f172a', textTransform: 'uppercase', borderBottom: '2px solid #e2e8f0', paddingBottom: '4px', marginBottom: '12px' }}>Certifications</h3>

                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ fontSize: '11.5px', color: '#0ea5e9', display: 'block', marginBottom: '3px' }}>Networking & Infrastructure</strong>
                  <div style={{ fontSize: '11px', color: '#334155', lineHeight: '1.5' }}>
                    <a href="https://www.cisco.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>• Cisco CCNA 7.0</a>
                    <a href="https://www.cisco.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>• Cisco CCNP Enterprise</a>
                    <a href="https://www.comptia.org/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>• CompTIA Network+</a>
                    <a href="https://training.fortinet.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>• Fortinet NSE 4</a>
                  </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ fontSize: '11.5px', color: '#0ea5e9', display: 'block', marginBottom: '3px' }}>Cloud Computing</strong>
                  <div style={{ fontSize: '11px', color: '#334155', lineHeight: '1.5' }}>
                    <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>• AWS Solutions Architect</a>
                    <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>• AWS SysOps Administrator</a>
                    <a href="https://cloud.google.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>• Google Cloud Architect</a>
                  </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ fontSize: '11.5px', color: '#0ea5e9', display: 'block', marginBottom: '3px' }}>Cybersecurity</strong>
                  <div style={{ fontSize: '11px', color: '#334155', lineHeight: '1.5' }}>
                    <a href="https://www.comptia.org/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>• CompTIA Security+</a>
                    <a href="https://www.isc2.org/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>• CISSP</a>
                    <a href="https://www.eccouncil.org/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>• Certified Ethical Hacker</a>
                  </div>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ fontSize: '11.5px', color: '#0ea5e9', display: 'block', marginBottom: '3px' }}>E-Learning Platforms</strong>
                  <div style={{ fontSize: '11px', color: '#334155', lineHeight: '1.5' }}>
                    <a href="https://moodle.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>• Moodle Educator (MEC)</a>
                    <a href="https://cloud.google.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>• Google Workspace Admin</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
});

export default ResumeTemplate;
