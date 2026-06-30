import { useEffect, useRef } from 'react';

const StarsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    let animationFrameId;
    let lastShootingStarTime = 0;
    let nextShootingStarInterval = 2000;
    
    let stars = [];
    let shootingStars = [];
    let scrollY = window.scrollY;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = window.innerWidth < 768 ? 10 : 30;
      for (let i = 0; i < numStars; i++) {
        const layer = Math.random() > 0.8 ? 3 : Math.random() > 0.5 ? 2 : 1;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: layer === 3 ? 2 : layer === 2 ? 1.2 : 0.8,
          alpha: Math.random(),
          layer: layer,
          twinkleSpeed: Math.random() * 0.003 + 0.001,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const createShootingStar = () => {
      const yStart = Math.random() * (canvas.height / 2);
      shootingStars.push({
        x: -100,
        y: yStart,
        length: Math.random() * 100 + 100,
        speed: Math.random() * 10 + 15,
        angle: (Math.random() * 15 + 15) * (Math.PI / 180),
        opacity: 1,
      });
    };

    let lastTime = 0;

    const render = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const dt = timestamp - lastTime;
      lastTime = timestamp;

      if (dt > 100) {
        shootingStars = [];
        lastShootingStarTime = timestamp;
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      if (!lastShootingStarTime) lastShootingStarTime = timestamp || 0;
      if (timestamp - lastShootingStarTime > nextShootingStarInterval && !document.hidden) {
        createShootingStar();
        lastShootingStarTime = timestamp;
        nextShootingStarInterval = window.innerWidth < 768 
          ? Math.random() * 8000 + 5000 
          : Math.random() * 5000 + 2000;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render static/parallax stars
      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed * star.twinkleDir;
        if (star.alpha <= 0.2) {
          star.alpha = 0.2;
          star.twinkleDir = 1;
        } else if (star.alpha >= 1) {
          star.alpha = 1;
          star.twinkleDir = -1;
        }

        const parallaxOffset = scrollY * (star.layer * 0.2);
        let drawY = (star.y - parallaxOffset) % canvas.height;
        if (drawY < 0) drawY += canvas.height;

        ctx.beginPath();
        ctx.arc(Math.round(star.x), Math.round(drawY), star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      // Render shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.01;

        if (ss.x > canvas.width + 200 || ss.opacity <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        const gradient = ctx.createLinearGradient(
          Math.round(ss.x), Math.round(ss.y), 
          Math.round(ss.x - Math.cos(ss.angle) * ss.length), 
          Math.round(ss.y - Math.sin(ss.angle) * ss.length)
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(Math.round(ss.x), Math.round(ss.y));
        ctx.lineTo(
          Math.round(ss.x - Math.cos(ss.angle) * ss.length),
          Math.round(ss.y - Math.sin(ss.angle) * ss.length)
        );
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    resize();
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    />
  );
};

export default StarsBackground;
