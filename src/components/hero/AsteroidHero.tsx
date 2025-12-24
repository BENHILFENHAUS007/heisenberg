import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Epic Asteroid Hero Animation
 * 
 * Creates a 3-second cinematic intro with:
 * - BIG "TK FIREWORKS" text
 * - Animated fire asteroid flying through
 * - 3D depth effect
 * - Professional reveal
 */

interface AsteroidHeroProps {
  onComplete?: () => void;
}

export const AsteroidHero: React.FC<AsteroidHeroProps> = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Auto-hide after 3 seconds
    const timer = setTimeout(() => {
      setShow(false);
      onComplete?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background stars effect */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={
                  {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  } as React.CSSProperties
                }
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative w-full max-w-6xl px-6">
            {/* TK FIREWORKS Text */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Glow background */}
              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-orange-500/30 via-pink-500/30 to-purple-500/30" />

              {/* Main text with border */}
              <div className="relative border-4 border-purple-400 rounded-2xl p-8 bg-gradient-to-br from-purple-900/40 via-transparent to-pink-900/40 backdrop-blur-sm">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-center tracking-wider">
                  <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                    TK FIREWORKS
                  </span>
                </h1>
              </div>

              {/* Animated Fire Asteroid */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                initial={{ left: '-20%', rotate: -45 }}
                animate={{
                  left: '120%',
                  rotate: -45,
                }}
                transition={{
                  duration: 2.5,
                  ease: 'easeInOut',
                }}
                style={{ zIndex: 10 }}
              >
                {/* Asteroid trail */}
                <motion.div
                  className="absolute right-full top-1/2 -translate-y-1/2 h-2 w-96"
                  style={{
                    background:
                      'linear-gradient(to left, rgba(255, 150, 50, 0.8), rgba(255, 100, 0, 0.4), transparent)',
                    filter: 'blur(8px)',
                  }}
                />

                {/* Asteroid body with glow */}
                <div className="relative">
                  {/* Outer glow */}
                  <motion.div
                    className="absolute inset-0 -m-8 rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(255, 150, 50, 0.6) 0%, rgba(255, 100, 0, 0.3) 50%, transparent 70%)',
                      filter: 'blur(20px)',
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                    }}
                  />

                  {/* Main asteroid */}
                  <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                    {/* Asteroid SVG */}
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full drop-shadow-2xl"
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(255, 150, 50, 0.8))',
                      }}
                    >
                      {/* Main body */}
                      <circle cx="50" cy="50" r="45" fill="url(#asteroidGradient)" />
                      
                      {/* Craters */}
                      <circle cx="35" cy="35" r="8" fill="rgba(139, 69, 19, 0.6)" />
                      <circle cx="60" cy="40" r="6" fill="rgba(139, 69, 19, 0.6)" />
                      <circle cx="45" cy="60" r="7" fill="rgba(139, 69, 19, 0.6)" />
                      <circle cx="65" cy="65" r="5" fill="rgba(139, 69, 19, 0.6)" />
                      
                      {/* Gradient definition */}
                      <defs>
                        <radialGradient id="asteroidGradient">
                          <stop offset="0%" stopColor="#FF9632" />
                          <stop offset="50%" stopColor="#FF6400" />
                          <stop offset="100%" stopColor="#8B4513" />
                        </radialGradient>
                      </defs>
                    </svg>

                    {/* Fire particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500"
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                        animate={{
                          x: [
                            0,
                            Math.cos((i / 8) * Math.PI * 2) * (Math.random() * 30 + 20),
                          ],
                          y: [
                            0,
                            Math.sin((i / 8) * Math.PI * 2) * (Math.random() * 30 + 20),
                          ],
                          opacity: [1, 0],
                          scale: [1, 0],
                        }}
                        transition={{
                          duration: Math.random() * 0.5 + 0.5,
                          repeat: Infinity,
                          delay: Math.random() * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-center mt-8 text-xl md:text-2xl font-semibold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Light Up Your Celebration
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
