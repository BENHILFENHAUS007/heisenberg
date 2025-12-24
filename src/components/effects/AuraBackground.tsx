import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Interactive Aura Background Effect
 * Creates a premium cursor-responsive gradient aura similar to advanced.team
 * Features:
 * - Smooth gradient orbs that follow cursor
 * - Multiple layered auras with different speeds
 * - Blur effects for depth
 * - Color transitions based on cursor position
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

export const AuraBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
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

    // Create multiple aura orbs with different properties
    const orbs: AuraOrb[] = [
      // Primary large aura (follows cursor closely)
      {
        x: mouseX,
        y: mouseY,
        targetX: mouseX,
        targetY: mouseY,
        size: 600,
        speed: 0.15,
        color: 'rgba(88, 28, 135, 0.4)', // Purple
        blur: 80,
        opacity: 0.6,
      },
      // Secondary aura (slower follow)
      {
        x: mouseX,
        y: mouseY,
        targetX: mouseX,
        targetY: mouseY,
        size: 500,
        speed: 0.08,
        color: 'rgba(29, 78, 216, 0.35)', // Blue
        blur: 100,
        opacity: 0.5,
      },
      // Tertiary aura (slowest, creates depth)
      {
        x: mouseX,
        y: mouseY,
        targetX: mouseX,
        targetY: mouseY,
        size: 450,
        speed: 0.05,
        color: 'rgba(5, 150, 105, 0.3)', // Teal
        blur: 120,
        opacity: 0.4,
      },
      // Accent aura (pink/red tones)
      {
        x: mouseX,
        y: mouseY,
        targetX: mouseX,
        targetY: mouseY,
        size: 400,
        speed: 0.12,
        color: 'rgba(219, 39, 119, 0.25)', // Pink
        blur: 90,
        opacity: 0.35,
      },
      // Ambient aura (orange warmth)
      {
        x: mouseX,
        y: mouseY,
        targetX: mouseX,
        targetY: mouseY,
        size: 550,
        speed: 0.06,
        color: 'rgba(234, 88, 12, 0.2)', // Orange
        blur: 110,
        opacity: 0.3,
      },
    ];

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update target positions for all orbs
      orbs.forEach((orb) => {
        orb.targetX = mouseX;
        orb.targetY = mouseY;
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    const drawOrb = (orb: AuraOrb) => {
      // Smooth interpolation towards target
      orb.x += (orb.targetX - orb.x) * orb.speed;
      orb.y += (orb.targetY - orb.y) * orb.speed;

      // Create radial gradient
      const gradient = ctx.createRadialGradient(
        orb.x,
        orb.y,
        0,
        orb.x,
        orb.y,
        orb.size
      );

      // Extract RGB values from the color string
      const colorMatch = orb.color.match(/\d+/g);
      if (!colorMatch) return;

      const [r, g, b] = colorMatch.map(Number);

      // Gradient stops for smooth aura effect
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${orb.opacity})`);
      gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${orb.opacity * 0.6})`);
      gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${orb.opacity * 0.3})`);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      // Apply blur effect
      ctx.filter = `blur(${orb.blur}px)`;
      ctx.globalCompositeOperation = 'screen'; // Blend mode for premium look

      // Draw the orb
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
      ctx.fill();

      // Reset filter and blend mode
      ctx.filter = 'none';
      ctx.globalCompositeOperation = 'source-over';
    };

    const animate = () => {
      // Clear with dark background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw all orbs
      orbs.forEach(drawOrb);

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
