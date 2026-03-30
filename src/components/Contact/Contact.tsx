import React, { useState } from 'react';
import SectionHeader from '../UI/SectionHeader';
import Button from '../UI/Button';
import useReveal from '../../hooks/useReveal';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  date: string;
  message: string;
}

const treatments = [
  'Anti-Wrinkle Injections',
  'Dermal Fillers',
  'Lip Enhancement',
  'Skin Boosters',
  'Profhilo',
  'Chemical Peels',
  'Other / Not Sure',
];

const Contact: React.FC = () => {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
  const [formRef, formVisible] = useReveal<HTMLDivElement>();
  const [infoRef, infoVisible] = useReveal<HTMLDivElement>();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    treatment: '',
    date: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      treatment: '',
      date: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="Get in Touch"
            title="Book Your Consultation"
            subtitle="Fill out the form below and we'll get back to you within 24 hours"
            align="center"
            animated
            isVisible={headerVisible}
          />
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div
            ref={formRef}
            className={`contact-form-wrapper reveal-left ${formVisible ? 'active' : ''}`}
          >
            {isSubmitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3>Thank You!</h3>
                <p>We've received your enquiry and will be in touch within 24 hours.</p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label htmlFor="name">Full Name *</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label htmlFor="email">Email Address *</label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                  <div className="form-group">
                    <select
                      id="treatment"
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Treatment</option>
                      {treatments.map((treatment) => (
                        <option key={treatment} value={treatment}>
                          {treatment}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="treatment" className="select-label">Treatment Interest *</label>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder=" "
                  />
                  <label htmlFor="date">Preferred Date</label>
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder=" "
                  />
                  <label htmlFor="message">Your Message</label>
                </div>

                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </Button>

                <p className="form-note">
                  By submitting this form, you agree to our privacy policy. 
                  We will never share your information.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div
            ref={infoRef}
            className={`contact-info reveal-right ${infoVisible ? 'active' : ''}`}
          >
            <div className="info-card">
              <h3 className="info-title">Contact Information</h3>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h4>Location</h4>
                    <p>Manchester, United Kingdom</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <a href="tel:+441234567890">+44 123 456 7890</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <a href="mailto:info@slsmedicalaesthetics.co.uk">info@slsmedicalaesthetics.co.uk</a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h4>Opening Hours</h4>
                    <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                    <p>Sat: 10:00 AM - 5:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="info-social">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/slsmedicalaesthetics"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="social-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/slsmedicalaesthetics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="social-link"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
