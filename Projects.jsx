import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle2, Bot, Layers, Sliders } from 'lucide-react';
import { Github } from './SocialIcons';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Projects.css';

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const [expandedId, setExpandedId] = useState(null);

  const projectsData = [
    {
      id: 0,
      title: 'Intelligent Project Guidance System Using Generative AI',
      period: 'August 2025 – June 2026',
      description: 'An AI-powered platform that provides personalized project topic recommendations, structured project plans, and research paper analysis to help engineering students successfully develop projects.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Google Gemini API'],
      icon: <Bot size={44} style={{ color: '#fff' }} />,
      classVisual: 'visual-ai',
      classGraphic: 'graphic-ai',
      github: '#', // Placeholder link
      demo: '#',   // Placeholder link
      features: [
        'Custom project recommendations based on engineering student profiles, interests, and skill levels.',
        'Structured roadmaps detailing objectives, tasks, resources, and timelines for selected topics.',
        'Research paper parsing and synthesis via Google Gemini API to extract key methodologies and insights.',
        'Full conversational chatbot interface helping students refine their project definitions.'
      ]
    },
    {
      id: 1,
      title: 'Smart Placement & Recruitment Management System',
      period: 'August 2024',
      description: 'A web-based placement management system designed to manage student registrations, company details and placement activities while simplifying the recruitment process.',
      tech: ['Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      icon: <Layers size={44} style={{ color: '#fff' }} />,
      classVisual: 'visual-placement',
      classGraphic: 'graphic-placement',
      github: '#', // Placeholder link
      demo: '#',   // Placeholder link
      features: [
        'Consolidated dashboard for students to register, build profiles, and track jobs.',
        'Company portal enabling recruiters to post new drives, set criteria, and view applicant logs.',
        'Administrator console providing centralized stats on placed ratios, interviews, and partner firms.',
        'Automated eligibility filters verifying student GPAs against recruiter limits.'
      ]
    },
    {
      id: 2,
      title: 'Virtually Controlling Computer Using Hand Gesture',
      period: 'January 2025 – June 2025',
      description: 'A gesture-based computer control system using hand movements, hand tracking and gesture recognition to control computer operations.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Screen-Brightness-Control'],
      icon: <Sliders size={44} style={{ color: '#fff' }} />,
      classVisual: 'visual-gesture',
      classGraphic: 'graphic-gesture',
      github: '#', // Placeholder link
      demo: '#',   // Placeholder link
      features: [
        'Live video capture interface identifying 21 distinct hand joint points using MediaPipe.',
        'Cursor tracking and coordinate conversion allowing precise cursor movement across resolutions.',
        'Gesture command mapping: finger tip distances control volume, clicks, scroll actions, and brightness levels.',
        'High frame-rate calculation (30+ FPS) built to optimize runtime processing overhead.'
      ]
    }
  ];

  const toggleDetails = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="projects" ref={ref} className={`section reveal ${isVisible ? 'active' : ''}`}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            An overview of the applications I have developed, focusing on machine learning integrations, system management, and computer vision.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div key={project.id} className="glass-card" style={{ display: 'block' }}>
                <div className="project-card">
                  
                  {/* Left Graphic Grid */}
                  <div className={`project-visual ${project.classVisual}`}>
                    <div className="visual-pattern"></div>
                    <div className={`project-graphic-base ${project.classGraphic}`}>
                      {project.icon}
                    </div>
                  </div>

                  {/* Right Card Content */}
                  <div className="project-info">
                    <div>
                      <div className="project-date">{project.period}</div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                    </div>

                    <div>
                      <div className="project-tech-tags">
                        {project.tech.map((t) => (
                          <span key={t} className="project-tech-tag">{t}</span>
                        ))}
                      </div>

                      <div className="project-actions">
                        <div className="project-links">
                          <a 
                            href={project.github} 
                            className="project-link-btn"
                            onClick={(e) => project.github === '#' && e.preventDefault()}
                          >
                            <Github size={16} />
                            Code
                          </a>
                          <a 
                            href={project.demo} 
                            className="project-link-btn"
                            onClick={(e) => project.demo === '#' && e.preventDefault()}
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        </div>

                        <button 
                          onClick={() => toggleDetails(project.id)}
                          className="project-details-toggle"
                        >
                          {isExpanded ? (
                            <>
                              Hide Details
                              <ChevronUp size={16} />
                            </>
                          ) : (
                            <>
                              View Details
                              <ChevronDown size={16} />
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Expanding Details Drawer */}
                <div className={`project-drawer ${isExpanded ? 'open' : ''}`}>
                  <div className="project-drawer-content">
                    <h4 className="project-features-title">Key System Features</h4>
                    <ul className="project-features-list">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="project-feature-item">
                          <CheckCircle2 size={16} className="project-feature-icon" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
