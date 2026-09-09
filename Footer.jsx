import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">Sanika Suryawanshi</div>
        <p className="footer-subtitle">
          Software Developer | Java | React.js | Python | SQL
        </p>
        
        <div className="footer-socials">
          <a 
            href="https://linkedin.com/in/sanika-suryawanshi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="https://github.com/sanika-suryawanshi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-link"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a 
            href="mailto:sanikasuryawanshi2004@gmail.com" 
            className="footer-social-link"
            aria-label="Email Address"
          >
            <Mail size={18} />
          </a>
        </div>
        
        <div className="footer-divider"></div>
        
        <p className="footer-copyright">
          &copy; 2026 Sanika Suryawanshi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
