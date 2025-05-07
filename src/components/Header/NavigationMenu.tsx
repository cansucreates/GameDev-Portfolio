import React from 'react';
import { X } from 'lucide-react';
import './NavigationMenu.css';

interface NavigationMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center md:hidden mb-4">
          <span className="font-pixel text-white text-xl">MENU</span>
          <button 
            className="pixel-button px-2 py-1"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} className="text-white" />
          </button>
        </div>
        
        <ul className="flex flex-col md:flex-row md:justify-center space-y-3 md:space-y-0 md:space-x-8">
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a 
                href={item.href} 
                className="font-pixel text-white hover:text-green-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;