import React from 'react';
import { Github, Linkedin, PlayCircle } from 'lucide-react';
import { IoGameController } from 'react-icons/io5';  // Itch.io Icon
import './SocialHub.css';
import devTo from '../../dev-to-svgrepo-com.png';
import medium from '../../medium-svgrepo-com.png';
import dailyDev from '../../Icon - White transparent.png';
import unityLearn from '../../unity-svgrepo-com.png'; // Custom Unity Learn icon

const SocialHub: React.FC = () => {
  return (
    <div className="social-hub">
      <h3 className="font-pixel text-xl text-green-400 mb-6">CONNECT WITH ME</h3>
      
      <div className="social-grid">
        <a href="https://github.com/cansucreates" target="_blank" rel="noopener noreferrer" className="social-item github">
          <div className="social-icon">
            <Github size={24} />
          </div>
          <div className="social-name">GitHub</div>
        </a>
        
        <a href="https://linkedin.com/in/cansu-aysagdic" target="_blank" rel="noopener noreferrer" className="social-item linkedin">
          <div className="social-icon">
            <Linkedin size={24} />
          </div>
          <div className="social-name">LinkedIn</div>
        </a>

        <a href="https://play.unity.com/tr/user/42d19b15-bde3-4d36-b78b-3f73d3debaef" target="_blank" rel="noopener noreferrer" className="social-item unity">
          <div className="social-icon">
            <PlayCircle size={24} />
          </div>
          <div className="social-name">Unity Play</div>
        </a>

        <a href="https://cansucreates.itch.io" target="_blank" rel="noopener noreferrer" className="social-item itch">
          <div className="social-icon">
            <IoGameController size={30} /> {/* Stronger presence for Itch.io */}
          </div>
          <div className="social-name">Itch.io</div>
        </a>

        {/* Dev.to */}
        <a href="https://dev.to/cansucreates" target="_blank" rel="noopener noreferrer" className="social-item devto">
          <div className="social-icon">
            <img src={devTo} alt="Dev.to" width={24} height={24} /> {/* Custom Dev.to icon */}
          </div>
          <div className="social-name">Dev.to</div>
        </a>

        {/* Medium */}
        <a href="https://medium.com/@caysagdic" target="_blank" rel="noopener noreferrer" className="social-item medium">
          <div className="social-icon">
            <img src={medium} alt="Medium" width={24} height={24} /> {/* Custom Medium icon */}
          </div>
          <div className="social-name">Medium</div>
        </a>

        {/* Daily.dev */}
        <a href="https://app.daily.dev/itscansuxx" target="_blank" rel="noopener noreferrer" className="social-item dailydev">
          <div className="social-icon">
            <img src={dailyDev} alt="Daily.dev" width={24} height={24} /> {/* Custom Daily.dev icon */}
          </div>
          <div className="social-name">Daily.dev</div>
        </a>

        {/* Unity Learn */}
        <a href="https://learn.unity.com/u/62da8defedbc2a7a662d2cef?tab=profile" target="_blank" rel="noopener noreferrer" className="social-item unity-learn">
          <div className="social-icon">
            <img src={unityLearn} alt="Unity Learn" width={24} height={24} /> {/* Custom Unity Learn icon */}
          </div>
          <div className="social-name">Unity Learn</div>
        </a>
      </div>

      <div className="extra-space-fill">
        <p className="extra-text">Explore my game development journey on these platforms!</p>
      </div>
    </div>
  );
};

export default SocialHub;
