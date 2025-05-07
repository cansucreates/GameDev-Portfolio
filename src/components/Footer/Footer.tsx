import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-section py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="footer-logo mb-4 md:mb-0">
            <h3 className="text-xl font-pixel text-white">CANSU AYSAGDIC</h3>
            <p className="text-xs text-gray-400">GAME DEVELOPER</p>
          </div>
          
          <div className="footer-links mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#blog" className="footer-link">Blog</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/cansucreates" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>

            <a href="https://www.linkedin.com/in/cansu-aysagdic/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-credits mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Cansu Aysagdic. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Made with <span className="text-red-400">♥</span> and lots of coffee
          </p>
        </div>
      </div>
      
      <div className="pixel-border"></div>
    </footer>
  );
};

export default Footer;