export const resumeStyles = {
  container: `
    max-width: 1000px;
    margin: 0 auto;
  `,
  section: `
    margin-bottom: 3rem;
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  `,
  sectionTitle: `
    color: #1e3c72;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #e8eaf6;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.75rem;
  `,
  responsive: `
    @media (max-width: 768px) {
      .experience-meta, .education-meta {
        flex-direction: column;
        gap: 0.2rem;
      }
      
      .contact-info, .social-links {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `
}; 