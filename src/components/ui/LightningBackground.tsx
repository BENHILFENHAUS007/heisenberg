import React, { useEffect, useRef } from 'react';
import './lightning-bg.css';

export interface LightningBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
  animated?: boolean;
}

export const LightningBackground: React.FC<LightningBackgroundProps> = ({
  intensity = 'medium',
  className = '',
  animated = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!animated || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    let animationFrameId: number;
    let time = 0;

    const drawLightning = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw multiple lightning bolts
      for (let i = 0; i < 2; i++) {
        drawBolt(
          ctx,
          Math.random() * canvas.width,
          -10,
          Math.random() * canvas.width,
          canvas.height,
          intensity === 'low' ? 3 : intensity === 'high' ? 8 : 5,
          time + i
        );
      }

      // Draw ambient electric glow
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, 'rgba(100, 150, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.016;
      animationFrameId = requestAnimationFrame(drawLightning);
    };

    const drawBolt = (
      ctx: CanvasRenderingContext2D,
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      thickness: number,
      seed: number
    ) => {
      const segments = 20;
      const randomness = 30;

      ctx.strokeStyle = `rgba(100, 150, 255, ${0.6 + Math.sin(seed * 0.1) * 0.3})`;
      ctx.lineWidth = thickness;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      ctx.moveTo(startX, startY);

      let prevX = startX;
      let prevY = startY;

      for (let i = 1; i <= segments; i++) {
        const progress = i / segments;
        const x = startX + (endX - startX) * progress + (Math.random() - 0.5) * randomness;
        const y = startY + (endY - startY) * progress + (Math.random() - 0.5) * (randomness / 2);

        ctx.lineTo(x, y);
        prevX = x;
        prevY = y;
      }

      ctx.stroke();

      // Draw glow effect
      ctx.strokeStyle = `rgba(150, 200, 255, ${0.3 + Math.sin(seed * 0.15) * 0.2})`;
      ctx.lineWidth = thickness * 2.5;
      ctx.globalAlpha = 0.3;

      ctx.beginPath();
      ctx.moveTo(startX, startY);

      for (let i = 1; i <= segments; i++) {
        const progress = i / segments;
        const x = startX + (endX - startX) * progress + (Math.random() - 0.5) * randomness;
        const y = startY + (endY - startY) * progress + (Math.random() - 0.5) * (randomness / 2);
        ctx.lineTo(x, y);
      }

      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    drawLightning();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [animated, intensity]);

  return (
    <div className={`lightning-background-wrapper ${className}`}>
      <canvas
        ref={canvasRef}
        className={`lightning-canvas lightning-${intensity}`}
      />
      <div className="lightning-overlay"></div>
    </div>
  );
};

export default LightningBackground;
