import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  startDelay?: number;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 50, 
  startDelay = 0,
  onComplete 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) {
      // Initial delay before starting to type
      const startTimer = setTimeout(() => {
        setStarted(true);
      }, startDelay);
      
      return () => clearTimeout(startTimer);
    }
    
    if (started && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timer);
    } else if (started && currentIndex === text.length && onComplete) {
      onComplete();
    }
  }, [text, delay, currentIndex, started, startDelay, onComplete]);

  return <span>{displayText}</span>;
};

export default TypewriterText;