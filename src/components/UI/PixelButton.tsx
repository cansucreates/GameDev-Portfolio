import React, { ReactNode } from 'react';
import './PixelButton.css';

interface PixelButtonProps {
  text: string;
  icon?: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
}

const PixelButton: React.FC<PixelButtonProps> = ({ 
  text, 
  icon, 
  href, 
  target, 
  onClick,
  className = ''
}) => {
  const buttonContent = (
    <>
      {icon && <span className="icon mr-2">{icon}</span>}
      <span className="text">{text}</span>
    </>
  );

  const buttonClass = `pixel-button flex items-center justify-center ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={buttonClass}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {buttonContent}
    </button>
  );
};

export default PixelButton;