import React, { useEffect, useState } from 'react';
import PixelButton from '../UI/PixelButton';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I CREATE CAPTIVATING GAME EXPERIENCES";
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 pixel-background"></div>
      <div className="container mx-auto px-4 z-10 mt-16">
        <div className="text-center">
          <h2 className="text-lg md:text-xl text-green-300 font-pixel mb-2 opacity-0 animate-fadeIn">WELCOME TO MY PORTFOLIO</h2>
          <div className="typing-container h-12 md:h-16 mb-8">
            <h1 className="text-xl md:text-3xl lg:text-4xl text-white font-pixel typing-text">
              {typedText}
              <span className="typing-cursor">_</span>
            </h1>
          </div>
          
          <div className={`buttons-container ${isTypingComplete ? 'visible' : 'hidden'}`}>
            <PixelButton 
              text="View Projects" 
              href="#projects" 
              className="bg-purple-600 mx-2 mb-4"
            />
            <PixelButton 
              text="About Me" 
              href="#about" 
              className="bg-blue-500 mx-2 mb-4"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="scroll-down-button text-white p-2 rounded-full"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
      
      {/* Floating game elements */}
      <div className="game-element coin"></div>
      <div className="game-element potion"></div>
      <div className="game-element star"></div>
      <div className="game-element chest"></div>
    </section>
  );
};

export default HeroSection;