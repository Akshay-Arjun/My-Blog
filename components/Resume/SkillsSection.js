import React from 'react';

export default function SkillsSection() {
  return (
    <section className="resume-section">
      <h2 className="section-title"><i className="bi bi-tools"></i> Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3><i className="bi bi-shield-lock"></i> Security Tools</h3>
          <ul className="skill-list">
            <li>Kali Linux</li>
            <li>Wireshark</li>
            <li>Burp Suite</li>
            <li>Nmap</li>
            <li>Metasploit</li>
            <li>OWASP ZAP</li>
            <li>Nessus</li>
            <li>Sqlmap</li>
            <li>Hydra</li>
            <li>John the Ripper</li>
            <li>Aircrack-ng</li>
            <li>Hashcat</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3><i className="bi bi-check2-circle"></i> Security Knowledge</h3>
          <ul className="skill-list">
            <li>OWASP Top 10</li>
            <li>Web Pentesting</li>
            <li>Vulnerability Assessment</li>
            <li>Network Security</li>
            <li>Security Auditing</li>
            <li>Incident Response</li>
            <li>Malware Analysis</li>
            <li>Cloud Security</li>
            <li>Cryptography</li>
            <li>Social Engineering</li>
            <li>Threat Intelligence</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3><i className="bi bi-code-slash"></i> Programming</h3>
          <ul className="skill-list">
            <li>Python</li>
            <li>C</li>
            <li>C++</li>
            <li>Bash Scripting</li>
            <li>HTML5 & CSS</li>
            <li>JavaScript</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3><i className="bi bi-gear"></i> Systems & Technologies</h3>
          <ul className="skill-list">
            <li>Linux</li>
            <li>Windows</li>
            <li>Android</li>
            <li>Cloud Security</li>
            <li>iOS</li>
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .resume-section {
          margin-bottom: 3rem;
          background-color: white;
          border-radius: 10px;
          padding: 2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .section-title {
          color: #1e3c72;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #e8eaf6;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.75rem;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        
        .skill-category h3 {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: #2a5298;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .skill-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        
        .skill-list li {
          padding: 0.4rem 0;
          border-bottom: 1px solid #eee;
        }
        
        .skill-list li:last-child {
          border-bottom: none;
        }
      `}</style>
    </section>
  );
} 