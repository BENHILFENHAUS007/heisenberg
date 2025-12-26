import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './stack-gallery.css';

export interface StackItem {
  id: string | number;
  image: string;
  title: string;
  description?: string;
}

export interface StackGalleryProps {
  items: StackItem[];
  className?: string;
  autoPlay?: boolean;
  autoPlayDelay?: number;
}

export const StackGallery: React.FC<StackGalleryProps> = ({
  items,
  className = '',
  autoPlay = false,
  autoPlayDelay = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + items.length) % items.length);
  };

  if (!items || items.length === 0) {
    return (
      <div className={`stack-gallery-empty ${className}`}>
        <p>No images available</p>
      </div>
    );
  }

  const current = items[currentIndex];

  return (
    <div className={`stack-gallery-wrapper ${className}`}>
      <div className="stack-gallery-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragElastic={1}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="stack-gallery-slide"
          >
            <img
              src={current.image}
              alt={current.title}
              className="stack-gallery-image"
              draggable={false}
            />
            {(current.title || current.description) && (
              <motion.div
                className="stack-gallery-caption"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {current.title && (
                  <h3 className="stack-gallery-title">{current.title}</h3>
                )}
                {current.description && (
                  <p className="stack-gallery-description">{current.description}</p>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <button
          className="stack-gallery-nav-button stack-gallery-nav-prev"
          onClick={() => paginate(-1)}
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button
          className="stack-gallery-nav-button stack-gallery-nav-next"
          onClick={() => paginate(1)}
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="stack-gallery-dots">
        {items.map((_, idx) => (
          <motion.button
            key={idx}
            className={`stack-gallery-dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="stack-gallery-dot-inner"
              animate={idx === currentIndex ? { scale: 1 } : { scale: 0.6 }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default StackGallery;
