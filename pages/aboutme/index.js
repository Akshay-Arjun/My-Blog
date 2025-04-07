import Head from 'next/head';
import React from 'react';
import { HOME_OG_IMAGE_URL, ORG_NAME } from '../../lib/constants';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>About Me | {ORG_NAME}</title>
        <meta
          name="description"
          content="Resume of Akshay Vollala – Aspiring Cybersecurity Professional with solid academic credentials and practical experience."
        />
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <Container>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
          {/* Header Section */}
          <header style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1>Akshay Vollala</h1>
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
              Aspiring Cybersecurity Professional
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:akshayvollala779@gmail.com">akshayvollala779@gmail.com</a> | <strong>Phone:</strong> +91 9491466120
            </p>
            <p>
              <a href="https://www.linkedin.com/in/akshayvollala/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
              <a href="https://github.com/Akshay-Arjun" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </header>

          {/* Technical Skills */}
          <section style={{ marginBottom: '30px' }}>
            <h2>Technical Skills</h2>
            <ul>
              <li><strong>Security Tools:</strong> Wireshark, Burp Suite, Nmap, Metasploit, OWASP ZAP</li>
              <li><strong>Security Knowledge:</strong> OWASP Top 10, Web Pentesting, Vulnerability Assessment, Network Security, Security Auditing</li>
              <li><strong>Programming:</strong> Python, C, Bash Scripting</li>
              <li><strong>Web Technologies:</strong> HTML5, CSS, Web Application Security</li>
              <li><strong>Systems & Tools:</strong> Linux, Git, VS Code, Docker</li>
              <li><strong>Databases:</strong> MySQL, MongoDB</li>
            </ul>
          </section>

          {/* Certifications & Training */}
          <section style={{ marginBottom: '30px' }}>
            <h2>Certifications &amp; Training</h2>
            <ul>
              <li>Google Professional Cybersecurity Certificate – Comprehensive security fundamentals, incident response, and security operations</li>
              <li>Ethical Hacking Essentials (EHE) – EC-Council certified training in penetration testing and ethical hacking</li>
              <li>Introduction to Software Testing – University of Minnesota</li>
              <li>Python for Data Science – IIT Madras</li>
            </ul>
          </section>

          {/* Experience */}
          <section style={{ marginBottom: '30px' }}>
            <h2>Experience</h2>
            <div style={{ marginBottom: '20px' }}>
              <h3>Smalltalk Technologies <span style={{ fontWeight: 'normal' }}>(January 2024 – June 2024)</span></h3>
              <p><strong>Cybersecurity Intern</strong></p>
              <ul>
                <li>Implemented data reporting through dashboards to visualize vulnerability trends, facilitating clear communication and remediation prioritization.</li>
                <li>Discovered and reported SQL Injection vulnerabilities in educational websites with detailed analysis and remediation steps.</li>
                <li>Identified critical IDOR vulnerabilities and DDoS attack vectors, delivering comprehensive risk assessment reports with an 80% remediation rate.</li>
                <li>Detected payment system vulnerabilities, preventing unauthorized transactions worth over INR 5,00,000/month.</li>
              </ul>
            </div>
            <div>
              <h3>There is no earth b <span style={{ fontWeight: 'normal' }}>(April 2021 – October 2022)</span></h3>
              <p><strong>Tech Volunteer (Remote)</strong></p>
              <ul>
                <li>Developed the initial phase of the website with robust security measures, improving user accessibility by 40%.</li>
                <li>Planned and implemented scalable technology infrastructure.</li>
                <li>Maintained and updated web applications with cutting-edge security measures, reducing page load times by 30%.</li>
                <li>Collaborated in daily standups and team meetings to ensure adherence to project timelines.</li>
              </ul>
            </div>
          </section>

          {/* Security Projects */}
          <section style={{ marginBottom: '30px' }}>
            <h2>Security Projects</h2>
            <div style={{ marginBottom: '20px' }}>
              <h3>Cybersecurity Network | Security Community Platform</h3>
              <ul>
                <li>Created a cybersecurity hub using ReactJS, ViteJS, and Supabase.</li>
                <li>Integrated features like podcasts, anonymous Q&amp;A discussions, and a resource library for professionals.</li>
              </ul>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h3>Video Steganography Tool | Data Security Project</h3>
              <ul>
                <li>Developed an advanced steganography tool utilizing AES-256 and RSA encryption for secure data hiding in video frames.</li>
                <li>Implemented military-grade encryption standards and secure key management practices.</li>
                <li>Awarded first place in SRU Hackathon 2022 for an innovative approach to data security.</li>
              </ul>
            </div>
            <div>
              <h3>Web Enumeration Tool | Security Testing Tool</h3>
              <ul>
                <li>Built a tool to discover hidden endpoints and potential security vulnerabilities in web applications.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section style={{ marginBottom: '30px' }}>
            <h2>Education</h2>
            <h3>SR University, Hanamkonda <span style={{ fontWeight: 'normal' }}>(2020 – 2024)</span></h3>
            <p>
              <strong>Bachelor of Technology in Computer Science and Engineering with Cybersecurity Specialization</strong>
            </p>
            <ul>
              <li>Focused on cybersecurity courses and independent research integrating data analysis and visualization techniques.</li>
              <li>Led the university cybersecurity club and organized security workshops.</li>
              <li>Winner of the SR University Hackathon in the Cybersecurity domain.</li>
            </ul>
          </section>
        </div>
      </Container>
    </Layout>
  );
}
