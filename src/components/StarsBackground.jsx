import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const StarsBackground = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const bodyH = Math.max(document.body.scrollHeight, screenH * 1.5);

    const starLayers = [
      { count: 40, class: "star-far", size: { min: 1, max: 2 }, speed: 100, glow: 0 },
      { count: 30, class: "star-mid", size: { min: 2, max: 3 }, speed: 200, glow: 3 },
      { count: 10, class: "star-close", size: { min: 3, max: 5 }, speed: 350, glow: 6 },
    ];

    const allStars = [];
    const fragment = document.createDocumentFragment();

    // Create stars
    starLayers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        const star = document.createElement("div");
        star.classList.add(layer.class, "absolute", "bg-white", "rounded-full");
        fragment.appendChild(star);
        allStars.push(star);

        const size = gsap.utils.random(layer.size.min, layer.size.max);
        
        gsap.set(star, {
          x: gsap.utils.random(0, screenW),
          y: gsap.utils.random(0, bodyH),
          width: size,
          height: size,
          opacity: 0,
          boxShadow: layer.glow ? `0 0 ${layer.glow}px rgba(255,255,255,0.8)` : 'none'
        });
      }
    });
    
    container.appendChild(fragment);

    // Twinkle effect
    allStars.forEach((star) => {
      const isFar = star.classList.contains('star-far');
      const isMid = star.classList.contains('star-mid');
      const minO = isFar ? 0.1 : (isMid ? 0.3 : 0.5);
      const maxO = isFar ? 0.4 : (isMid ? 0.7 : 1);

      gsap.to(star, {
        opacity: gsap.utils.random(minO, maxO),
        duration: gsap.utils.random(1.5, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: gsap.utils.random(0, 4),
      });
    });

    // Parallax scroll effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    starLayers.forEach((layer) => {
      tl.to(
        `.${layer.class}`,
        {
          y: `-=${layer.speed}`,
          ease: "none",
        },
        0
      );
    });

    // Shooting stars
    const createShootingStar = () => {
      const star = document.createElement("div");
      container.appendChild(star);

      const startY = gsap.utils.random(0, screenH * 0.6); // Start upper half
      const duration = gsap.utils.random(1.2, 2.2);

      gsap.set(star, {
        y: startY,
        x: -150,
        width: 0,
        height: "2px",
        position: "absolute",
        background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
        borderRadius: "999px",
        filter: "drop-shadow(0 0 4px rgba(255,255,255,1))",
        transformOrigin: "right center"
      });

      // Angle down and right
      const angle = gsap.utils.random(15, 25);
      const moveY = screenW * Math.tan((angle * Math.PI) / 180);

      gsap.set(star, { rotation: angle });

      const stTl = gsap.timeline({ onComplete: () => star.remove() });

      stTl.to(
        star,
        {
          x: screenW + 150,
          y: startY + moveY + 150 * Math.tan((angle * Math.PI) / 180),
          duration,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        star,
        {
          width: "150px", 
          duration: duration * 0.2,
          ease: "power2.out",
        },
        0
      )
      .to(
        star,
        {
          width: 0,
          duration: duration * 0.8,
          ease: "power2.in",
        },
        `+=${duration * 0.2}`
      );
    };

    const startShooting = () => {
      createShootingStar();
      gsap.delayedCall(gsap.utils.random(3, 8), startShooting);
    };

    gsap.delayedCall(gsap.utils.random(1, 4), startShooting);

    return () => {
      container.innerHTML = "";
    };
  }, { scope: containerRef }); 

  return (
    <div
      ref={containerRef}
      className='fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none'
    />
  );
};

export default StarsBackground;
