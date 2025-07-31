import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StarsBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const bodyH = document.body.scrollHeight;

    const starLayers = [
      { count: 40, class: "star-far", size: { min: 1.5, max: 2 }, speed: 100 },
      {
        count: 30,
        class: "star-mid",
        size: { min: 2.5, max: 3 },
        speed: 200,
      },
      {
        count: 10,
        class: "star-close",
        size: { min: 3.5, max: 4 },
        speed: 300,
      },
    ];

    const allStars = [];

    starLayers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        const star = document.createElement("div");
        star.classList.add(layer.class);
        container.appendChild(star);
        allStars.push(star);

        const size = gsap.utils.random(layer.size.min, layer.size.max);
        gsap.set(star, {
          x: gsap.utils.random(0, screenW),
          y: gsap.utils.random(0, bodyH > screenH ? bodyH : screenH * 1.5),
          width: size,
          height: size,
          opacity: 0,
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "999px",
        });
      }
    });

    allStars.forEach((star) => {
      gsap.to(star, {
        opacity: gsap.utils.random(0.4, 1),
        duration: gsap.utils.random(1.5, 3.5),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: gsap.utils.random(0, 3),
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
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

    const createShootingStar = () => {
      const star = document.createElement("div");
      container.appendChild(star);

      const startY = gsap.utils.random(0, screenH * 0.7);
      const duration = gsap.utils.random(1.5, 2.5);

      gsap.set(star, {
        y: startY,
        x: -150,
        width: 0,
        height: "2px",
        position: "absolute",
        background: "linear-gradient(-45deg, white, rgba(255,255,255,0))",
        borderRadius: "999px",
        filter: "drop-shadow(0 0 6px white)",
      });

      const tl = gsap.timeline({ onComplete: () => star.remove() });

      tl.to(
        star,
        {
          x: screenW + 150,
          duration,
          ease: "power2.inOut",
        },
        0
      )
        .to(
          star,
          {
            width: "100px",
            duration: duration * 0.3,
            ease: "power2.out",
          },
          0
        )
        .to(
          star,
          {
            width: 0,
            duration: duration * 0.7,
            ease: "power2.in",
          },
          `+=${duration * 0.3}`
        );
    };

    const startShooting = () => {
      createShootingStar();
      gsap.delayedCall(gsap.utils.random(5, 12), startShooting);
    };

    gsap.delayedCall(gsap.utils.random(2, 5), startShooting);

    return () => {
      gsap.killTweensOf("*");
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className='fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none'
    />
  );
};

export default StarsBackground;
