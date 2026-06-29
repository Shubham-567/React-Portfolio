import { socials } from "../constants/constants";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function SocialLinks() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".social-anim", {
      y: 150,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.8, // Enter after hero animation
    });
  }, { scope: containerRef });

  return (
    <div className='hidden md:block' ref={containerRef}>
      {/* Left side  */}
      <div className='fixed bottom-0 left-10 z-30 flex flex-col items-center social-anim'>
        <div className='flex flex-col items-center gap-6'>
          <ul className='flex flex-col items-center gap-6'>
            {socials.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name} className="group relative">
                  <a
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='relative flex items-center justify-center p-2 text-txt-200 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:text-primary z-10'>
                    <Icon className='size-5' />
                  </a>
                  {/* Subtle ambient glow behind icon on hover */}
                  <div className="absolute inset-0 bg-primary/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </li>
              );
            })}
          </ul>
          {/* Premium gradient line fading to transparent at the bottom */}
          <div className='h-32 w-[2px] bg-gradient-to-t from-transparent via-txt-300/30 to-primary/80 rounded-full' />
        </div>
      </div>

      {/* Right side  */}
      <div className='fixed bottom-0 right-10 z-30 flex flex-col items-center social-anim'>
        <div className='flex flex-col items-center gap-6'>
          <a
            href='mailto:shubhampatil1356@gmail.com'
            style={{ writingMode: "vertical-rl" }}
            className='font-mono tracking-widest text-txt-200 text-sm hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:tracking-[0.2em]'>
            shubhampatil1356@gmail.com
          </a>
          {/* Premium gradient line */}
          <div className='h-32 w-[2px] bg-gradient-to-t from-transparent via-txt-300/30 to-primary/80 rounded-full' />
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
