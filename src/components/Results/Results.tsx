import React, { useState } from 'react';
import SectionHeader from '../UI/SectionHeader';
import useReveal from '../../hooks/useReveal';
import './Results.css';

interface GalleryItem {
  id: number;
  image: string;
  treatment: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop',
    treatment: 'Lip Enhancement',
    description: 'Natural volume and definition',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop',
    treatment: 'Skin Rejuvenation',
    description: 'Radiant, youthful glow',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop',
    treatment: 'Anti-Wrinkle',
    description: 'Smooth, refreshed appearance',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2069&auto=format&fit=crop',
    treatment: 'Dermal Fillers',
    description: 'Restored facial volume',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2069&auto=format&fit=crop',
    treatment: 'Profhilo',
    description: 'Improved skin texture',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2080&auto=format&fit=crop',
    treatment: 'Skin Boosters',
    description: 'Deep hydration results',
  },
];

const Results: React.FC = () => {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
  const [gridRef, gridVisible] = useReveal<HTMLDivElement>({ threshold: 0.05 });
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="results" className="results section">
      <div className="container">
        <div ref={headerRef}>
          <SectionHeader
            eyebrow="Results"
            title="See the Transformation"
            subtitle="Real results from our satisfied clients showcasing the artistry of our treatments"
            align="center"
            animated
            isVisible={headerVisible}
          />
        </div>

        <div
          ref={gridRef}
          className={`results-grid ${gridVisible ? 'active' : ''}`}
        >
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(item)}
            >
              <div className="gallery-image">
                <img
                  src={item.image}
                  alt={item.treatment}
                  loading="lazy"
                />
              </div>
              <div className="gallery-overlay">
                <span className="gallery-treatment">{item.treatment}</span>
                <span className="gallery-description">{item.description}</span>
                <span className="gallery-view">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" aria-label="Close lightbox">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.treatment}
            />
            <div className="lightbox-info">
              <h4>{selectedImage.treatment}</h4>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Results;
