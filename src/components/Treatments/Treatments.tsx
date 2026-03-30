'use client';

import React, { memo } from 'react';
import SectionHeader from '../UI/SectionHeader';
import Button from '../UI/Button';
import useReveal from '../../hooks/useReveal';
import './Treatments.css';

interface Treatment {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  startingPrice: string;
  image: string;
  slug: string;
  duration?: string;
  popularity?: number;
}

const treatments: Treatment[] = [
  {
    id: 1,
    name: 'Lip Enhancement',
    description: 'Achieve beautifully defined, natural-looking lips with our expert lip filler treatments. Using premium hyaluronic acid fillers, we enhance your lips while maintaining balance and proportion.',
    benefits: ['Natural-looking results', 'Minimal downtime', 'Long-lasting effects'],
    startingPrice: '£200',
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=2070&auto=format&fit=crop',
    slug: 'lip-enhancement',
    duration: '30-45 mins',
    popularity: 95,
  },
  {
    id: 2,
    name: 'Anti-Wrinkle Treatment',
    description: 'Smooth away fine lines and wrinkles with precision injections that refresh your appearance. Our treatments target specific areas to reduce signs of aging while preserving your natural expressions.',
    benefits: ['Quick treatment time', 'No recovery needed', 'Subtle, natural results'],
    startingPrice: '£150',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    slug: 'anti-wrinkle-treatment',
    duration: '15-20 mins',
    popularity: 90,
  },
  {
    id: 3,
    name: 'Dermal Fillers',
    description: 'Restore volume and contour to your face with our advanced dermal filler treatments. Perfect for addressing age-related volume loss and enhancing facial features naturally.',
    benefits: ['Instant results', 'Customizable treatment', 'FDA approved products'],
    startingPrice: '£250',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
    slug: 'dermal-fillers',
    duration: '45-60 mins',
    popularity: 88,
  },
];

// Check icon component
const CheckIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 16 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

// Clock icon component
const ClockIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const Treatments: React.FC = () => {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();

  return (
    <section className="treatments-featured section" id="treatments">
      <div className="container">
        <div 
          ref={headerRef}
          className={`treatments-header ${headerVisible ? 'animate-in' : ''}`}
        >
          <SectionHeader
            eyebrow="Featured Treatments"
            title="Popular Procedures"
            subtitle="Discover our most sought-after treatments designed to enhance your natural beauty"
            align="center"
            animated
            isVisible={headerVisible}
          />
        </div>

        <div className="treatments-list">
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              reverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TreatmentCardProps {
  treatment: Treatment;
  reverse?: boolean;
  index: number;
}

const TreatmentCard: React.FC<TreatmentCardProps> = memo(({ 
  treatment, 
  reverse = false, 
  index 
}) => {
  const [ref, isVisible] = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`treatment-card ${reverse ? 'reverse' : ''} ${isVisible ? 'active' : ''}`}
      style={{ 
        transitionDelay: `${index * 0.1}s`,
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="treatment-image">
        <div className="image-wrapper">
          <img
            src={treatment.image}
            alt={treatment.name}
            loading={index === 0 ? 'eager' : 'lazy'}
            className="treatment-img"
            onLoad={(e) => {
              e.currentTarget.classList.add('loaded');
            }}
          />
          {treatment.popularity && (
            <div className="popularity-badge">
              <span>{treatment.popularity}%</span>
              <small>Popular</small>
            </div>
          )}
          <div className="image-overlay" />
        </div>
      </div>
      
      <div className="treatment-content">
        <div className="treatment-info">
          <div className="treatment-header">
            <h3 className="treatment-name">{treatment.name}</h3>
            {treatment.duration && (
              <span className="treatment-duration">
                <ClockIcon size={14} />
                {treatment.duration}
              </span>
            )}
          </div>
          
          <p className="treatment-description">{treatment.description}</p>
          
          <ul className="treatment-benefits">
            {treatment.benefits.map((benefit, benefitIndex) => (
              <li 
                key={benefitIndex}
                style={{ transitionDelay: `${0.1 + (benefitIndex * 0.05)}s` }}
              >
                <CheckIcon className="check-icon" size={16} />
                {benefit}
              </li>
            ))}
          </ul>
          
          <div className="treatment-footer">
            <div className="treatment-price">
              <span className="price-label">Starting from</span>
              <span className="price-value">{treatment.startingPrice}</span>
            </div>
            <Button 
              href={`#booking?treatment=${treatment.slug}`}
              className="treatment-cta"
            >
              Book This Treatment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

TreatmentCard.displayName = 'TreatmentCard';

export default Treatments;