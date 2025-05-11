import React from 'react';

export default function ExperienceSection() {
  return (
    <section className="resume-section">
      <h2 className="section-title"><i className="bi bi-briefcase"></i> Professional Experience</h2>
      
      <div className="experience-item">
        <div className="experience-header">
          <h3>Cybersecurity Intern</h3>
          <div className="experience-meta">
            <span className="company">Smalltalk Technologies</span>
            <span className="duration">January 2024 – June 2024</span>
          </div>
        </div>
        <ul className="achievement-list">
          <li>Conducted regular VAPT scans across 15+ web applications using Burp Suite and OWASP ZAP</li>
          <li>Discovered and documented 8+ SQL Injection flaws in educational portals through manual pentesting, securing 50K+ user records with 80% fix rate in under 2 weeks</li>
          <li>Discovered payment gateway vulnerabilities in major amusement park portals, preventing unauthorized ticket purchases worth INR 5,00,000+/month</li>
          <li>Mapped detected vulnerabilities and threat scenarios to MITRE ATT&CK techniques for standardized incident response</li>
        </ul>
      </div>
      
      <div className="experience-item">
        <div className="experience-header">
          <h3>Tech Volunteer</h3>
          <div className="experience-meta">
            <span className="company">There is no earth b</span>
            <span className="duration">April 2021 – October 2022</span>
          </div>
        </div>
        <ul className="achievement-list">
          <li>Developed the initial phase of the website with robust security measures, improving user accessibility by 40%</li>
          <li>Planned and implemented scalable technology infrastructure</li>
          <li>Maintained and updated web applications with cutting-edge security measures, reducing page load times by 30%</li>
          <li>Collaborated in daily standups and team meetings to ensure adherence to project timelines</li>
        </ul>
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
        
        .experience-item {
          margin-bottom: 2rem;
        }
        
        .experience-header {
          margin-bottom: 1rem;
        }
        
        .experience-header h3 {
          font-size: 1.3rem;
          color: #1e3c72;
          margin-bottom: 0.5rem;
        }
        
        .experience-meta {
          display: flex;
          justify-content: space-between;
          color: #546e7a;
          font-style: italic;
        }
        
        .achievement-list {
          padding-left: 1.5rem;
        }
        
        .achievement-list li {
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .experience-meta {
            flex-direction: column;
            gap: 0.2rem;
          }
        }
      `}</style>
    </section>
  );
} 