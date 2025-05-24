import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Video Steganography Tool</h2>
        <p className="mb-2">
          <span className="font-bold">GitHub:</span> <a href="https://github.com/Akshay-Arjun/Video-Steganography" target="_blank" rel="noopener noreferrer">Akshay-Arjun/Video-Steganography</a>
        </p>
        <p className="mb-2">
          <span className="font-bold">Description:</span> Engineered secure data hiding in video frames using hybrid encryption (AES-256-CBC + RSA-2048)
        </p>
        <p className="mb-2">
          <span className="font-bold">Features:</span>
          <ul className="list-disc pl-5">
            <li>Implemented multi frame encoding for tamper detection</li>
            <li>Prevented unauthorized data access and modification</li>
            <li>Reduced data leakage risks compared to traditional LSB methods</li>
          </ul>
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Web Enumeration Tool</h2>
        <p className="mb-2">
          <span className="font-bold">GitHub:</span> <a href="https://github.com/Akshay-Arjun/Website-Buster" target="_blank" rel="noopener noreferrer">Akshay-Arjun/Website-Buster</a>
        </p>
        <p className="mb-2">
          <span className="font-bold">Description:</span> Automated discovery of 50+ hidden endpoints using Python multithreading
        </p>
        <p className="mb-2">
          <span className="font-bold">Features:</span>
          <ul className="list-disc pl-5">
            <li>Reduced manual recon time by 65% through parallel scanning</li>
          </ul>
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Cybersecurity Network</h2>
        <p className="mb-2">
          <span className="font-bold">GitHub:</span> <a href="https://github.com/Akshay-Arjun/cybersecurity-network" target="_blank" rel="noopener noreferrer">Akshay-Arjun/cybersecurity-network</a>
        </p>
        <p className="mb-2">
          <span className="font-bold">Description:</span> Created a cybersecurity hub using ReactJS, ViteJS, and Supabase to handle users on large scale
        </p>
        <p className="mb-2">
          <span className="font-bold">Features:</span>
          <ul className="list-disc pl-5">

            <li>Implemented E2E encryption for anonymous Q&A system</li>
            <li>Curated a collection of + articles, tools, and resources for cybersecurity professionals</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Projects;
   