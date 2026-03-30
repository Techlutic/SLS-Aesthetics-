import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
  className?: string;
  animated?: boolean;
  isVisible?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
  animated = false,
  isVisible = true,
}) => {
  const containerClasses = [
    'section-header',
    `section-header-${align}`,
    light ? 'section-header-light' : '',
    animated ? 'section-header-animated' : '',
    animated && isVisible ? 'active' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      {eyebrow && (
        <span className="section-eyebrow">
          {eyebrow}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      <div className="section-line"></div>
      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
