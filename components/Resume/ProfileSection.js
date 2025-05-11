import React from 'react';

export default function ProfileSection() {
  return (
    <section className="hero-section">
      <div className="profile-card">
        <div className="profile-header">
          <h1>Akshay Vollala</h1>
          <p className="title">Cybersecurity Professional</p>
          <div className="contact-info">
            <a href="mailto:akshayvollala779@gmail.com" className="contact-link">
              <i className="bi bi-envelope"></i> akshayvollala779@gmail.com
            </a>
            <a href="tel:+919491466120" className="contact-link">
              <i className="bi bi-telephone"></i> +91 9491466120
            </a>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/akshayvollala/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Akshay-Arjun" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="bi bi-github"></i> GitHub
            </a>
          </div>
        </div>
        <div className="profile-summary">
          <h2><i className="bi bi-person-badge"></i> Professional Summary</h2>
          <p>
            Cybersecurity specialist with a strong foundation in vulnerability assessment, penetration testing, and secure
            application development. Proven track record in identifying and remediating critical security flaws,
            implementing robust security measures, and developing secure applications. Passionate about continuous
            learning and staying ahead of emerging cyber threats.
          </p>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          margin-bottom: 3rem;
        }
        
        .profile-card {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          border-radius: 12px;
          overflow: hidden;
          color: white;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .profile-header {
          padding: 2.5rem 2rem;
          text-align: center;
        }
        
        .profile-header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        
        .title {
          font-size: 1.3rem;
          font-weight: 300;
          font-style: italic;
          margin-bottom: 1.5rem;
        }
        
        .contact-info {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .contact-link, .social-link {
          color: white;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: opacity 0.2s;
        }
        
        .contact-link:hover, .social-link:hover {
          opacity: 0.8;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        
        .profile-summary {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .profile-summary h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .profile-summary p {
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .contact-info, .social-links {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
} 