import { useState, useEffect } from 'react';

export const TerminalCursor: React.FC = () => {
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <span 
      className="inline-block w-2 h-4 bg-terminal-text ml-1"
      style={{ 
        opacity: visible ? 1 : 0,
        animation: 'blink 1s infinite'
      }}
    />
  );
};