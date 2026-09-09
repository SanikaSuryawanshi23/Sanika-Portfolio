import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Contact.css';

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  
  // Form States
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call/send message trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className={`section reveal ${isVisible ? 'active' : ''}`}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let's Build Something Together</h2>
          <p className="section-subtitle">
            If you have a role available, a project collaboration idea, or simply want to connect, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Direct Details Side */}
          <div className="contact-info-panel">
            <div>
              <h3 className="contact-info-title">Contact Channels</h3>
              <p className="contact-info-desc">
                Recruiters and hiring managers can reach me directly via email, phone, or LinkedIn. I will respond to your queries as soon as possible.
              </p>
            </div>

            <div className="contact-details-list">
              
              <div className="contact-detail-item">
                <div className="contact-detail-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-detail-label">Email Address</div>
                  <a href="mailto:sanikasuryawanshi2004@gmail.com" className="contact-detail-value">
                    sanikasuryawanshi2004@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon-wrapper">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-detail-label">Phone Number</div>
                  <a href="tel:+917558676536" className="contact-detail-value">
                    +91 7558676536
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon-wrapper">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="contact-detail-label">LinkedIn</div>
                  <a 
                    href="https://linkedin.com/in/sanika-suryawanshi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-detail-value"
                  >
                    linkedin.com/in/sanika-suryawanshi
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon-wrapper">
                  <Github size={20} />
                </div>
                <div>
                  <div className="contact-detail-label">GitHub</div>
                  <a 
                    href="https://github.com/sanika-suryawanshi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-detail-value"
                  >
                    github.com/sanika-suryawanshi
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-card glass-card">
            {submitSuccess ? (
              <div className="form-success-panel">
                <CheckCircle className="form-success-icon" size={60} />
                <h3 className="form-success-title">Message Sent!</h3>
                <p className="form-success-desc">
                  Thank you for reaching out, Sanika has received your email and will follow up shortly.
                </p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="btn btn-outline"
                  style={{ marginTop: '10px' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Name</label>
                    <input 
                      type="text" 
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="Your Name"
                    />
                    {errors.name && <span className="form-error-msg">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="your.email@domain.com"
                    />
                    {errors.email && <span className="form-error-msg">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`form-input ${errors.subject ? 'error' : ''}`}
                    placeholder="Subject Statement"
                  />
                  {errors.subject && <span className="form-error-msg">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea 
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`form-input ${errors.message ? 'error' : ''}`}
                    placeholder="Write your message here..."
                    style={{ resize: 'vertical' }}
                  />
                  {errors.message && <span className="form-error-msg">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ width: 'fit-content', marginTop: '10px' }}
                >
                  <Send size={16} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
