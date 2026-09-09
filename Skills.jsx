import React from 'react';
import { Code2, Globe, Bug, Library, Wrench, Monitor } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Skills.css';

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15, triggerOnce: true });

  const skillGroups = [
    {
      title: 'Programming',
      icon: <Code2 className="skills-category-icon" size={22} />,
      class: 'programming',
      skills: ['Java', 'Python', 'SQL']
    },
    {
      title: 'Web Development',
      icon: <Globe className="skills-category-icon" size={22} />,
      class: 'webdev',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js']
    },
    {
      title: 'QA & Testing',
      icon: <Bug className="skills-category-icon" size={22} />,
      class: 'testing',
      skills: ['Manual Testing', 'Test Case Design', 'Defect Tracking']
    },
    {
      title: 'Libraries & Frameworks',
      icon: <Library className="skills-category-icon" size={22} />,
      class: 'libs',
      skills: ['Pandas', 'NumPy', 'scikit-learn', 'Matplotlib']
    },
    {
      title: 'Tools & Version Control',
      icon: <Wrench className="skills-category-icon" size={22} />,
      class: 'tools',
      skills: ['Git', 'GitHub', 'Jupyter Notebook', 'VS Code', 'Google Colab', 'Notepad++']
    },
    {
      title: 'Operating Systems',
      icon: <Monitor className="skills-category-icon" size={22} />,
      class: 'os',
      skills: ['Linux', 'Windows']
    }
  ];

  return (
    <section id="skills" ref={ref} className={`section reveal ${isVisible ? 'active' : ''}`}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive list of technologies, frameworks, and developer tools I have trained in and worked with.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, idx) => (
            <div key={idx} className={`skills-category-card glass-card ${group.class}`}>
              <div className="skills-category-header">
                {group.icon}
                <h3 className="skills-category-title">{group.title}</h3>
              </div>
              
              <div className="skills-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
