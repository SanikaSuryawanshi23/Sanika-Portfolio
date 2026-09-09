import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky transparent states
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section active scroll positions
      const scrollPosition = window.scrollY + 160;
      for (const link of navLinks) {
        const targetElement = document.querySelector(link.href);
        if (targetElement) {
          const top = targetElement.offsetTop;
          const height = targetElement.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.replace('#', ''));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" onClick={(e) => handleClick(e, '#home')} className="nav-logo">
          <span className="nav-logo-symbol">&lt;</span>
          Sanika Suryawanshi
          <span className="nav-logo-symbol">/&gt;</span>
        </a>

        {/* Desktop nav links */}
        <ul className="nav-links">
          {navLinks.map((link) => {
            const sectionName = link.href.replace('#', '');
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`nav-link ${activeSection === sectionName ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu trigger button */}
        <button
          className="nav-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile drawer menu */}
        <div className={`nav-mobile-menu ${isOpen ? 'open' : ''}`}>
          <ul className="nav-mobile-links">
            {navLinks.map((link) => {
              const sectionName = link.href.replace('#', '');
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`nav-mobile-link ${activeSection === sectionName ? 'active' : ''}`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
