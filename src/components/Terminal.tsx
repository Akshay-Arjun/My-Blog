import { useState, useRef, useEffect, ReactNode } from 'react';
import { TerminalCursor } from './TerminalCursor';

interface TerminalProps {
  command: string;
  setCommand: (command: string) => void;
  executeCommand: (command: string) => string;
  children: ReactNode;
  isExiting: boolean;
  exitMessage: string;
  clearTerminal?: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ 
  command, 
  setCommand, 
  executeCommand,
  children,
  isExiting,
  exitMessage,
  clearTerminal = false
}) => {
  const [history, setHistory] = useState<string[]>([]);
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // List of available commands for autocomplete
  const availableCommands = [
    'aboutme',
    'blogs',
    'clear',
    'destroy',
    'help',
    'projects',
    'thoughts',
  ];

  // Autocomplete handler
  const handleAutocomplete = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === 'Tab' || e.key === 'ArrowRight') && command) {
      const match = availableCommands.find(cmd => cmd.startsWith(command));
      if (match) {
        e.preventDefault();
        setCommand(match);
      }
    }
  };

  // Focus input when terminal is clicked
  const focusInput = () => {
    if (inputRef.current && !isExiting) {
      inputRef.current.focus();
    }
  };

  // Scroll to bottom when output changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output, command]);

  // Show exitMessage when isExiting becomes true
  useEffect(() => {
    if (isExiting && exitMessage && (output.length === 0 || output[output.length - 1] !== exitMessage)) {
      setOutput((prev) => [...prev, exitMessage]);
    }
  }, [isExiting, exitMessage]);

  // Clear terminal when clearTerminal prop is true
  useEffect(() => {
    if (clearTerminal) {
      setOutput([]);
      setHistory([]);
      setCommand('');
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }
  }, [clearTerminal]);

  // Handle command execution
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!command.trim() || isExiting) return;
    
    // Add command to history
    const newHistoryEntry = `guest@akshayblog:~$ ${command}`;
    setHistory([...history, newHistoryEntry]);
    
    // Execute command and get result
    const result = executeCommand(command);
    
    // Handle special commands
    if (result === 'CLEAR_TERMINAL') {
      setOutput([]);
      setHistory([]);
      setCommand('');

    } else if (result === 'EXITING') {
      setOutput([...output, exitMessage]);
    } else if (result) {
      // Add result to output
      setOutput([...output, result]);
    }
    
    // Clear command input
    setCommand('');
  };

  return (
    <div 
      className="terminal h-full flex flex-col" 
      onClick={focusInput}
      ref={terminalRef}
    >
      {/* Output area */}
      <div className="terminal-output flex-grow overflow-y-auto mb-4">
        {history.map((entry, index) => (
          <div key={`history-${index}`} className="mb-1">
            <span className="text-terminal-accent">{entry}</span>
          </div>
        ))}
        
        {output.map((line, index) => (
          <div key={`output-${index}`} className="mb-2 whitespace-pre-wrap">
            {line}
            {isExiting && index === output.length - 1 && (
              <span className="spinner"></span>
            )}
          </div>
        ))}

        {/* Children (routed components) are rendered here */}
        {children}
      </div>
      
      {/* Command input */}
      {!isExiting && (
        <div className="terminal-input-line flex items-center">
          <span className="text-terminal-accent mr-2">guest@akshayblog:~$</span>
          <form onSubmit={handleSubmit} className="flex-grow flex">
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="bg-transparent border-none outline-none flex-grow text-terminal-text"
              autoFocus
              onKeyDown={handleAutocomplete}
            />
            <TerminalCursor />
          </form>
        </div>
      )}
    </div>
  );
};

export default Terminal;