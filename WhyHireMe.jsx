import React from 'react';
import { Target, Cpu, CheckSquare, RefreshCw, Download } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './WhyHireMe.css';

export default function WhyHireMe() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const offerCards = [
    {
      title: 'Problem Solving',
      desc: 'Strong foundation in programming paradigms and data structures.',
      icon: <Target size={20} />
    },
    {
      title: 'Full Stack Foundation',
      desc: 'Hands-on learning in Java, SQL, and modern frontend web technologies.',
      icon: <Cpu size={20} />
    },
    {
      title: 'Testing Mindset',
      desc: 'Knowledge of Manual Testing, test case design, and software quality validation concepts.',
      icon: <CheckSquare size={20} />
    },
    {
      title: 'Continuous Learning',
      desc: 'Actively developing skills across software engineering frameworks and emerging technologies.',
      icon: <RefreshCw size={20} />
    }
  ];

  const keyCourses = [
    'Java',
    'Data Structures',
    'SQL',
    'Manual Testing',
    'Operating System'
  ];

  return (
    <section id="why-hire-me" ref={ref} className={`section reveal ${isVisible ? 'active' : ''}`}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Value Proposition</span>
          <h2 className="section-title">What I Bring</h2>
          <p className="section-subtitle">
            A combination of solid engineering coursework, full-stack training, and automated quality assurance awareness.
          </p>
        </div>

        <div className="hire-section-grid">
          
          {/* Four value cards */}
          <div className="bring-cards-grid">
            {offerCards.map((card, idx) => (
              <div key={idx} className="bring-card glass-card">
                <div className="bring-card-icon-wrapper">
                  {card.icon}
                </div>
                <h3 className="bring-card-title">{card.title}</h3>
                <p className="bring-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Key Courses Taken */}
          <div className="courses-container">
            <h3 className="courses-title">Key Courses Taken</h3>
            <div className="courses-tags-list">
              {keyCourses.map((course) => (
                <span key={course} className="course-tag">
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Dedicated Resume Section */}
          <div className="resume-cta-block glass-card">
            <h3 className="resume-cta-title">Want to know more about my experience?</h3>
            <p className="resume-cta-desc">
              Download my complete resume to inspect my coursework details, certificates, and project timelines.
            </p>
            <a 
              href="/Sanika_Suryawanshi_Resume.pdf" 
              download="Sanika_Suryawanshi_Resume.pdf" 
              className="btn btn-primary"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
