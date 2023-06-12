import React, { useEffect, useState } from 'react';
import './typinig.css';

const TypingComponent: React.FC = () => {
  const phrases = ['UIBOXX !',':)'];
  const [textElement, setTextElement] = useState<HTMLElement | null>(null);
  let currentPhraseIndex = 0;

  useEffect(() => {
    const element = document.getElementById('text');
    setTextElement(element);
  }, []);

  function typePhrase() {
    if (textElement) {
      const currentPhrase = phrases[currentPhraseIndex];
      let charIndex = 0;
      const typingInterval = setInterval(() => {
        textElement.textContent += currentPhrase[charIndex];
        charIndex++;

        if (charIndex === currentPhrase.length) {
          clearInterval(typingInterval);
          setTimeout(erasePhrase, 2500);
        }
      }, 300);
    }
  }

  function erasePhrase() {
    if (textElement) {
      let phrase: string | null = textElement.textContent;
      const eraseInterval = setInterval(() => {
        phrase = phrase ? phrase.slice(0, -1) : null;
        if (textElement) {
          textElement.textContent = phrase;
        }

        if (phrase === null) {
          clearInterval(eraseInterval);
          currentPhraseIndex++;
          if (currentPhraseIndex === phrases.length) {
            currentPhraseIndex = 0;
          }
          setTimeout(typePhrase, 2500);
        }
      }, 300);
    }
  }

  useEffect(() => {
    typePhrase();
  });

  return (
    
      <div className="typing-effect">
        <span id="text"></span>
      </div>
  );
};

export default TypingComponent;
