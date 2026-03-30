import React, { useState, useEffect, useCallback } from 'react';
import SectionHeader from '../UI/SectionHeader';
import useReveal from '../../hooks/useReveal';
import './Testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  treatment: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah M.',
    treatment: 'Lip Enhancement',
    text: 'Absolutely thrilled with my results! The team made me feel so comfortable and the results are so natural. I\'ve had so many compliments and no one can tell I\'ve had anything done - just that I look refreshed.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jennifer L.',
    treatment: 'Anti-Wrinkle Treatment',
    text: 'I was nervous about my first treatment but the staff were incredibly professional and put me at ease. The results are subtle yet transformative. I look like myself, just more rested and youthful.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma R.',
    treatment: 'Profhilo',
    text: 'The best decision I ever made! My skin has never looked better. The hydration and glow I\'ve achieved with Profhilo is incredible. The clinic is beautiful and the care is exceptional.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Charlotte K.',
    treatment: 'Dermal Fillers',
    text: 'I\'ve been coming to SLS for over two years now and wouldn\'t go anywhere else. The attention to detail and personalized approach means I always get exactly the results I\'m looking for.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
  const [contentRef, contentVisible] = useReveal<HTMLDivElement>();

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`star ${i < rating ? 'filled' : ''}`}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={i < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <section className="testimonials section">
      <div className="container">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Clients Say"
            subtitle="Real experiences from those who have trusted us with their aesthetic journey"
            align="center"
            animated
            isVisible={headerVisible}
          />
        </div>

        <div
          ref={contentRef}
          className={`testimonials-wrapper ${contentVisible ? 'active' : ''}`}
        >
          {/* Quote Mark */}
          <div className="quote-mark">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
          </div>

          {/* Testimonial Slider */}
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="testimonial-text">
                  "{testimonial.text}"
                </blockquote>
                <div className="testimonial-author">
                  <span className="author-name">{testimonial.name}</span>
                  <span className="author-treatment">{testimonial.treatment}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
