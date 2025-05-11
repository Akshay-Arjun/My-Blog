import React from 'react';

export default function EducationSection() {
  return (
    <section className="resume-section">
      <div className="two-column-grid">
        <div className="column">
          <h2 className="section-title"><i className="bi bi-mortarboard"></i> Education</h2>
          <div className="education-item">
            <h3>Bachelor of Technology</h3>
            <p className="education-detail">Computer Science and Engineering with Cybersecurity Specialization</p>
            <div className="education-meta">
              <span className="institution">SR University, Hanamkonda</span>
              <span className="duration">2020 – 2024</span>
            </div>
            <ul className="education-highlights">
              <li>Focused on cybersecurity courses and independent research</li>
              <li>Led the university cybersecurity club and organized security workshops</li>
              <li>Winner of the SR University Hackathon in the Cybersecurity domain</li>
            </ul>
          </div>
        </div>
        
        <div className="column">
          <h2 className="section-title"><i className="bi bi-award"></i> Certifications</h2>
          <ul className="certification-list">
            <li className="certification-item">
              <span className="certification-name">Google Professional Cybersecurity Certificate</span>
              <p>Comprehensive security fundamentals, incident response, and security operations</p>
            </li>
            <li className="certification-item">
              <span className="certification-name">Ethical Hacking Essentials (EHE)</span>
              <p>EC-Council certified training in penetration testing and ethical hacking</p>
            </li>
            <li className="certification-item">
              <span className="certification-name">Introduction to Software Testing</span>
              <p>University of Minnesota</p>
            </li>
            <li className="certification-item">
              <span className="certification-name">Python for Data Science</span>
              <p>IIT Madras</p>
            </li>
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
        
        .two-column-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .education-item h3 {
          font-size: 1.3rem;
          color: #1e3c72;
          margin-bottom: 0.3rem;
        }
        
        .education-detail {
          font-weight: 500;
          margin-bottom: 0.5rem;
        }
        
        .education-meta {
          display: flex;
          justify-content: space-between;
          color: #546e7a;
          font-style: italic;
          margin-bottom: 1rem;
        }
        
        .education-highlights {
          padding-left: 1.5rem;
          margin: 0;
        }
        
        .education-highlights li {
          margin-bottom: 0.4rem;
        }
        
        .certification-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        
        .certification-item {
          border-bottom: 1px solid #eeeeee;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
        }
        
        .certification-item:last-child {
          border-bottom: none;
        }
        
        .certification-name {
          display: block;
          font-weight: 600;
          color: #1e3c72;
          margin-bottom: 0.3rem;
        }
        
        .certification-item p {
          margin: 0;
          color: #546e7a;
        }
        
        @media (max-width: 768px) {
          .education-meta {
            flex-direction: column;
            gap: 0.2rem;
          }
        }
      `}</style>
    </section>
  );
} 