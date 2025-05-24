import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import BootScreen from './components/BootScreen';
import Terminal from './components/Terminal';
import AboutMe from './components/AboutMe';
import Blogs from './components/Blogs';
import RandomThoughts from './components/RandomThoughts';
import Projects from './components/Projects';
import Help from './components/Help';

function App() {
  const [booted, setBooted] = useState(false);
  const [command, setCommand] = useState('');
  const [isExiting, setIsExiting] = useState(false);
  const [exitMessage, setExitMessage] = useState('');
  const [terminalKey, setTerminalKey] = useState(0);
  const [clearTerminal, setClearTerminal] = useState(false);
  const [pendingHelp, setPendingHelp] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle exit transition
  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        setBooted(false);
        setIsExiting(false);
        setExitMessage('');
        navigate('/');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isExiting, navigate]);

  // Handle command execution
  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (["aboutme","blogs","thoughts","projects","help"].includes(trimmedCmd)) {
      let path = "/" + trimmedCmd;
      if (trimmedCmd === "aboutme") path = "/aboutme";
      if (trimmedCmd === "blogs") path = "/blogs";
      if (trimmedCmd === "thoughts") path = "/thoughts";
      if (trimmedCmd === "projects") path = "/projects";
      if (trimmedCmd === "help") path = "/help";
      if (location.pathname === path) {
        setClearTerminal(true);
        setTimeout(() => setClearTerminal(false), 0);
      }
      navigate(path);
      return `Executing: ${cmd}`;
    }
   
    switch (trimmedCmd) {
      case 'help':
        return `Available commands:\n- aboutme: View my resume and bio\n- blogs: Browse my blog posts\n- clear: Clear the terminal and return to home screen\n- destroy: destroy the terminal and your session ⚠️\n- help: Show this help message\n- projects: View my projects\n- thoughts: See random thoughts`;
      case 'clear':
        navigate('/');
        return 'CLEAR_TERMINAL';
      case 'destroy':
          setIsExiting(true);
          setExitMessage('[Catastrophic failure...]');
          return 'EXITING';
     
      default:
        if (trimmedCmd) {
          return `Command not found: ${cmd}. Type 'help' for available commands.`;
        }
        return '';
    }
    
    return `Executing: ${cmd}`;
  };

  useEffect(() => {
    if (pendingHelp && location.pathname === '/') {
      setClearTerminal(true);
      setTimeout(() => setClearTerminal(false), 10);
      setCommand(''); // clear input
      setPendingHelp(false);
      setTimeout(() => {
        setCommand('help');
      }, 20); // trigger help output
    }
  }, [pendingHelp, location.pathname]);

  return (
    <div className="terminal-container">
      <div className="noise"></div>
      <div className={`terminal-screen ${isExiting ? 'terminal-exiting' : ''}`}>
        {!booted ? (
          <BootScreen onComplete={() => setBooted(true)} />
        ) : (
          <Terminal
            key={terminalKey}
            command={command}
            setCommand={setCommand}
            executeCommand={executeCommand}
            isExiting={isExiting}
            exitMessage={exitMessage}
            clearTerminal={clearTerminal}
          >
            <Routes>
              <Route path="/" element={<div></div>} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/blogs/*" element={<Blogs />} />
              <Route path="/thoughts" element={<RandomThoughts />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </Terminal>
        )}
      </div>
    </div>
  );
}

export default App