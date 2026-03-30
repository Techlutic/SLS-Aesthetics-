import React from 'react';
import Button from '../UI/Button';
import useReveal from '../../hooks/useReveal';
import './Booking.css';

const Booking: React.FC = () => {
  const [ref, isVisible] = useReveal<HTMLElement>();

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="booking"
      ref={ref}
      className={`booking ${isVisible ? 'active' : ''}`}
    >
      <div className="booking-background">
        <div className="booking-overlay"></div>
      </div>
      
      <div className="container">
        <div className="booking-content">
          <span className="booking-eyebrow">Begin Your Journey</span>
          <h2 className="booking-title">
            Ready to Begin Your<br />
            <span className="title-accent">Transformation?</span>
          </h2>
          <p className="booking-subtitle">
            Book your complimentary consultation today and take the first step 
            towards enhancing your natural beauty with confidence.
          </p>
          
          <div className="booking-buttons">
            <Button
              size="lg"
              onClick={handleScrollToContact}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              }
            >
              Book Free Consultation
            </Button>
          </div>
          
          <div className="booking-trust">
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>No obligation</span>
            </div>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Expert advice</span>
            </div>
            <div className="trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Tailored plan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
