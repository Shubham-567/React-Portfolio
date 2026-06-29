import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroIllustration = () => {
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    // Floating animation for panes
    gsap.to(".pane-1", {
      y: -20,
      x: 10,
      rotation: 2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".pane-2", {
      y: 20,
      x: -10,
      rotation: -2,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });

    // Bracket draw effect
    gsap.from(".bracket-path", {
      strokeDasharray: 300,
      strokeDashoffset: 300,
      duration: 2.5,
      ease: "power3.out",
    });

    // Bracket pulse effect
    gsap.to(".bracket-glow", {
      scale: 1.05,
      opacity: 1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Random floating for particles
    gsap.utils.toArray(".particle").forEach((particle) => {
      gsap.to(particle, {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        rotation: "random(-15, 15)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, { scope: containerRef });

  const handleMouseEnter = contextSafe(() => {
    // Expand the centerpiece and background layers smoothly on hover
    gsap.to(".layer-1", { scale: 1.1, rotation: -3, duration: 0.5, ease: "back.out(1.5)" });
    gsap.to(".layer-2", { scale: 1.2, duration: 0.5, ease: "back.out(1.5)" });
    gsap.to(".layer-3", { scale: 1.15, rotation: 3, duration: 0.5, ease: "back.out(1.5)" });
  });

  const handleMouseLeave = contextSafe(() => {
    // Snap back to normal size
    gsap.to(".layer-1, .layer-2, .layer-3", { 
      scale: 1, 
      rotation: 0, 
      duration: 0.6, 
      ease: "power2.out" 
    });
  });

  return (
    <svg
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width='100%'
      height='100%'
      viewBox='0 0 500 500'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-labelledby='hero-illustration'>
      <defs>
        <filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
          <feGaussianBlur stdDeviation='10' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
        <linearGradient id='pane-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='var(--color-txt-200)' stopOpacity='0.15' />
          <stop offset='100%' stopColor='var(--color-txt-300)' stopOpacity='0' />
        </linearGradient>
      </defs>

      {/* Layer 1: Drifting Panes */}
      <g className='layer-1' opacity='0.8' style={{ transformOrigin: "center" }}>
        <rect
          x='60'
          y='90'
          width='200'
          height='130'
          rx='12'
          fill='url(#pane-gradient)'
          stroke='var(--color-txt-300)'
          strokeWidth='1'
          strokeOpacity='0.3'
          className='pane-1'
          style={{ transformOrigin: "center" }}
        />
        <rect
          x='260'
          y='260'
          width='180'
          height='120'
          rx='12'
          fill='url(#pane-gradient)'
          stroke='var(--color-txt-300)'
          strokeWidth='1'
          strokeOpacity='0.3'
          className='pane-2'
          style={{ transformOrigin: "center" }}
        />
        <path
          d='M 90 360 H 170'
          stroke='var(--color-txt-300)'
          strokeWidth='2'
          className='pane-2'
          strokeDasharray='4 4'
          strokeOpacity='0.5'
        />
      </g>

      {/* Layer 2: Centerpiece - Code Bracket */}
      <g className='layer-2' filter='url(#glow)' style={{ transformOrigin: "center", opacity: 0.8 }}>
        <g className='bracket-glow' style={{ transformOrigin: "center" }}>
          <path
            className='bracket-path'
            d='M 185 180 L 125 250 L 185 320'
            stroke='var(--color-primary)'
            strokeWidth='14'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            className='bracket-path'
            d='M 315 180 L 375 250 L 315 320'
            stroke='var(--color-primary)'
            strokeWidth='14'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>

      {/* Layer 3: Particles & Glyphs */}
      <g fill='var(--color-txt-300)' className='font-mono layer-3' style={{ transformOrigin: "center" }}>
        {/* { } */}
        <text
          x='110'
          y='410'
          fontSize='24'
          fontWeight='bold'
          className='particle'>{`{ }`}</text>
        {/* => */}
        <text
          x='390'
          y='110'
          fontSize='24'
          fontWeight='bold'
          className='particle'>{`=>`}</text>
        {/* /> */}
        <text
          x='250'
          y='80'
          fontSize='20'
          fontWeight='bold'
          className='particle'>{`/>`}</text>
        {/* Dots */}
        <circle cx='130' cy='130' r='4' className='particle' />
        <circle cx='390' cy='430' r='3' className='particle' />
        <circle cx='460' cy='230' r='2.5' className='particle' />
        <circle cx='60' cy='260' r='4' className='particle' />
        <circle cx='250' cy='450' r='2' className='particle' />
      </g>
    </svg>
  );
};

export default HeroIllustration;
