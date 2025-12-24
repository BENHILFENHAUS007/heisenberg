import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Premium Interactive Aura Background with Fire Asteroids
 * Creates cursor-responsive gradient aura + floating fire particles
 * Features:
 * - Smooth gradient orbs that follow cursor
 * - Multiple layered auras with different speeds
 * - Fire asteroid particles floating in background
 * - Blur effects for depth
 * - Reduced brightness (2% less opacity)
 */

interface AuraOrb {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  speed: number;
  color: string;
  blur: number;
  opacity: number;
}

interface FireParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  life: number;
  maxLife: number;
}

export const AuraBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationId: number;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Aura orbs with 2% reduced opacity
    const orbs: AuraOrb[] = [
      {
        x: mouseX,
        y: mouseY,
        targetX: mouseX,
        targetY: mouseY,
        size: 600,
        speed: 0.15,
        color: 'rgba(88, 28, 135, 0.392)', // Was 0.4, now 0.392 (-2%)
        blur: 80,
        opacity: 0.588, // Was 0.6, now 0.588 (-2%)
      },
      {
        x: mouseX,
        y: mouseY,
        targetX: mouseX,
        targetY: mouseY,
        size: 500,
        speed: 0.08,
        color: 'rgba(29, 78, 216, 0.343)', // Was 0.35, now 0.343 (-2%)
        blur: 100,
        opacity: 0.49, // Was 0.5, now 0.49 (-2%)
      },
      {
        x: mouseX,
        y: mouseY,
        targetX: mouseX,
        targetY: mouseY,
        size: 450,
        speed: 0.05,
        color: 'rgba(5, 150, 105, 0.294)', // Was 0.3, now 0.294 (-2%)
        blur: 120,
        opacity: 0.392, // Was 0.4, now 0.392 (-2%)
      },
      {
        x: mouseX,
        y: mouseY,
        targetX: mouseX,
        targetY: mouseY,
        size: 400,
        speed: 0.12,
        color: 'rgba(219, 39, 119, 0.245)', // Was 0.25, now 0.245 (-2%)
        blur: 90,
        opacity: 0.343, // Was 0.35, now 0.343 (-2%)
      },
      {
        x: mouseX,
        y: mouseY,
        targetX: mouseX,
        targetY: mouseY,
        size: 550,
        speed: 0.06,
        color: 'rgba(234, 88, 12, 0.196)', // Was 0.2, now 0.196 (-2%)
        blur: 110,
        opacity: 0.294, // Was 0.3, now 0.294 (-2%)
      },
    ];

    // Fire asteroid particles
    const particles: FireParticle[] = [];
    const maxParticles = 25; // Small premium asteroids

    const createParticle = (): FireParticle => {
      const side = Math.floor(Math.random() * 4);
      let x, y, vx, vy;

      // Spawn from edges
      switch (side) {
        case 0: // Top
          x = Math.random() * canvas.width;
          y = -20;
          vx = (Math.random() - 0.5) * 0.5;
          vy = Math.random() * 0.3 + 0.2;
          break;
        case 1: // Right
          x = canvas.width + 20;
          y = Math.random() * canvas.height;
          vx = -(Math.random() * 0.3 + 0.2);
          vy = (Math.random() - 0.5) * 0.5;
          break;
        case 2: // Bottom
          x = Math.random() * canvas.width;
          y = canvas.height + 20;
          vx = (Math.random() - 0.5) * 0.5;
          vy = -(Math.random() * 0.3 + 0.2);
          break;
        default: // Left
          x = -20;
          y = Math.random() * canvas.height;
          vx = Math.random() * 0.3 + 0.2;
          vy = (Math.random() - 0.5) * 0.5;
      }

      return {
        x,
        y,
        vx,
        vy,
        size: Math.random() * 3 + 2, // Small 2-5px
        opacity: Math.random() * 0.6 + 0.4,
        hue: Math.random() * 40 + 10, // Orange to red hues
        life: 1,
        maxLife: Math.random() * 200 + 100,
      };
    };

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle());
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      orbs.forEach((orb) => {
        orb.targetX = mouseX;
        orb.targetY = mouseY;
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    const drawOrb = (orb: AuraOrb) => {
      orb.x += (orb.targetX - orb.x) * orb.speed;
      orb.y += (orb.targetY - orb.y) * orb.speed;

      const gradient = ctx.createRadialGradient(
        orb.x,
        orb.y,
        0,
        orb.x,
        orb.y,
        orb.size
      );

      const colorMatch = orb.color.match(/\d+\.?\d*/g);
      if (!colorMatch) return;

      const [r, g, b] = colorMatch.map(Number);

      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${orb.opacity})`);
      gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${orb.opacity * 0.6})`);
      gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${orb.opacity * 0.3})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.filter = `blur(${orb.blur}px)`;
      ctx.globalCompositeOperation = 'screen';

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.filter = 'none';
      ctx.globalCompositeOperation = 'source-over';
    };

    const drawParticle = (particle: FireParticle) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life++;

      // Fade out near end of life
      const lifeFactor = 1 - particle.life / particle.maxLife;
      const currentOpacity = particle.opacity * lifeFactor;

      if (currentOpacity <= 0) return false;

      // Draw glow
      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.size * 3
      );

      gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 60%, ${currentOpacity})`);
      gradient.addColorStop(0.3, `hsla(${particle.hue}, 100%, 50%, ${currentOpacity * 0.5})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fill();

      // Draw core
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = `hsla(${particle.hue}, 100%, 70%, ${currentOpacity})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalCompositeOperation = 'source-over';

      return true;
    };

    const animate = () => {
      // Clear with dark background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw aura orbs
      orbs.forEach(drawOrb);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const alive = drawParticle(particles[i]);
        if (!alive || particles[i].life >= particles[i].maxLife) {
          particles[i] = createParticle();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        background: 'radial-gradient(circle at 50% 50%, #0a0a0a 0%, #000000 100%)',
      }}
    />
  );
};
