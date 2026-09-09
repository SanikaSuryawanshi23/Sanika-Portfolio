import React from 'react';
import { Award, ShieldCheck, Compass } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Certifications.css';

export default function Certifications() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  const certificationsList = [
    {
      title: 'Certificate in Java',
      issuer: 'Technical Training Academy',
      type: 'core'
    },
    {
      title: 'Programming with Java',
      issuer: 'Advanced Core Training',
      type: 'core'
    },
    {
      title: 'Database Connectivity',
      issuer: 'SQL & Database Training',
      type: 'core'
    },
    {
      title: 'AI/ML Certification',
      issuer: 'EduSkills National Internship Portal',
      type: 'ml'
    },
    {
      title: 'Git & GitHub Workshop',
      issuer: 'T-LUG (TKIET Linux User Group)',
      type: 'workshop'
    }
  ];

  return (
    <section id="certifications" ref={ref} className={`section reveal ${isVisible ? 'active' : ''}`}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">Certifications & Workshops</h2>
          <p className="section-subtitle">
            A selection of technical course certificates, training verifications, and workshop credentials.
          </p>
        </div>

        <div className="certifications-grid">
          {certificationsList.map((cert, idx) => (
            <div key={idx} className="certification-card glass-card">
              <div className="certification-icon-wrapper">
                {cert.type === 'ml' ? (
                  <Compass size={22} />
                ) : cert.type === 'workshop' ? (
                  <ShieldCheck size={22} />
                ) : (
                  <Award size={22} />
                )}
              </div>
              
              <h3 className="certification-title">{cert.title}</h3>
              <div className="certification-issuer">{cert.issuer}</div>
              
              <div className="certification-meta font-mono">
                <span>Verified Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
