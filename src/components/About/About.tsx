import React from 'react';
import useReveal from '../../hooks/useReveal';
import './About.css';

const trustPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    title: 'Qualified Medical Professionals',
    description: 'All treatments performed by trained medical practitioners',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Premium FDA-Approved Products',
    description: 'Only the highest quality, safe products are used',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'Personalized Treatment Plans',
    description: 'Tailored approach for your unique aesthetic goals',
  },
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5000+', label: 'Happy Clients' },
  { value: '15+', label: 'Treatments Available' },
];

const About: React.FC = () => {
  const [imageRef, imageVisible] = useReveal<HTMLDivElement>();
  const [contentRef, contentVisible] = useReveal<HTMLDivElement>();
  const [statsRef, statsVisible] = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          {/* Image Column */}
          <div
            ref={imageRef}
            className={`about-image-wrapper reveal-left ${imageVisible ? 'active' : ''}`}
          >
            <div className="about-image">
              <img
                src="/images/about-clinic.jpg"
                alt="SLS Medical Aesthetics clinic interior"
                loading="lazy"
              />
            </div>
            <div className="about-image-accent"></div>
          </div>

          {/* Content Column */}
          <div
            ref={contentRef}
            className={`about-content reveal-right ${contentVisible ? 'active' : ''}`}
          >
            <span className="about-eyebrow">About Us</span>
            <h2 className="about-title">
              Dedicated to Your<br />
              <span className="title-accent">Confidence</span>
            </h2>
            <div className="about-line"></div>
            <p className="about-description">
              At SLS Medical Aesthetics, we believe that everyone deserves to feel 
              confident in their own skin. Our team of qualified medical professionals 
              combines expertise with artistry to deliver natural-looking results that 
              enhance your unique features.
            </p>
            <p className="about-description">
              We take pride in providing a luxurious, comfortable environment where 
              you can relax knowing you're in safe, experienced hands. Every treatment 
              is tailored to your individual needs and aesthetic goals.
            </p>

            {/* Trust Points */}
            <div className="trust-points">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="trust-point"
                  style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="trust-icon">{point.icon}</div>
                  <div className="trust-text">
                    <h4 className="trust-title">{point.title}</h4>
                    <p className="trust-description">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          ref={statsRef}
          className={`about-stats ${statsVisible ? 'active' : ''}`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
