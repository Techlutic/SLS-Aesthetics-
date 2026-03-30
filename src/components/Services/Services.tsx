import React from 'react';
import SectionHeader from '../UI/SectionHeader';
import useReveal from '../../hooks/useReveal';
import './Services.css';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M32 8c-8 0-14 6-14 14s6 14 14 14 14-6 14-14-6-14-14-14z"/>
        <path d="M32 36v20"/>
        <path d="M24 44h16"/>
        <circle cx="32" cy="22" r="4"/>
      </svg>
    ),
    title: 'Anti-Wrinkle Injections',
    description: 'Smooth fine lines and wrinkles with precision treatments that refresh your appearance while maintaining natural expression.',
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M32 12c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z"/>
        <path d="M26 28c0 3.3 2.7 6 6 6s6-2.7 6-6"/>
        <path d="M32 34v8"/>
        <circle cx="24" cy="24" r="2"/>
        <circle cx="40" cy="24" r="2"/>
      </svg>
    ),
    title: 'Dermal Fillers',
    description: 'Restore volume and contour with premium hyaluronic acid fillers for natural-looking enhancement and rejuvenation.',
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M32 14c-10 0-16 8-16 16 0 12 16 22 16 22s16-10 16-22c0-8-6-16-16-16z"/>
        <path d="M26 32h12"/>
        <path d="M32 26v12"/>
      </svg>
    ),
    title: 'Lip Enhancement',
    description: 'Achieve beautifully defined, fuller lips with our expert lip filler treatments tailored to your unique features.',
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 16h24v32H20z"/>
        <path d="M28 24h8"/>
        <path d="M28 32h8"/>
        <path d="M28 40h8"/>
        <circle cx="32" cy="52" r="4"/>
        <path d="M32 48v-4"/>
      </svg>
    ),
    title: 'Skin Boosters',
    description: 'Deeply hydrate and revitalize your skin from within for a luminous, healthy glow that lasts.',
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="32" cy="32" rx="20" ry="12"/>
        <path d="M12 32c0 8 9 16 20 16s20-8 20-16"/>
        <path d="M32 20v-8"/>
        <path d="M24 22l-4-6"/>
        <path d="M40 22l4-6"/>
      </svg>
    ),
    title: 'Profhilo',
    description: 'The revolutionary bio-remodeling treatment that improves skin tone, texture, and hydration with remarkable results.',
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="16" y="12" width="32" height="40" rx="4"/>
        <path d="M24 20h16"/>
        <path d="M24 28h16"/>
        <path d="M24 36h10"/>
        <circle cx="44" cy="48" r="8"/>
        <path d="M44 44v8"/>
        <path d="M40 48h8"/>
      </svg>
    ),
    title: 'Chemical Peels',
    description: 'Reveal fresh, radiant skin with medical-grade peels that address pigmentation, acne, and signs of aging.',
  },
];

const Services: React.FC = () => {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
  const [gridRef, gridVisible] = useReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="treatments" className="services section">
      <div className="container">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="What We Offer"
            title="Our Treatments"
            subtitle="Tailored aesthetic solutions designed to enhance your natural beauty and boost your confidence"
            align="center"
            animated
            isVisible={headerVisible}
          />
        </div>

        <div
          ref={gridRef}
          className={`services-grid ${gridVisible ? 'active' : ''}`}
        >
          {services.map((service, index) => (
            <article
              key={service.id}
              className="service-card"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#booking" className="service-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
