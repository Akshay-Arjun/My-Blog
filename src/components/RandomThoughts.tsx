import { useState } from 'react';
import { thoughts } from '../thoughts';
import { Terminal } from 'lucide-react';

const RandomThoughts: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const showNextThought = () => {
    if (animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % thoughts.length);
      setAnimating(false);
    }, 300);
  };
  
  const currentThought = thoughts[currentIndex];
  
  return (
    <div className="random-thoughts mt-6">
      <div className="section-header mb-4">
        <span className="text-terminal-accent">$ echo $RANDOM_THOUGHT</span>
      </div>
      
      <div 
        className={`thought-container bg-black bg-opacity-30 border border-gray-700 rounded-lg p-6 mb-6 ${
          animating ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300`}
      >
        <div className="flex items-start">
          <Terminal size={24} className="text-terminal-accent mr-3 mt-1" />
          <div>
            <div className="text-lg text-terminal-text mb-2">{currentThought.text}</div>
            <div className="text-sm text-gray-400">Thought #{currentIndex + 1}</div>
          </div>
        </div>
      </div>
      
      <button
        onClick={showNextThought}
        className="bg-gray-800 text-terminal-accent hover:bg-gray-700 py-2 px-4 rounded border border-gray-600 flex items-center transition-colors"
      >
        <span className="mr-2">next-thought</span>
        <code className="bg-black bg-opacity-50 px-2 py-1 rounded text-sm">
          {(currentIndex + 1) % thoughts.length + 1}/{thoughts.length}
        </code>
      </button>
    </div>
  );
};

export default RandomThoughts;