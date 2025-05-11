import React from 'react';

export default function ProjectsSection() {
  return (
    <section className="resume-section">
      <h2 className="section-title"><i className="bi bi-puzzle"></i> Security Projects</h2>
      
      <div className="project-grid">
        <div className="project-card">
          <h3>
            <a href="https://cybersecurity-network.vercel.app/" target="_blank" rel="noopener noreferrer">
              Cybersecurity Network <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </h3>
          <p className="project-type">Security Community Platform</p>
          <ul className="project-details">
            <li>Created a cybersecurity hub using ReactJS, ViteJS, and Supabase</li>
            <li>Integrated features like podcasts, anonymous Q&A discussions, and a resource library for professionals</li>
          </ul>
        </div>
        
        <div className="project-card">
          <h3>
            <a href="https://github.com/Akshay-Arjun/Video-Steganography" target="_blank" rel="noopener noreferrer">
              Video Steganography Tool <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </h3>
          <p className="project-type">Data Security Project</p>
          <ul className="project-details">
            <li>Developed an advanced steganography tool utilizing AES-256 and RSA encryption for secure data hiding in video frames</li>
            <li>Implemented military-grade encryption standards and secure key management practices</li>
            <li>Awarded first place in SRU Hackathon 2022 for an innovative approach to data security</li>
          </ul>
        </div>
        
        <div className="project-card">
          <h3>
            <a href="https://github.com/Akshay-Arjun/Website-Buster" target="_blank" rel="noopener noreferrer">
              Web Enumeration Tool <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </h3>
          <p className="project-type">Security Testing Tool</p>
          <ul className="project-details">
            <li>Developed an automated scanner for detecting web application endpoints and identifying possible security weaknesses</li>
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
        
        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .project-card {
          background-color: #f9fafc;
          border-radius: 8px;
          padding: 1.5rem;
          border-left: 4px solid #1e3c72;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
        }
        
        .project-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
          color: #1e3c72;
        }
        
        .project-card h3 a {
          color: #1e3c72;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: color 0.2s;
        }
        
        .project-card h3 a:hover {
          color: #4065b4;
        }
        
        .project-type {
          color: #546e7a;
          font-style: italic;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }
        
        .project-details {
          padding-left: 1.5rem;
          margin: 0;
        }
        
        .project-details li {
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }
      `}</style>
    </section>
  );
} 