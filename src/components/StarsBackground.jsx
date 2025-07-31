import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NUM_STARS = 30;

function StarsBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const stars = gsap.utils.toArray(".star");

    // Helper to animate a single star with random timing and opacity
    const twinkle = (star) => {
      const nextOpacity = gsap.utils.random(0, 1, 0.01);
      const duration = gsap.utils.random(0.5, 1.5, 0.01);
      gsap.to(star, {
        opacity: nextOpacity,
        duration,
        ease: "sine.inOut",
        onComplete: () => twinkle(star), // Recursively animate again
      });
    };

    stars.forEach((star) => {
      twinkle(star);
    });

    const spawnShootingStar = () => {
      const shootingStar = document.createElement("div");

      shootingStar.className = "shooting-star pointer-events-none";
      shootingStar.style.position = "fixed";
      shootingStar.style.top = `${gsap.utils.random(5, 80)}vh`;
      shootingStar.style.left = `${gsap.utils.random(5, 100)}vw`;
      shootingStar.style.width = "100px";
      shootingStar.style.height = "2px";
      shootingStar.style.background =
        "linear-gradient(to left, rgba(255,255,255,0), white)";
      shootingStar.style.transform = "rotate(-130deg)"; // Rotated to the direction it moves
      shootingStar.style.borderRadius = "9999px";
      shootingStar.style.filter = "drop-shadow(0 0 8px white)";
      shootingStar.style.opacity = "0.9";
      shootingStar.style.zIndex = "-1";

      containerRef.current.appendChild(shootingStar);

      gsap.to(shootingStar, {
        x: 300,
        y: 300,
        opacity: 0,
        duration: 2.2,
        ease: "power2.out",
        onComplete: () => shootingStar.remove(),
      });
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        spawnShootingStar();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className='fixed top-0 left-0 w-full h-full -z-50 overflow-hidden pointer-events-none'>
      {Array.from({ length: NUM_STARS }).map((_, i) => (
        <div
          key={i}
          className='star absolute size-[3px] bg-txt-100 rounded-full opacity-70'
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
        />
      ))}
    </div>
  );
}

export default StarsBackground;
