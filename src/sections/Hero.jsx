import { Download, MapPin } from "lucide-react";
import Button from "../components/Button";
import { resumeLink, socials } from "../constants/constants";
import HeroIllustration from "../components/HeroIllustration";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Hero() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-anim", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.2, // Wait for navbar slightly
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className='flex justify-between items-center gap-2'>
      <div className='flex flex-col justify-center items-start py-18 relative z-10 w-full lg:w-auto'>
        {/* Decorative background glow */}
        <div className="absolute top-10 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        {/* Heading */}
        <p className='mono-txt hero-anim flex items-center gap-4 text-txt-200 uppercase tracking-widest text-xs'>
          <span className="w-6 h-[1px] bg-txt-200"></span>
          Hi, my name is
        </p>
        <h1 className='font-sans font-bold text-txt-200 max-w-4xl md:text-6xl sm:text-5xl text-4xl text-balance hero-anim mt-2'>
          <span className='block bg-gradient-to-r from-txt-100 to-txt-300 bg-clip-text text-transparent pb-1'>
            Shubham Patil
          </span>
          I build fast, clean, and reliable websites.
        </h1>

        {/* Badge */}
        <div className='mt-4 sm:mt-6 hero-anim'>
          <div className='relative group inline-block'>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-txt-300/30 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            <span className='relative flex items-center gap-2 bg-background-200/80 backdrop-blur-sm border border-txt-300/20 text-txt-100 font-mono px-4 py-2 rounded-full text-xs sm:text-sm cursor-default transition-all duration-300 group-hover:bg-background-200'>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              Full-stack Web Developer
            </span>
          </div>
        </div>

        {/* Description */}
        <p className='text-txt-300 md:max-w-2/3 my-4 sm:my-6 hero-anim text-sm sm:text-base leading-relaxed'>
          I craft responsive web apps using React, Node.js, Express, and
          MongoDB. I focus on both frontend and backend with attention to
          detail, clean architecture, and practical problem-solving.
        </p>

        {/* Location */}
        <p className='font-mono text-txt-300 hover:text-primary text-xs tracking-wide mb-6 flex items-center gap-2 cursor-default hero-anim transition-colors'>
          <span className="p-1.5 bg-background-200/50 rounded-lg border border-txt-300/10">
            <MapPin className='size-3.5' />
          </span>
          Jalgaon, Maharashtra, India
        </p>

        {/* Call to action */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm hero-anim'>
          <a href={resumeLink} target='_blank' rel='noopener noreferrer'>
            <Button className="px-6 py-2.5 text-sm rounded-lg font-medium shadow-sm hover:shadow-md transition-all group">
              <span className="flex items-center justify-center gap-2">
                <Download className="size-4" />
                Download Resume
              </span>
            </Button>
          </a>

          {/* Social Links (Mobile Only) */}
          <ul className='flex items-center gap-3 md:hidden'>
            {socials.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={link.name}
                    className='flex items-center justify-center size-10 bg-background-200/50 backdrop-blur-sm border border-txt-300/10 rounded-lg text-txt-200 hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 shadow-sm'>
                    <Icon className='size-4' />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* hero illustration */}
      <div className='w-full max-lg:hidden hero-anim relative flex justify-end'>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <HeroIllustration />
      </div>
    </section>
  );
}

export default Hero;
