import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Experience.css';

export default function Experience() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15, triggerOnce: true });

  const experiences = [
    {
      title: 'Java Full Stack Development Student',
      company: 'QSpiders Software Training Institute',
      location: 'Pune, India',
      period: 'January 2026 – Present',
      desc: 'Currently pursuing Java Full Stack Development training with hands-on learning in Java, SQL, Manual Testing and web development.',
      skills: ['Java', 'SQL', 'Manual Testing', 'Data Structures', 'Web Development']
    },
    {
      title: 'Angular Web Development Intern',
      company: 'IGAP TECHNOLOGIES',
      location: 'Kolhapur, India',
      period: 'July 2022 – August 2022',
      desc: 'Worked as part of a team on web development activities and contributed to developing web applications.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Web Development']
    }
  ];

  return (
    <section id="experience" ref={ref} className={`section reveal ${isVisible ? 'active' : ''}`}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Professional Path</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            An overview of my structured technical training programs and industry internships.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card glass-card">
              
              <div className="experience-card-header">
                <div>
                  <h3 className="experience-job-title">{exp.title}</h3>
                  <div className="experience-company-info">
                    <span className="experience-company">{exp.company}</span>
                    <span className="experience-location">
                      <MapPin size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      {exp.location}
                    </span>
                  </div>
                </div>
                
                <span className="experience-date">{exp.period}</span>
              </div>
              
              <p className="experience-desc">{exp.desc}</p>
              
              <div>
                <h4 className="experience-skills-title">Skills Learned & Applied</h4>
                <div className="experience-skills-tags">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="experience-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
