import TypewriterText from './TypewriterText';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me mt-6 mb-8">
      <div className="section-header mb-4 text-terminal-accent">
        <TypewriterText text="$ cat aboutme.txt" delay={20} />
      </div>
      
      <div className="section-content text-terminal-text ml-2">
        <div className="mb-4">
          <h2 className="text-xl text-terminal-accent mb-2">
            <TypewriterText text="// PERSONAL INFO" delay={10} startDelay={300} />
          </h2>
          <div className="ml-4">
            <TypewriterText text="NAME: Akshay Vollala" delay={5} startDelay={600} />
            <br />
            <TypewriterText text="ROLE: Cybersecurity Professional" delay={5} startDelay={800} />
            <br />
            <TypewriterText text="EMAIL: akshayvollala779@gmail.com" delay={5} startDelay={1000} />
            <br />
            <TypewriterText text="PHONE: +91 9491466120" delay={5} startDelay={1200} />
            <br />
            <TypewriterText text="LINKEDIN: linkedin.com/in/akshayvollala" delay={5} startDelay={1400} />
            <br />
            <TypewriterText text="GITHUB: github.com/akshayvollala" delay={5} startDelay={1600} />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl text-terminal-accent mb-2">
            <TypewriterText text="// PROFESSIONAL SUMMARY" delay={10} startDelay={1800} />
          </h2>
          <div className="ml-4">
            <TypewriterText text="Cybersecurity specialist with a strong foundation in vulnerability assessment, penetration testing, and secure application development." delay={5} startDelay={2000} />
            <br />
            <TypewriterText text="Proven track record in identifying and remediating critical security flaws, implementing robust security measures, and developing secure applications." delay={5} startDelay={2200} />
            <br />
            <TypewriterText text="Passionate about continuous learning and staying ahead of emerging cyber threats." delay={5} startDelay={2400} />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl text-terminal-accent mb-2">
            <TypewriterText text="// TECHNICAL SKILLS" delay={10} startDelay={2600} />
          </h2>
          <div className="ml-4">
            <TypewriterText text="Security Tools: Kali Linux, Wireshark, Burp Suite, Nmap, Metasploit, OWASP ZAP, Nessus, Sqlmap, Hydra, John the Ripper, Aircrack-ng, Hashcat" delay={5} startDelay={2800} />
            <br />
            <TypewriterText text="Security Knowledge: OWASP Top 10, Web Pentesting, Vulnerability Assessment, Network Security, Security Auditing, Incident Response, Malware Analysis, Cloud Security, Cryptography, Social Engineering, Threat Intelligence" delay={5} startDelay={3000} />
            <br />
            <TypewriterText text="Programming: Python, C, C++, Bash Scripting, HTML5 & CSS, JavaScript, SQL" delay={5} startDelay={3200} />
            <br />
            <TypewriterText text="Systems & Technologies: Linux, Windows, Android, iOS, Git, Docker, AWS, Cloud Security" delay={5} startDelay={3400} />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl text-terminal-accent mb-2">
            <TypewriterText text="// PROFESSIONAL EXPERIENCE" delay={10} startDelay={3600} />
          </h2>
          <div className="ml-4">
            <div className="mb-2">
              <TypewriterText text="[Jan 2024 – Jul 2024] CYBERSECURITY INTERN @ SMALLTALK TECHNOLOGIES" delay={5} startDelay={3800} />
            </div>
            <div className="mb-2">
              <TypewriterText text="[Apr 2021 – Oct 2022] TECH VOLUNTEER @ THERE IS NO EARTH B" delay={5} startDelay={4000} />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl text-terminal-accent mb-2">
            <TypewriterText text="// SECURITY PROJECTS" delay={10} startDelay={4200} />
          </h2>
          <div className="ml-4">
            <div className="mb-2">
              <TypewriterText text="Cybersecurity Network - Security Community Platform" delay={5} startDelay={4400} />
              <br />
              <TypewriterText text="  * Created a cybersecurity hub using ReactJS, ViteJS, and Supabase" delay={5} startDelay={4600} />
              <br />
              <TypewriterText text="  * Integrated podcasts, anonymous Q&A, and a resource library" delay={5} startDelay={4800} />
            </div>
            <div className="mb-2">
              <TypewriterText text="Video Steganography Tool - Data Security Project" delay={5} startDelay={5000} />
              <br />
              <TypewriterText text="  * Developed a tool using AES-256 and RSA for secure data hiding in video frames" delay={5} startDelay={5200} />
              <br />
              <TypewriterText text="  * Awarded 1st place in SRU Hackathon 2022 for innovative data security" delay={5} startDelay={5400} />
            </div>
            <div className="mb-2">
              <TypewriterText text="Web Enumeration Tool - Security Testing Tool" delay={5} startDelay={5600} />
              <br />
              <TypewriterText text="  * Developed an automated scanner for web endpoint detection and security weaknesses" delay={5} startDelay={5800} />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl text-terminal-accent mb-2">
            <TypewriterText text="// EDUCATION" delay={10} startDelay={6000} />
          </h2>
          <div className="ml-4">
            <TypewriterText text="B.Tech, Computer Science & Engineering (Cybersecurity Specialization)" delay={5} startDelay={6200} />
            <br />
            <TypewriterText text="SR University, Hanamkonda (2020 – 2024)" delay={5} startDelay={6400} />
            <br />
            <TypewriterText text="  * Led cybersecurity club, organized workshops, and won SRU Hackathon (Cybersecurity)" delay={5} startDelay={6600} />
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl text-terminal-accent mb-2">
            <TypewriterText text="// CERTIFICATIONS" delay={10} startDelay={6800} />
          </h2>
          <div className="ml-4">
            <TypewriterText text="Google Professional Cybersecurity Certificate" delay={5} startDelay={7000} />
            <br />
            <TypewriterText text="Ethical Hacking Essentials (EHE) - EC-Council" delay={5} startDelay={7200} />
            <br />
            <TypewriterText text="Introduction to Software Testing - University of Minnesota" delay={5} startDelay={7400} />
            <br />
            <TypewriterText text="Python for Data Science - IIT Madras" delay={5} startDelay={7600} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;