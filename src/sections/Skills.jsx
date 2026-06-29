import { skills } from "../constants/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".skill-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      rotationX: -15, // Slight 3D tilt
      transformOrigin: "center center",
      duration: 0.8,
      stagger: 0.08,
      ease: "back.out(1.2)",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id='skills' className='section-container'>
      <h3 className='section-heading'>
        My Skills
        <span className='line' />
      </h3>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-6 w-full' style={{ perspective: "1000px" }}>
        {skills.map(({ skill, icon }) => (
          <div 
            key={skill} 
            className='skill-card group relative h-full cursor-pointer'
            data-hover='true'
          >
            {/* Ambient Background Glow */}
            <div className='absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 blur-xl rounded-lg transition-opacity duration-500 pointer-events-none'></div>
            
            {/* Main Card Content */}
            <div className='relative flex flex-col items-center justify-center h-full gap-5 px-6 py-10 font-mono text-sm bg-background-200/40 backdrop-blur-md border border-txt-300/10 rounded-lg hover:-translate-y-2 hover:border-primary/50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-10 overflow-hidden shadow-lg'>
              
              {/* Corner Accent Decor */}
              <div className='absolute top-0 right-0 w-12 h-12 bg-primary/5 rounded-bl-full translate-x-6 -translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:bg-primary/10 transition-all duration-500 ease-out pointer-events-none'></div>
              
              {/* Icon Container */}
              <div className='text-txt-300 group-hover:text-primary transition-all duration-500 group-hover:scale-125 transform group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'>
                {icon}
              </div>
              
              {/* Skill Text */}
              <span className='text-txt-200 group-hover:text-primary font-bold tracking-wider transition-colors duration-500'>
                {skill}
              </span>

              {/* Bottom line accent */}
              <div className='absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500 ease-in-out'></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
