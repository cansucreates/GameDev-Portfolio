import React from 'react';
import { Clock, Calendar, ChevronRight } from 'lucide-react';
import './BlogSection.css';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "My Game Development Journey: Finding My Path",
      excerpt: "As an aspiring game developer who wants to improve every day, I’ve decided to document my learning process and share it with others who have similar interests. Since this is my first post, I’d like to talk about how my coding journey began.",
      date: "May 04, 2025",
      readTime: "3 min",
      category: "Development",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
 
  ];

  return (
    <section id="blog" className="blog-section py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-2xl md:text-3xl font-pixel text-center mb-12">GAME DEV JOURNEY</h2>
        
        <div className="journey-timeline">
          {blogPosts.map((post, index) => (
            <div key={post.id} className={`timeline-node ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
              <div className="timeline-content">
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="post-category">{post.category}</div>
                </div>
                
                <div className="post-content">
                  <h3 className="post-title font-pixel">{post.title}</h3>
                  
                  <div className="post-meta">
                    <div className="meta-item">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <p className="post-excerpt">{post.excerpt}</p>
                  
                  <a href="https://medium.com/@caysagdic/my-game-development-journey-finding-my-path-e66eee79e2b4" className="read-more">
                    <span>Read Post</span>
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://medium.com/@caysagdic" className="view-all-button">
            <span>View All Posts</span>
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;