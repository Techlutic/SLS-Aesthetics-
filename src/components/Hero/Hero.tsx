import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import './Hero.css';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after a brief delay
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-container">
        <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
          <span className="hero-eyebrow">Premium Aesthetics</span>
          <h1 className="hero-title">
            Enhance Your<br />
            <span className="hero-title-accent">Natural Beauty</span>
          </h1>
          <p className="hero-subtitle">
            Expert aesthetic treatments delivered by qualified medical professionals 
            in a luxurious, safe environment. Your confidence is our priority.
          </p>
          <div className="hero-buttons">
            <Button
              size="lg"
              onClick={() => handleScrollToSection('#booking')}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              }
            >
              Book Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="btn-light"
              onClick={() => handleScrollToSection('#treatments')}
            >
              Our Treatments
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`hero-scroll ${isLoaded ? 'loaded' : ''}`}>
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-line">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
