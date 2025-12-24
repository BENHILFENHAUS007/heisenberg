import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  alpha: number;
}

export const FireworksBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const colors = [
      '#FF6B35', // orange
      '#FF8C42', // light orange
      '#FFB14D', // yellow-orange
      '#FFC65C', // golden
      '#FF4757', // red
      '#FF6348', // tomato
    ];

    const createParticle = (x?: number, y?: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      const life = Math.random() * 60 + 40;

      return {
        x: x ?? Math.random() * canvas.width,
        y: y ?? Math.random() * canvas.height,
        vx: Math.cos(angle) * speed * 0.5,
        vy: Math.sin(angle) * speed * 0.5 - 1,
        life,
        maxLife: life,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
      };
    };

    const createBurst = (x: number, y: number, count: number = 15) => {
      for (let i = 0; i < count; i++) {
        particles.push(createParticle(x, y));
      }
    };

    // Initial particles
    for (let i = 0; i < 30; i++) {
      particles.push(createParticle());
    }

    // Create bursts periodically
    const burstInterval = setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height * 0.6);
      createBurst(x, y, Math.floor(Math.random() * 10 + 10));
    }, 2000);

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08; // gravity
        p.life--;
        p.alpha = p.life / p.maxLife;

        if (p.life <= 0 || p.y > canvas.height) {
          particles.splice(i, 1);
          continue;
        }

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `${p.color}${Math.floor(p.alpha * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${p.color}${Math.floor(p.alpha * 128).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 200, ${p.alpha})`;
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add new ambient particles
      if (particles.length < 50 && Math.random() < 0.3) {
        particles.push(createParticle());
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      clearInterval(burstInterval);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1 }}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
