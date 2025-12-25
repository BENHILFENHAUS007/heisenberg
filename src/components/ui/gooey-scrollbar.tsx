import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface GooeyScrollbarProps {
  className?: string;
  color?: string;
}

export const GooeyScrollbar: React.FC<GooeyScrollbarProps> = ({
  className = '',
  color = '#3b82f6'
}) => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      {/* SVG Filter for gooey effect */}
      <svg className="hidden">
        <defs>
          <filter id="gooey-scrollbar">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Scrollbar container */}
      <div className={`fixed right-0 top-0 h-full w-2 z-50 pointer-events-none ${className}`}>
        {/* Background track */}
        <motion.div
          className="absolute right-0 top-0 w-full h-full bg-gradient-to-b from-gray-800/30 to-gray-900/30"
          animate={{
            opacity: isScrolling ? 0.8 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Gooey scroll indicator */}
        <motion.div
          className="absolute right-0 top-0 w-full origin-top"
          style={{
            scaleY,
            filter: 'url(#gooey-scrollbar)',
          }}
        >
          {/* Main indicator bar */}
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(180deg, ${color}, ${color}dd)`,
              boxShadow: `0 0 20px ${color}80, inset 0 0 20px ${color}40`,
            }}
          />
          
          {/* Gooey blobs */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 rounded-full"
              style={{
                backgroundColor: color,
                left: '-300%',
                top: `${i * 20}%`,
              }}
              animate={{
                x: [0, 10, 0],
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        {/* Particles effect */}
        {isScrolling && (
          <motion.div
            className="absolute right-0 top-0 w-full h-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: color,
                  right: '50%',
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, -20, -40],
                  opacity: [1, 0.5, 0],
                  scale: [1, 0.5, 0],
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default GooeyScrollbar;