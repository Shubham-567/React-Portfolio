import React from "react";

const HeroIllustration = () => {
  return (
    // <svg
    //   width='100%'
    //   height='100%'
    //   viewBox='0 0 400 400'
    //   fill='none'
    //   xmlns='http://www.w3.org/2000/svg'
    //   role='img'
    //   aria-labelledby='hero-illustration-title'>
    //   <title id='hero-illustration-title'>
    //     Vibrant and dynamic illustration of a planetary system in deep space
    //   </title>
    //   <defs>
    //     <radialGradient
    //       id='planet-gradient'
    //       cx='0'
    //       cy='0'
    //       r='1'
    //       gradientUnits='userSpaceOnUse'
    //       gradientTransform='translate(200 200) rotate(45) scale(120)'>
    //       <stop stopColor='#38bdf8' />
    //       <stop offset='0.5' stopColor='#0ea5e9' />
    //       <stop offset='1' stopColor='#0284c7' />
    //     </radialGradient>
    //     <linearGradient
    //       id='ring-gradient'
    //       x1='50'
    //       y1='200'
    //       x2='350'
    //       y2='200'
    //       gradientUnits='userSpaceOnUse'>
    //       <stop stopColor='#93c5fd' stopOpacity='0' />
    //       <stop offset='0.2' stopColor='#93c5fd' stopOpacity='0.8' />
    //       <stop offset='0.8' stopColor='#93c5fd' stopOpacity='0.8' />
    //       <stop offset='1' stopColor='#93c5fd' stopOpacity='0' />
    //     </linearGradient>
    //     <radialGradient id='nebula' cx='50%' cy='50%' r='50%' fx='50%' fy='50%'>
    //       <stop offset='0%' stopColor='#0ea5e9' stopOpacity='0.15' />
    //       <stop offset='100%' stopColor='#0284c7' stopOpacity='0' />
    //     </radialGradient>
    //   </defs>

    //   {/* Background Nebula & Stars */}
    //   <rect width='400' height='400' fill='url(#nebula)' />

    //   <g className='text-slate-200 dark:text-slate-700'>
    //     {/* Twinkling stars */}
    //     <circle
    //       cx='50'
    //       cy='80'
    //       r='1.5'
    //       fill='currentColor'
    //       className='animate-twinkle'
    //       style={{ animationDelay: "0.2s" }}
    //     />
    //     <circle
    //       cx='350'
    //       cy='120'
    //       r='1'
    //       fill='currentColor'
    //       className='animate-twinkle'
    //       style={{ animationDelay: "1.8s" }}
    //     />
    //     <circle
    //       cx='120'
    //       cy='300'
    //       r='2'
    //       fill='currentColor'
    //       className='animate-twinkle'
    //       style={{ animationDelay: "0.8s" }}
    //     />
    //     <circle
    //       cx='280'
    //       cy='350'
    //       r='1.5'
    //       fill='currentColor'
    //       className='animate-twinkle'
    //       style={{ animationDelay: "3s" }}
    //     />
    //     <circle
    //       cx='80'
    //       cy='200'
    //       r='1'
    //       fill='currentColor'
    //       className='animate-twinkle'
    //       style={{ animationDelay: "1.3s" }}
    //     />
    //     <circle
    //       cx='320'
    //       cy='50'
    //       r='2'
    //       fill='currentColor'
    //       className='animate-twinkle'
    //       style={{ animationDelay: "2.2s" }}
    //     />
    //     <circle
    //       cx='150'
    //       cy='50'
    //       r='1'
    //       fill='currentColor'
    //       className='animate-twinkle'
    //       style={{ animationDelay: "0.1s" }}
    //     />
    //     <circle
    //       cx='250'
    //       cy='150'
    //       r='1.5'
    //       fill='currentColor'
    //       className='animate-twinkle'
    //       style={{ animationDelay: "2.9s" }}
    //     />
    //     <circle
    //       cx='20'
    //       cy='350'
    //       r='1'
    //       fill='currentColor'
    //       className='animate-twinkle'
    //       style={{ animationDelay: "0.5s" }}
    //     />
    //     <circle
    //       cx='380'
    //       cy='280'
    //       r='1.2'
    //       fill='currentColor'
    //       className='animate-twinkle'
    //       style={{ animationDelay: "1.5s" }}
    //     />
    //   </g>

    //   {/* Floating Planet System */}
    //   <g
    //     className='animate-float'
    //     style={{ transformBox: "fill-box", transformOrigin: "center" }}>
    //     {/* Planet */}
    //     <circle cx='200' cy='200' r='120' fill='url(#planet-gradient)' />

    //     {/* Rings */}
    //     <g transform='translate(200 200) rotate(-25)'>
    //       <ellipse
    //         cx='0'
    //         cy='0'
    //         rx='180'
    //         ry='60'
    //         stroke='url(#ring-gradient)'
    //         strokeWidth='4'
    //       />
    //       <ellipse
    //         cx='0'
    //         cy='0'
    //         rx='150'
    //         ry='50'
    //         stroke='#93c5fd'
    //         strokeOpacity='0.5'
    //         strokeWidth='2'
    //       />
    //     </g>

    //     {/* Distant Moon */}
    //     <circle
    //       cx='70'
    //       cy='125'
    //       r='15'
    //       fill='#0ea5e9'
    //       fillOpacity='0.2'
    //       className='dark:fill-sky-400/30'
    //     />
    //     <circle
    //       cx='70'
    //       cy='125'
    //       r='10'
    //       fill='#0ea5e9'
    //       fillOpacity='0.2'
    //       className='dark:fill-sky-400/40'
    //     />
    //   </g>

    //   {/* Foreground tiny moon */}
    //   <circle
    //     cx='330'
    //     cy='290'
    //     r='8'
    //     fill='#e0f2fe'
    //     fillOpacity='0.5'
    //     className='dark:fill-sky-300/60 animate-float'
    //     style={{ animationDelay: "1s", animationDuration: "6s" }}
    //   />
    // </svg>

    <svg
      width='100%'
      height='100%'
      viewBox='0 0 500 500'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      role='img'
      aria-labelledby='hero-illustration'>
      <defs>
        <filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
          <feGaussianBlur stdDeviation='12' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
        <linearGradient id='pane-gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop
            offset='0%'
            stopColor='currentColor'
            className='text-primary/10 dark:text-primary/20'
          />
          <stop
            offset='100%'
            stopColor='currentColor'
            className='text-primary/0'
          />
        </linearGradient>
        <style>
          {`
            @keyframes drift-1 {
                0% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(10px, -15px) rotate(5deg); }
                50% { transform: translate(-5px, 10px) rotate(-3deg); }
                75% { transform: translate(5px, -5px) rotate(2deg); }
                100% { transform: translate(0, 0) rotate(0deg); }
            }
            @keyframes drift-2 {
                0% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(-12px, 8px) rotate(-4deg); }
                50% { transform: translate(8px, -10px) rotate(6deg); }
                75% { transform: translate(-4px, 6px) rotate(-2deg); }
                100% { transform: translate(0, 0) rotate(0deg); }
            }
            @keyframes pulse {
                0%, 100% { opacity: 0.8; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.02); }
            }
            .pane-1 { animation: drift-1 25s infinite ease-in-out; }
            .pane-2 { animation: drift-2 30s infinite ease-in-out; }
            .bracket-glow { animation: pulse 5s infinite ease-in-out; }
            `}
        </style>
      </defs>

      {/* Layer 1: Drifting Panes */}
      <g opacity='0.8'>
        <rect
          x='50'
          y='80'
          width='200'
          height='120'
          rx='8'
          fill='url(#pane-gradient)'
          className='pane-1'
          transform-origin='center'
        />
        <rect
          x='280'
          y='250'
          width='180'
          height='100'
          rx='8'
          fill='url(#pane-gradient)'
          className='pane-2'
          transform-origin='center'
        />
        <path
          d='M 80 350 H 160'
          stroke='currentColor'
          strokeWidth='2'
          className='text-primary/20 pane-2'
          strokeDasharray='4 4'
        />
      </g>

      {/* Layer 2: Centerpiece - Code Bracket */}
      <g filter='url(#glow)' className='bracket-glow' transform-origin='center'>
        <path
          d='M 175 180 L 125 250 L 175 320'
          stroke='currentColor'
          className='text-primary'
          strokeWidth='12'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M 325 180 L 375 250 L 325 320'
          stroke='currentColor'
          className='text-primary'
          strokeWidth='12'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>

      {/* Layer 3: Particles & Glyphs */}
      <g fill='currentColor' className='text-slate-400 dark:text-slate-600'>
        {/* { } */}
        <text
          x='100'
          y='400'
          fontSize='20'
          fontWeight='bold'
          className='pane-1'
          style={{ animationDelay: "-5s" }}>{`{ }`}</text>
        {/* => */}
        <text
          x='400'
          y='100'
          fontSize='20'
          fontWeight='bold'
          className='pane-2'
          style={{ animationDelay: "-10s" }}>{`=>`}</text>
        {/* Dots */}
        <circle
          cx='120'
          cy='120'
          r='3'
          className='pane-1'
          style={{ animationDelay: "-2s" }}
        />
        <circle
          cx='380'
          y='420'
          r='2.5'
          className='pane-2'
          style={{ animationDelay: "-8s" }}
        />
        <circle
          cx='450'
          y='220'
          r='2'
          className='pane-1'
          style={{ animationDelay: "-15s" }}
        />
        <circle cx='50' y='250' r='3.5' className='pane-2' />
      </g>
    </svg>
  );
};

export default HeroIllustration;
