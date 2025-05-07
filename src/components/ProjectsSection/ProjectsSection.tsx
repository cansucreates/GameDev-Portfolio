 
import React, { useState } from 'react';
import { Github, Filter } from 'lucide-react';
import PixelButton from '../UI/PixelButton';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

// Import PNGs from src directory
import memoriesImg from '../../memories.png';
import etgImg from '../../etg.png';
import fixtherobotsImg from '../../fixtherobots.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
  type: 'game' | 'tool' | 'asset';
}

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Memories",
      description: "Memories is a point-and-click narrative game created by our team Lunae Umbra during the Digiage Gamejam, where players explore forgotten moments and uncover hidden truths.",
      image: memoriesImg,
      technologies: ["Unity", "C#", "Editor Scripting","3D"],
      demoUrl: "https://play.unity.com/en/games/e12a5afe-6728-4678-8f45-5aaa30939804/memories-digiage-gamejam",
      sourceUrl: "https://github.com/cansucreates/Memories-GameJamProject",
      type: "game"
    },
    {
      id: 2,
      title: "Fix the robots!",
      description: "In this 2D adventure, players explore a handcrafted world, fix broken robots, and connect with quirky NPCs—all built using Unity’s Tilemap system as part of my journey into 2D game development.",
      image: fixtherobotsImg,
      technologies: ["Unity", "C#", "Editor Scripting", "2D"],
      demoUrl: "https://play.unity.com/en/games/8db167ee-a6de-43a5-93b2-e60c1fe50131/fix-the-robots",
      sourceUrl: "https://github.com/cansucreates/A-2D-Game",
      type: "game"
    },
    {
      id: 3,
      title: "Escape the Garden",
      description: "A turn-based 2D roguelike where the player must outsmart enemies and survive endless levels while trying to reach a distant escape point.",
      image: etgImg,
      technologies: ["Unity", "C#", "Editor Scripting", "2D", "Roguelike", "Turn-based"],
      demoUrl: "https://play.unity.com/en/games/50008ac0-f0f5-4084-aa00-a4be4f1fe085/escape-the-garden",
      sourceUrl: "https://github.com/cansucreates/A-Roguelike-Game",
      type: "game"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter || project.technologies.includes(filter));

  const uniqueTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  return (
    <section id="projects" className="projects-section py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-2xl md:text-3xl font-pixel text-center mb-12">MY PROJECTS</h2>
        
        <div className="filter-controls mb-8 flex flex-wrap items-center justify-center">
          <div className="filter-button-container">
            <button 
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <Filter size={16} className="mr-2" />
              All Projects
            </button>
          </div>
          
          <div className="filter-button-container">
            <button 
              className={`filter-button ${filter === 'game' ? 'active' : ''}`}
              onClick={() => setFilter('game')}
            >
              Games
            </button>
          </div>
          
          <div className="filter-button-container">
            <button 
              className={`filter-button ${filter === 'tool' ? 'active' : ''}`}
              onClick={() => setFilter('tool')}
            >
              Tools
            </button>
          </div>
          
          <div className="filter-button-container">
            <button 
              className={`filter-button ${filter === 'asset' ? 'active' : ''}`}
              onClick={() => setFilter('asset')}
            >
              Assets
            </button>
          </div>
          
          {uniqueTechnologies.map((tech, index) => (
            <div key={index} className="filter-button-container">
              <button 
                className={`filter-button ${filter === tech ? 'active' : ''}`}
                onClick={() => setFilter(tech)}
              >
                {tech}
              </button>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <PixelButton 
            text="View More on GitHub" 
            icon={<Github size={16} />}
            href="https://github.com/cansucreates" 
            target="_blank"
            className="bg-purple-600 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 