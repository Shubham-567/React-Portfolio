import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".about-text-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".about-image-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      x: 50,
      opacity: 0,
      rotationY: -15,
      transformOrigin: "left center",
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id='about' className='section-container'>
      <h3 className='section-heading'>
        About Me
        <span className='line' />
      </h3>

      <div className='flex flex-col max-w-5xl mx-auto md:flex-row justify-between items-center gap-12 py-10'>
        {/* Text Section */}
        <div className='md:w-3/5 space-y-6'>
          <div className='about-text-anim border-l-2 border-txt-300/20 pl-6 relative'>
            <div className='absolute -left-[2px] top-0 h-1/3 w-[2px] bg-primary'></div>
            <p className='text-txt-200 text-lg leading-relaxed mb-6'>
              Hi, I’m <span className='text-txt-100 font-bold'>Shubham Patil</span>, a full-stack web developer with a focus on
              building real-world applications using the <span className='text-primary font-mono'>MERN</span> stack. I started
              exploring web development alongside my BCA studies and quickly
              became passionate about solving problems through code.
            </p>
            <p className='text-txt-300 leading-relaxed'>
              I enjoy working on both frontend and backend, and have built several
              full-stack projects involving <span className='text-txt-200'>authentication, payments, and AI
              integration</span>. I’m currently looking for opportunities to apply my
              skills, learn from experienced developers, and grow through
              meaningful work.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className='md:w-2/5 relative flex justify-center about-image-anim cursor-pointer' data-hover='true'>
          
          <div className='relative group'>
            {/* Ambient Glow */}
            <div className='absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700 rounded-2xl pointer-events-none z-0'></div>
            
            {/* Main Image Container */}
            <div className='relative w-64 md:w-72 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:-translate-y-2 z-10 bg-background-300'>
              <img
                src='images/profile.png'
                alt='profile-pic'
                className='w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] grayscale group-hover:grayscale-0'
              />
              {/* Inner Border Overlay */}
              <div className='absolute inset-0 border border-txt-300/20 rounded-2xl group-hover:border-primary/50 transition-colors duration-500 pointer-events-none'></div>
            </div>
            
            {/* Minimalist Offset Frame */}
            <div className='absolute top-0 left-0 w-full h-full border-2 border-txt-300/20 rounded-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:translate-x-4 group-hover:translate-y-4 pointer-events-none z-0'></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
