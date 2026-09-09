import React from 'react';
import { Award, GraduationCap, Briefcase, Code, CheckCircle2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './About.css';

export default function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15, triggerOnce: true });

  const stats = [
    { number: '82.13%', label: 'B.Tech CSE', sub: 'TKIET Warananagar' },
    { number: '84.51%', label: 'Diploma in CS', sub: 'GRWP Tasgaon' },
    { number: '91.60%', label: 'SSC', sub: 'Shri. G.K. Mane Highschool' },
    { number: '3+', label: 'Major Projects', sub: 'AI, gesture-control, web' }
  ];

  return (
    <section id="about" ref={ref} className={`section reveal ${isVisible ? 'active' : ''}`}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Profile</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A developer who transforms code into scalable solutions and places high value on quality software design and analysis.
          </p>
        </div>

        <div className="about-grid">
          
          <div className="about-text">
            <p className="about-bio">
              I am a Computer Science Engineering graduate with a strong foundation in programming languages and modern technologies. I have built technical competencies in <strong>Java</strong>, <strong>Python</strong>, <strong>SQL</strong>, <strong>React.js</strong>, and <strong>manual software testing</strong>.
            </p>
            <p className="about-bio">
              With academic training in Java Full Stack development and direct internship experience developing responsive angular web portals, I bring a practical, problem-solving mindset to both frontend development and QA/testing workflows.
            </p>

            <ul className="about-highlights">
              <li className="about-highlight-item">
                <CheckCircle2 size={18} className="about-highlight-icon" />
                <div>
                  <span className="about-highlight-title">Full Stack Training:</span> Pursuing Java Full Stack Development training at QSpiders Software Training Institute, Pune.
                </div>
              </li>
              <li className="about-highlight-item">
                <CheckCircle2 size={18} className="about-highlight-icon" />
                <div>
                  <span className="about-highlight-title">QA & Quality Orientation:</span> Acquired rigorous hands-on training in Manual Testing principles, test suite drafting, and quality validation.
                </div>
              </li>
              <li className="about-highlight-item">
                <CheckCircle2 size={18} className="about-highlight-icon" />
                <div>
                  <span className="about-highlight-title">Internship Experience:</span> Gained practical team experience as an Angular Web Development intern at IGAP Technologies, Kolhapur.
                </div>
              </li>
            </ul>
          </div>

          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sublabel">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}
