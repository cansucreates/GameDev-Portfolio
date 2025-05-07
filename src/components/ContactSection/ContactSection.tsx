import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import PixelButton from '../UI/PixelButton';
import SocialHub from './SocialHub';
import './ContactSection.css';
import emailjs from 'emailjs-com';


const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    
    .then(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setFormStatus('error');
    });
  
    setTimeout(() => setFormStatus('idle'), 3000);
  };
  
  

  return (
    <section id="contact" className="contact-section py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-2xl md:text-3xl font-pixel text-center mb-12">CONTACT ME</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="contact-form-container">
            <div className="message-box mb-6">
              <h3 className="font-pixel text-xl text-green-400 mb-3">SEND A MESSAGE</h3>
              <p className="text-gray-300 mb-4">Got a project in mind? Want to collaborate? Just want to say hi? Drop me a message!</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <User size={16} />
                  <span>Your Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <Mail size={16} />
                  <span>Your Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <MessageSquare size={16} />
                  <span>Your Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Hello! I'd like to discuss a project..."
                  rows={5}
                ></textarea>
              </div>
              
              <div className="submit-container">
                <PixelButton 
                  text="Send Message" 
                  icon={<Send size={16} />}
                  className="bg-purple-600 w-full"
                />
              </div>
              
              {formStatus === 'success' && (
                <div className="form-notification success">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="form-notification error">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
          
          <SocialHub />
        </div>
        
        <div className="resume-download text-center mt-12">
          <PixelButton 
            text="Download Resume" 
            href="https://drive.google.com/file/d/1k-95JCK69vL5T_XfL9JIp5RlTJ4zjBu2/view?usp=drive_link"
            className="bg-blue-500 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;