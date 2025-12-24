import { useEffect } from 'react';

type TrailPoint = {
  x: number;
  y: number;
  life: number;
};

export const useFireCursorPro = () => {
  useEffect(() => {
    // Check if user is on mobile/touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Skip cursor effect on touch devices for performance
    if (isTouchDevice) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    document.body.appendChild(canvas);

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.right = '0';
    canvas.style.bottom = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '2147483647';
    canvas.style.mixBlendMode = 'screen';

    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let velocity = 0;

    const trail: TrailPoint[] = [];
    const MAX_TRAIL = 30;

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - targetX;
      const dy = e.clientY - targetY;
      velocity = Math.min(Math.sqrt(dx * dx + dy * dy), 50);
      
      targetX = e.clientX;
      targetY = e.clientY;

      // Add trail point
      trail.push({
        x: targetX,
        y: targetY,
        life: 1,
      });

      // Remove old trail points
      if (trail.length > MAX_TRAIL) {
        trail.shift();
      }
    };

    window.addEventListener('mousemove', onMove);

    const drawTrail = () => {
      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.life -= 0.035;

        if (p.life <= 0) {
          trail.splice(i, 1);
          continue;
        }

        const size = 20 * p.life;
        const alpha = p.life * 0.4;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
        grad.addColorStop(0, `rgba(255, 200, 100, ${alpha})`);
        grad.addColorStop(0.4, `rgba(255, 120, 50, ${alpha * 0.7})`);
        grad.addColorStop(0.7, `rgba(255, 80, 30, ${alpha * 0.4})`);
        grad.addColorStop(1, 'rgba(255, 50, 0, 0)');

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawCursor = () => {
      const glow = 16 + velocity * 0.6;

      // Outer glow
      const grad = ctx.createRadialGradient(x, y, 0, x, y, glow);
      grad.addColorStop(0, 'rgba(255, 240, 210, 1)');
      grad.addColorStop(0.3, 'rgba(255, 160, 80, 0.8)');
      grad.addColorStop(0.6, 'rgba(255, 100, 40, 0.4)');
      grad.addColorStop(1, 'rgba(255, 80, 0, 0)');

      ctx.beginPath();
      ctx.fillStyle = grad;
      ctx.arc(x, y, glow, 0, Math.PI * 2);
      ctx.fill();

      // Inner bright core
      const coreGrad = ctx.createRadialGradient(x, y, 0, x, y, 4);
      coreGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGrad.addColorStop(0.5, 'rgba(255, 220, 180, 0.8)');
      coreGrad.addColorStop(1, 'rgba(255, 180, 100, 0)');

      ctx.beginPath();
      ctx.fillStyle = coreGrad;
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();

      // Tiny center dot
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.arc(x, y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      // Smooth follow
      x += (targetX - x) * 0.25;
      y += (targetY - y) * 0.25;

      drawTrail();
      drawCursor();

      velocity *= 0.88;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
      canvas.remove();
    };
  }, []);
};
