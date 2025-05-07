import React, { useState } from 'react';
import { Code, Palette, TowerControl as GameController, ArrowRight } from 'lucide-react';
import './AboutSection.css';
import pixelCharacter from '../../pixel-char.png';

const AboutSection: React.FC = () => {
  const [activeDialogue, setActiveDialogue] = useState<string | null>(null);
  
  const skills = [
    { name: 'Unity', level: 90 },
    { name: 'C#', level: 85 },
    { name: 'Game Design', level: 80 },
    { name: 'Aseprite', level: 75 },
    { name: 'Blender', level: 70 },
    { name: 'Git + GitHub', level: 100 },
  ];

  const dialogueBoxes = [
    {
      id: 'coding',
      icon: <Code size={24} />,
      title: 'Coding',
      content: "I specialize in C# programming for Unity game development. With a solid foundation in software architecture, I create clean, maintainable code that brings game mechanics to life."
    },
    {
      id: 'art',
      icon: <Palette size={24} />,
      title: 'Pixel Art',
      content: "Using Aseprite, I create charming pixel art assets that capture the nostalgic essence of retro games while adding my own modern twist. I love creating memorable characters and environments."
    },
    {
      id: 'gamedev',
      icon: <GameController size={24} />,
      title: 'Game Design',
      content: "I design engaging gameplay experiences with a focus on player satisfaction. From core mechanics to level design, I aim to create games that are both challenging and rewarding."
    }
  ];

  return (
    <section id="about" className="about-section py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-2xl md:text-3xl font-pixel text-center mb-12">ABOUT ME</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="avatar-container relative mx-auto">
              <div className="pixel-character">
                <img src={pixelCharacter} alt="Pixel Character" className="pixel-image" />
              </div>
              <div className="avatar-platform"></div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="dialogue-box mb-8">
              <h3 className="text-xl font-pixel text-green-400 mb-2">THE PROGRAMMER</h3>
              <p className="mb-4">
              I'm an independent game developer passionate about bringing interactive worlds to life. My main focus is programming with C# in Unity, where I build small 2D and 3D games to explore gameplay systems, mechanics, and design principles.
              </p>
              <p>
              Whether it's prototyping unique mechanics or polishing small experiences, I enjoy the creative problem-solving that comes with each step of development. My goal is to keep growing, keep building, and eventually launch fully developed titles that reflect my ideas and skills.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {dialogueBoxes.map((box) => (
                <div 
                  key={box.id}
                  className={`skill-card cursor-pointer ${activeDialogue === box.id ? 'active' : ''}`}
                  onClick={() => setActiveDialogue(activeDialogue === box.id ? null : box.id)}
                >
                  <div className="icon-container mb-2">
                    {box.icon}
                  </div>
                  <h4 className="font-pixel text-lg mb-1">{box.title}</h4>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-300">Details</span>
                    <ArrowRight size={14} className="ml-1 arrow-icon" />
                  </div>
                </div>
              ))}
            </div>
            
            {activeDialogue && (
              <div className="dialogue-box active-dialogue">
                {dialogueBoxes.find(box => box.id === activeDialogue)?.content}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-pixel text-center text-green-400 mb-6">SKILLS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="skill-bar">
                <div className="flex justify-between mb-1">
                  <span className="font-pixel text-sm">{skill.name}</span>
                  <span className="text-xs">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ width: `${skill.level}%` }}
                    data-level={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;