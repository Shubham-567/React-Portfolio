import { Download, MapPin } from "lucide-react";
import Button from "../components/Button";
import { resumeLink, socials } from "../constants/constants";
import HeroIllustration from "../components/HeroIllustration";

function Hero() {
  // TODO: add GSAP animations

  return (
    <section className='flex justify-between items-center gap-2'>
      <div className='flex flex-col justify-center items-start py-18'>
        {/* Heading */}
        <p className='mono-txt'>Hi, my name is</p>
        <h1 className='font-sans font-bold text-txt-200 max-w-4xl md:text-6xl sm:text-5xl text-4xl text-balance'>
          <span className='block text-primary text-shadow-xs text-shadow-primary drop-shadow-[0px_0px_39px_rgba(37,161,233,0.6)]'>
            Shubham Patil
          </span>
          I build fast, clean, and reliable websites.
        </h1>

        {/* Badge */}
        <div className='mt-4 sm:mt-6'>
          <span className='inline-block bg-primary/10 text-primary font-mono px-4 py-2 rounded-full text-xs sm:text-sm ring ring-primary/30 cursor-default hover:-translate-y-2 transition-all duration-300'>
            Full-stack Web Developer
          </span>
        </div>

        {/* Description */}
        <p className='text-txt-300 md:max-w-2/3 my-4 sm:my-6'>
          I craft responsive web apps using React, Node.js, Express, and
          MongoDB. I focus on both frontend and backend with attention to
          detail, clean architecture, and practical problem-solving.
        </p>

        {/* Location */}
        <p className='font-mono text-txt-300 hover:text-primary text-xs tracking-wide mb-6 flex items-center gap-2 cursor-default'>
          <MapPin className='size-4' /> <span>Jalgaon, Maharashtra, India</span>
        </p>

        {/* Call to action */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm'>
          <a href={resumeLink} target='_blank' rel='noopener noreferrer'>
            <Button>
              <Download />
              Download Resume
            </Button>
          </a>
        </div>

        {/* Social Links  */}
        <ul className='md:hidden flex items-center gap-4 mt-6'>
          {socials.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <a
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-txt-200 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 ring ring-background-300 px-2 py-2 text-xs rounded-md '>
                  <Icon className='size-4' />
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* hero illustration */}
      <div class='w-full max-lg:hidden'>
        <HeroIllustration />
      </div>
    </section>
  );
}

export default Hero;
