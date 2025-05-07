import React, { useState, useEffect } from 'react';
import { Menu, Github, ExternalLink } from 'lucide-react';
import NavigationMenu from './NavigationMenu';
import PixelButton from '../UI/PixelButton';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="pixel-banner relative">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="pixel-logo">
            <h1 className="text-2xl md:text-3xl font-pixel text-white">CANSU AYSAGDIC</h1>
            <p className="text-xs md:text-sm font-pixel text-green-300">GAME DEVELOPER | UNITY SPECIALIST</p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <PixelButton 
              href="https://learn.unity.com/u/62da8defedbc2a7a662d2cef?tab=profile"
              target="_blank"
              icon={<ExternalLink size={16} />}
              text="Unity"
              className="bg-blue-500"
            />
            <PixelButton 
              href="https://github.com/cansucreates"
              target="_blank"
              icon={<Github size={16} />}
              text="GitHub"
              className="bg-purple-600"
            />
            <PixelButton 
              href="https://cansucreates.itch.io"
              target="_blank"
              icon={<ExternalLink size={16} />}
              text="itch.io"
              className="bg-red-500"
            />
          </div>
          
          <button 
            className="md:hidden pixel-button px-2 py-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} className="text-white" />
          </button>
        </div>
      </div>
      
      <NavigationMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </header>
  );
};

export default Header;