import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const NeonCursor = () => {
  const circleRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);

  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const circleX = gsap.quickTo(circleRef.current, "x", {
      duration: 0.3,
      ease: "power3.out",
    });
    const circleY = gsap.quickTo(circleRef.current, "y", {
      duration: 0.3,
      ease: "power3.out",
    });

    const ringX = gsap.quickTo(ringRef.current, "x", {
      duration: 0.5,
      ease: "power3.out",
    });
    const ringY = gsap.quickTo(ringRef.current, "y", {
      duration: 0.5,
      ease: "power3.out",
    });

    const glowX = gsap.quickTo(glowRef.current, "x", {
      duration: 0.7,
      ease: "power3.out",
    });
    const glowY = gsap.quickTo(glowRef.current, "y", {
      duration: 0.7,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (!cursorVisible) {
        setCursorVisible(true);

        // Fade in on first move
        gsap.to([circleRef.current, ringRef.current, glowRef.current], {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 1,
          ease: "power4.out",
        });
      }

      circleX(clientX - 12);
      circleY(clientY - 12);

      ringX(clientX - 24);
      ringY(clientY - 24);

      glowX(clientX - 40);
      glowY(clientY - 40);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const el = e.target;

      if (el.matches("a, button, input, textarea, [data-hover='true']")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorVisible]);

  useEffect(() => {
    const scale = isClicking ? 0.8 : isHovering ? 1.2 : 1;
    const borderWidth = isHovering ? "3px" : "2px";
    const borderColor = isHovering ? "#ff9632" : "#ec6517";
    const glowScale = isHovering ? 1.5 : 1;

    if (cursorVisible) {
      gsap.to(circleRef.current, { scale, duration: 0.2 });
      gsap.to(ringRef.current, {
        scale,
        borderWidth,
        borderColor,
        duration: 0.2,
      });
      gsap.to(glowRef.current, {
        scale: glowScale,
        opacity: isHovering ? 0.8 : 0.4,
        duration: 0.3,
      });
    }
  }, [isClicking, isHovering, cursorVisible]);

  return (
    <>
      {/* Bottom Glow */}
      <div
        ref={glowRef}
        className='max-lg:hidden fixed top-0 left-0 size-20 bg-primary/30 rounded-full blur-xl pointer-events-none z-[9997]'
        style={{
          opacity: 0,
          transform: "scale(0.5)",
        }}
      />

      {/* Middle Ring */}
      <div
        ref={ringRef}
        className='max-lg:hidden fixed top-0 left-0 size-10 border-2 border-primary rounded-full pointer-events-none z-[9998]'
        style={{
          opacity: 0,
          transform: "scale(0.5)",
        }}
      />

      {/* Top Circle */}
      <div
        ref={circleRef}
        className='max-lg:hidden fixed top-0 left-0 size-4 bg-primary rounded-full pointer-events-none z-[9999]'
        style={{
          opacity: 0,
          transform: "scale(0.5)",
        }}
      />
    </>
  );
};

export default NeonCursor;
