import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NeonCursor = () => {
  const circleRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  const hasMovedRef = useRef(false);
  const isHoveringRef = useRef(false);
  const isClickingRef = useRef(false);

  useEffect(() => {
    // Force GPU acceleration for smoother animations
    gsap.set([circleRef.current, ringRef.current, glowRef.current], { force3D: true });

    // Quicker tracking speeds for better responsiveness
    const circleX = gsap.quickTo(circleRef.current, "x", { duration: 0.1, ease: "power3.out" });
    const circleY = gsap.quickTo(circleRef.current, "y", { duration: 0.1, ease: "power3.out" });
    
    const ringX = gsap.quickTo(ringRef.current, "x", { duration: 0.25, ease: "power3.out" });
    const ringY = gsap.quickTo(ringRef.current, "y", { duration: 0.25, ease: "power3.out" });
    
    const glowX = gsap.quickTo(glowRef.current, "x", { duration: 0.4, ease: "power3.out" });
    const glowY = gsap.quickTo(glowRef.current, "y", { duration: 0.4, ease: "power3.out" });

    const updateGSAP = () => {
      const isHovering = isHoveringRef.current;
      const isClicking = isClickingRef.current;

      const scale = isClicking ? 0.8 : isHovering ? 1.4 : 1;
      const borderWidth = isHovering ? "1px" : "2px";
      const ringOpacity = isHovering ? 0.4 : 1;
      const glowScale = isHovering ? 1.8 : 1;
      const glowOpacity = isHovering ? 0.8 : 0.4;

      gsap.to(circleRef.current, { 
        scale: isHovering ? 0 : 1, 
        opacity: isHovering ? 0 : 1,
        duration: 0.2,
        overwrite: "auto"
      });
      gsap.to(ringRef.current, {
        scale,
        borderWidth,
        opacity: ringOpacity,
        duration: 0.2,
        overwrite: "auto"
      });
      gsap.to(glowRef.current, {
        scale: glowScale,
        opacity: glowOpacity,
        duration: 0.3,
        overwrite: "auto"
      });
    };

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        // Fade in smoothly on first move
        gsap.to(circleRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
        gsap.to(ringRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
        gsap.to(glowRef.current, { opacity: 0.4, scale: 1, duration: 0.5, ease: "power2.out" });
      }

      // size-4 (16px) -> offset 8
      circleX(clientX - 8); 
      circleY(clientY - 8);

      // size-10 (40px) -> offset 20
      ringX(clientX - 20); 
      ringY(clientY - 20);

      // size-20 (80px) -> offset 40
      glowX(clientX - 40); 
      glowY(clientY - 40);
    };

    const handleMouseDown = () => {
      isClickingRef.current = true;
      if (hasMovedRef.current) updateGSAP();
    };
    
    const handleMouseUp = () => {
      isClickingRef.current = false;
      if (hasMovedRef.current) updateGSAP();
    };

    const handleMouseOver = (e) => {
      const el = e.target;
      if (el.matches("a, button, input, textarea, [data-hover='true']")) {
        isHoveringRef.current = true;
        if (hasMovedRef.current) updateGSAP();
      }
    };

    const handleMouseOut = (e) => {
      const el = e.target;
      if (el.matches("a, button, input, textarea, [data-hover='true']")) {
        isHoveringRef.current = false;
        if (hasMovedRef.current) updateGSAP();
      }
    };

    // Use passive listeners for better scrolling performance
    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []); // Run only once

  return (
    <>
      {/* Bottom Glow */}
      <div
        ref={glowRef}
        className='max-lg:hidden fixed top-0 left-0 size-20 bg-primary/30 rounded-full blur-xl pointer-events-none z-[9997]'
        style={{
          opacity: 0,
          transform: "scale(0.5)",
          willChange: "transform, opacity"
        }}
      />

      {/* Middle Ring */}
      <div
        ref={ringRef}
        className='max-lg:hidden fixed top-0 left-0 size-10 border-2 border-primary rounded-full pointer-events-none z-[9998]'
        style={{
          opacity: 0,
          transform: "scale(0.5)",
          willChange: "transform, opacity"
        }}
      />

      {/* Top Circle */}
      <div
        ref={circleRef}
        className='max-lg:hidden fixed top-0 left-0 size-4 bg-primary rounded-full pointer-events-none z-[9999]'
        style={{
          opacity: 0,
          transform: "scale(0.5)",
          willChange: "transform, opacity"
        }}
      />
    </>
  );
};

export default NeonCursor;
