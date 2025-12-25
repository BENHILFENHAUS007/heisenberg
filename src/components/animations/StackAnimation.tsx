import React, { useState } from 'react';
import './StackAnimation.css';

interface StackAnimationProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  className?: string;
}

export const StackAnimation: React.FC<StackAnimationProps> = ({
  images,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`stack-animation-container ${className}`}>
      <div className="stack-animation-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`stack-card ${index === activeIndex ? 'active' : ''} ${
              index < activeIndex ? 'prev' : ''
            }`}
            style={{
              transform: `translateY(${(index - activeIndex) * 20}px) translateX(${(index - activeIndex) * 10}px) scale(${1 - Math.abs(index - activeIndex) * 0.05})`,
              opacity: Math.max(0, 1 - Math.abs(index - activeIndex) * 0.3),
              zIndex: images.length - Math.abs(index - activeIndex),
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="stack-image"
            />
            {image.title && (
              <div className="stack-title">{image.title}</div>
            )}
          </div>
        ))}
      </div>

      <div className="stack-controls">
        <button
          onClick={handlePrev}
          className="stack-button prev"
          aria-label="Previous image"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="stack-button next"
          aria-label="Next image"
        >
          ❯
        </button>
      </div>

      <div className="stack-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`stack-indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default StackAnimation;
