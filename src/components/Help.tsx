import React from 'react';
import { Link } from 'react-router-dom';

const Help: React.FC = () => (
  <div className="help-page mt-6 mb-8 text-terminal-text">
    <div className="section-header mb-4 text-terminal-accent text-lg">$ help</div>
    <div className="section-content ml-2">
      <div className="mb-2">Available commands:</div>
      <ul className="list-disc ml-6">
        <li><Link to="/aboutme" className="text-terminal-accent hover:underline">aboutme</Link>: View my resume and bio</li>
        <li><Link to="/blogs" className="text-terminal-accent hover:underline">blogs</Link>: Browse my blog posts</li>
        <li><span className="text-terminal-accent">clear</span>: Clear the terminal and return to home screen</li>
        <li><span className="text-terminal-accent">destroy</span>: Destroy the terminal, wipe out your session and restart⚠️ </li>
        <li><Link to="/help" className="text-terminal-accent hover:underline">help</Link>: Show this help message</li>
        <li><Link to="/projects" className="text-terminal-accent hover:underline">projects</Link>: View my projects</li>
        <li><Link to="/thoughts" className="text-terminal-accent hover:underline">thoughts</Link>: See random thoughts</li>
      </ul>
      <div className="mt-4">Tip: You can type the first letter of a command and then press the Tab or Right Arrow key to autocomplete it. For example, type "a" for aboutme, "b" for blogs, and so on.</div>
    </div>
  </div>
);

export default Help; 