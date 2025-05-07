import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import BlogSection from './components/BlogSection/BlogSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Cansu Aysagdic - Game Developer Portfolio";
    
    // Add custom cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    };
    
    document.addEventListener('mousemove', updateCursor);
    
    // Add hover effect to links and buttons
    const handleMouseEnter = () => {
      cursor.classList.add('cursor-enlarged');
    };
    
    const handleMouseLeave = () => {
      cursor.classList.remove('cursor-enlarged');
    };
    
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .social-item, .project-card, .filter-button');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorDot);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;