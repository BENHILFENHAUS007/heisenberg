import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * PREMIUM HD COMET HERO
 * 
 * Features:
 * - Photorealistic glowing comet
 * - Smooth particle trail system
 * - High-performance Canvas rendering
 * - Dynamic timing (5 seconds total)
 * - Passes IN FRONT of text for drama
 * - MASSIVE text and logo
 * - BULLETPROOF logo loading from local path
 */

interface CometHeroProps {
  onComplete?: () => void;
}

export const CometHero: React.FC<CometHeroProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [show, setShow] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Animation parameters
    const totalDuration = 5000; // 5 seconds
    const startTime = Date.now();
    
    // Comet path (diagonal across screen)
    const startX = -200;
    const startY = canvas.height * 0.3;
    const endX = canvas.width + 200;
    const endY = canvas.height * 0.6;

    // Trail particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const maxParticles = 150;

    // Animation loop
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);

      // Clear with fade effect for smooth trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate comet position (easeInOut for smooth motion)
      const easeProgress = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const cometX = startX + (endX - startX) * easeProgress;
      const cometY = startY + (endY - startY) * easeProgress;

      // Create trail particles
      if (progress < 0.95 && particles.length < maxParticles) {
        for (let i = 0; i < 3; i++) {
          particles.push({
            x: cometX + (Math.random() - 0.5) * 20,
            y: cometY + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 0,
            maxLife: 60 + Math.random() * 40,
            size: Math.random() * 4 + 2,
            opacity: Math.random() * 0.5 + 0.5,
          });
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;

        const lifeFactor = 1 - p.life / p.maxLife;
        if (lifeFactor <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `rgba(255, 200, 100, ${p.opacity * lifeFactor})`);
        gradient.addColorStop(0.3, `rgba(255, 150, 50, ${p.opacity * lifeFactor * 0.6})`);
        gradient.addColorStop(0.6, `rgba(255, 100, 0, ${p.opacity * lifeFactor * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 50, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw main comet trail (longer glow)
      const trailLength = 300;
      const trailGradient = ctx.createLinearGradient(
        cometX,
        cometY,
        cometX - trailLength * 0.5,
        cometY - trailLength * 0.3
      );
      trailGradient.addColorStop(0, 'rgba(255, 220, 150, 0.9)');
      trailGradient.addColorStop(0.2, 'rgba(255, 180, 100, 0.7)');
      trailGradient.addColorStop(0.5, 'rgba(255, 120, 50, 0.4)');
      trailGradient.addColorStop(0.8, 'rgba(255, 80, 20, 0.2)');
      trailGradient.addColorStop(1, 'rgba(255, 50, 0, 0)');

      ctx.fillStyle = trailGradient;
      ctx.filter = 'blur(15px)';
      ctx.beginPath();
      ctx.ellipse(
        cometX - trailLength * 0.25,
        cometY - trailLength * 0.15,
        trailLength,
        40,
        -0.3,
        0,
        Math.PI * 2
      );
      ctx.fill();
      ctx.filter = 'none';

      // Draw comet core layers (for depth)
      // Outer glow
      const outerGlow = ctx.createRadialGradient(cometX, cometY, 0, cometX, cometY, 100);
      outerGlow.addColorStop(0, 'rgba(255, 240, 200, 0.8)');
      outerGlow.addColorStop(0.3, 'rgba(255, 200, 100, 0.6)');
      outerGlow.addColorStop(0.6, 'rgba(255, 150, 50, 0.3)');
      outerGlow.addColorStop(1, 'rgba(255, 100, 0, 0)');

      ctx.fillStyle = outerGlow;
      ctx.filter = 'blur(20px)';
      ctx.beginPath();
      ctx.arc(cometX, cometY, 100, 0, Math.PI * 2);
      ctx.fill();
      ctx.filter = 'none';

      // Middle glow
      const middleGlow = ctx.createRadialGradient(cometX, cometY, 0, cometX, cometY, 50);
      middleGlow.addColorStop(0, 'rgba(255, 255, 255, 1)');
      middleGlow.addColorStop(0.3, 'rgba(255, 240, 200, 0.9)');
      middleGlow.addColorStop(0.7, 'rgba(255, 200, 100, 0.5)');
      middleGlow.addColorStop(1, 'rgba(255, 150, 50, 0)');

      ctx.fillStyle = middleGlow;
      ctx.filter = 'blur(10px)';
      ctx.beginPath();
      ctx.arc(cometX, cometY, 50, 0, Math.PI * 2);
      ctx.fill();
      ctx.filter = 'none';

      // Bright core
      const coreGradient = ctx.createRadialGradient(cometX, cometY, 0, cometX, cometY, 25);
      coreGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGradient.addColorStop(0.5, 'rgba(255, 255, 240, 0.95)');
      coreGradient.addColorStop(1, 'rgba(255, 240, 200, 0.7)');

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(cometX, cometY, 25, 0, Math.PI * 2);
      ctx.fill();

      // Bright center dot
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.beginPath();
      ctx.arc(cometX, cometY, 8, 0, Math.PI * 2);
      ctx.fill();

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        setTimeout(() => {
          setShow(false);
          onComplete?.();
        }, 500);
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Dark space background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black" />

          {/* Twinkling stars */}
          <div className="absolute inset-0">
            {[...Array(80)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Comet canvas (IN FRONT of text) - z-index: 50 */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0"
            style={{
              zIndex: 50,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
              display: 'block'
            }}
          />

          {/* Text content (BEHIND comet) - z-index: 10 */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              zIndex: 10,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            <motion.div
              className="text-center px-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Logo - MASSIVE (240px) - BULLETPROOF LOCAL PATH */}
              <motion.div
                className="flex justify-center mb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  position: 'relative',
                  zIndex: 11,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                <img
                  src="/images/logo.png"
                  alt="TK Fireworks Logo"
                  className="h-60 w-auto object-contain"
                  style={{
                    display: 'block',
                    maxWidth: '240px',
                    height: 'auto',
                    filter: 'drop-shadow(0 0 50px rgba(255,150,50,0.8))',
                    opacity: 1,
                    visibility: 'visible',
                    pointerEvents: 'auto',
                    position: 'relative',
                    zIndex: 11,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    WebkitFontSmoothing: 'antialiased'
                  }}
                  onLoad={() => {
                    setLogoLoaded(true);
                  }}
                  onError={(e) => {
                    console.error('Logo load failed from /images/logo.png');
                    // If it fails, try to show a fallback
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src.includes('/images/logo.png')) {
                      img.style.backgroundColor = 'rgba(249, 115, 22, 0.2)';
                      img.style.padding = '20px';
                    }
                  }}
                  loading="eager"
                />
              </motion.div>

              {/* TK FIREWORKS - MASSIVE TEXT */}
              <motion.h1
                className="font-black tracking-widest mb-6"
                style={{
                  fontSize: 'clamp(3rem, 15vw, 12rem)',
                  textShadow: '0 0 80px rgba(255, 150, 50, 0.8), 0 0 40px rgba(255, 100, 0, 0.6), 0 4px 20px rgba(0, 0, 0, 0.8)',
                  position: 'relative',
                  zIndex: 11,
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="bg-gradient-to-b from-white via-orange-100 to-orange-200 bg-clip-text text-transparent"
                  style={{
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1,
                    WebkitFontSmoothing: 'antialiased'
                  }}
                >
                  TK FIREWORKS
                </span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent"
                style={{
                  position: 'relative',
                  zIndex: 11,
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Light Up Your Celebration
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
