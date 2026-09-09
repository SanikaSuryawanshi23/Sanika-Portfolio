import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Education.css';

export default function Education() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const educationList = [
    {
      degree: 'B.Tech – Computer Science & Engineering',
      institute: 'Tatyasaheb Kore Institute of Engineering and Technology, Warananagar',
      period: '2023 – 2026',
      grade: 'CGPA: 82.13%',
      side: 'left'
    },
    {
      degree: 'Diploma – Computer Science',
      institute: 'Government Residence Women Polytechnic, Tasgaon',
      period: '2021 – 2023',
      grade: 'Percentage: 84.51%',
      side: 'right'
    },
    {
      degree: 'SSC',
      institute: 'Shri. G.K. Mane Highschool, Karanje',
      period: '2020',
      grade: 'Percentage: 91.60%',
      side: 'left'
    }
  ];

  return (
    <section id="education" ref={ref} className={`section reveal ${isVisible ? 'active' : ''}`}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Learning Journey</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            An overview of my academic foundation and credentials in Computer Science.
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line-axis"></div>

          {educationList.map((edu, idx) => (
            <div 
              key={idx} 
              className={`timeline-item ${edu.side === 'left' ? 'timeline-item-left' : 'timeline-item-right'}`}
            >
              <div className="timeline-node"></div>
              
              <div className="timeline-card-content glass-card">
                <span className="timeline-year">{edu.period}</span>
                <h3 className="timeline-title">{edu.degree}</h3>
                <div className="timeline-institute">{edu.institute}</div>
                <div className="timeline-grade">
                  <GraduationCap size={16} />
                  <span>{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
