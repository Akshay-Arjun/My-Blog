import { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';

interface BootScreenProps {
  onComplete: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [bootStage, setBootStage] = useState(0);
  const bootMessages = [
   `[Viewer detected on port 443...] ✔ OK`,
    `[Authenticating viewer credentials...] ✔ OK`,
    `[Bypassing firewall protocols...] ✔ OK`,
    `[Launching remote shell...] ✔ OK`,
    `[Viewer session established...] ✔ OK`
  ];
  useEffect(() => {
    if (bootStage < bootMessages.length) {
      const timer = setTimeout(() => {
        setBootStage(bootStage + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [bootStage, bootMessages.length, onComplete]);

  return (
    <div className="boot-screen h-full flex flex-col justify-start">
      <div className="ascii-header text-terminal-accent text-xs leading-tight mb-6 mt-2">
        <pre>{`
     █████╗ ██╗  ██╗███████╗██╗  ██╗ █████╗ ██╗   ██╗██ ███████╗    ██████╗ ██╗      ██████╗  ██████╗ 
    ██╔══██╗██║ ██╔╝██╔════╝██║  ██║██╔══██╗╚██╗ ██╔╝   ██╔════╝    ██╔══██╗██║     ██╔═══██╗██╔════╝ 
    ███████║█████╔╝ ███████╗███████║███████║ ╚████╔╝    ███████╗    ██████╔╝██║     ██║   ██║██║  ███╗
    ██╔══██║██╔═██╗ ╚════██║██╔══██║██╔══██║  ╚██╔╝     ╚════██║    ██╔══██╗██║     ██║   ██║██║   ██║
    ██║  ██║██║  ██╗███████║██║  ██║██║  ██║   ██║      ███████║    ██████╔╝███████╗╚██████╔╝╚██████╔╝
    ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝      ╚══════╝    ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ 
    `}</pre>
      </div>

      <div className="boot-messages text-terminal-text">
        {bootMessages.slice(0, bootStage).map((message, index) => (
          <div key={index} className="mb-2">
            <TypewriterText text={message} delay={20} />
          </div>
        ))}

        {bootStage >= bootMessages.length && (
          <>
            <div className="mt-4 mb-2 text-terminal-accent">
              <TypewriterText text="[Guest access granted. System ready. Type 'help' for available commands]" delay={20} />
            </div>
        
          </>
        )}
      </div>
    </div>
  );
};

export default BootScreen;