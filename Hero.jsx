import React from 'react';
import { Mail, ArrowRight, Download, Terminal as TerminalIcon } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import Terminal from './Terminal';
import './Hero.css';

export default function Hero() {
  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Floating Developer/Syntax Elements in Background */}
      <span className="floating-decor hero-decor-1">&lt;code&gt;</span>
      <span className="floating-decor hero-decor-2">&#123; Java &#125;</span>
      <span className="floating-decor hero-decor-3">&lt;/&gt;</span>
      <span className="floating-decor hero-decor-4">&#123; React &#125;</span>
      <div className="floating-decor" style={{ top: '65%', left: '15%', opacity: 0.15, fontSize: '1.2rem', fontFamily: 'monospace' }}>SQL</div>
      <div className="floating-decor" style={{ top: '45%', right: '22%', opacity: 0.15, fontSize: '1.2rem', fontFamily: 'monospace' }}>Python</div>

      <div className="container">
        <div className="hero-grid">
          
          <div className="hero-content">
            {/* Status Badge */}
            <div className="badge">
              <span className="badge-pulse-dot"></span>
              Open to Software Development & QA Opportunities
            </div>
            
            <div className="hero-title-prefix">
              <TerminalIcon size={18} />
              <span>Hello, my name is</span>
            </div>
            
            <h1 className="hero-name">Sanika Suryawanshi</h1>
            
            <p className="hero-headline">
              Software Developer | Java | React.js | Python | SQL
            </p>
            
            <p className="hero-desc">
              Computer Science Engineering graduate with hands-on experience in Java, Python, SQL, React.js, web development, and software testing. Passionate about building practical applications and solving real-world problems.
            </p>
            
            {/* Call to Actions */}
            <div className="hero-ctas">
              <button 
                onClick={() => handleScrollTo('#projects')} 
                className="btn btn-primary"
              >
                View My Projects
                <ArrowRight size={18} />
              </button>
              
              <a 
                href="/Sanika_Suryawanshi_Resume.pdf" 
                download="Sanika_Suryawanshi_Resume.pdf" 
                className="btn btn-secondary"
              >
                <Download size={18} />
                Download Resume
              </a>
              
              <button 
                onClick={() => handleScrollTo('#contact')} 
                className="btn btn-outline"
              >
                Contact Me
              </button>
            </div>
            
            {/* Social profiles */}
            <div className="hero-socials">
              <a 
                href="https://linkedin.com/in/sanika-suryawanshi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/sanika-suryawanshi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-social-link"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:sanikasuryawanshi2004@gmail.com" 
                className="hero-social-link"
                aria-label="Email Address"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Visual slot - can embed the terminal simulator component here */}
          <div className="hero-visual" style={{ width: '100%' }}>
            <Terminal />
          </div>
          
        </div>
      </div>
    </section>
  );
}
