import { useEffect } from "react";

type TrailPoint = {
  x: number;
  y: number;
  life: number;
};

export const useFireCursorPro = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    document.body.appendChild(canvas);

    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "2147483647";
    canvas.style.mixBlendMode = "screen";

    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
    };

    resize();
    window.addEventListener("resize", resize);

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;

    let velocity = 0;
    const trail: TrailPoint[] = [];

    const onMove = (e: MouseEvent) => {
      velocity = Math.min(
        Math.hypot(e.movementX, e.movementY),
        50
      );
      targetX = e.clientX;
      targetY = e.clientY;

      // push trail point
      trail.push({
        x: targetX,
        y: targetY,
        life: 1,
      });

      if (trail.length > 25) trail.shift();
    };

    window.addEventListener("mousemove", onMove);

    const drawTrail = () => {
      for (let i = 0; i < trail.length; i++) {
        const p = trail[i];
        p.life -= 0.04;

        const size = 18 * p.life;
        const alpha = p.life * 0.35;

        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          size
        );
        grad.addColorStop(0, `rgba(255,180,80,${alpha})`);
        grad.addColorStop(0.5, `rgba(255,100,0,${alpha * 0.6})`);
        grad.addColorStop(1, "rgba(255,50,0,0)");

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawCursor = () => {
      const glow = 14 + velocity * 0.5;

      const grad = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        glow
      );
      grad.addColorStop(0, "rgba(255,240,200,0.9)");
      grad.addColorStop(0.4, "rgba(255,140,0,0.5)");
      grad.addColorStop(1, "rgba(255,80,0,0)");

      ctx.beginPath();
      ctx.fillStyle = grad;
      ctx.arc(x, y, glow, 0, Math.PI * 2);
      ctx.fill();

      // sharp core
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255,1)";
      ctx.arc(x, y, 2.2, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      x += (targetX - x) * 0.2;
      y += (targetY - y) * 0.2;

      drawTrail();
      drawCursor();

      velocity *= 0.85;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      canvas.remove();
    };
  }, []);
};
