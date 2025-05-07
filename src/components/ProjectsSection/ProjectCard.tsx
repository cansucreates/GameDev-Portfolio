import React from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';
import './ProjectCard.css';

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

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-type">{project.type}</div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title font-pixel">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
          
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              <Github size={16} />
              <span>Source</span>
            </a>
          )}
          
          {project.type === 'game' && (
            <div className="project-badge">
              <Award size={16} />
              <span>Featured</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;