import { Download } from "lucide-react";
import Button from "../components/Button";

function Hero() {
  // TODO: add GSAP animations

  return (
    <section className='hero-container'>
      {/* Heading */}
      <p className='mono-txt'>Hi, my name is</p>
      <h1 className='heading-1'>
        <span className='name'>Shubham</span>I turn designs into functional
        web experiences.
      </h1>

      {/* Description */}
      <p className='text-txt-300 md:max-w-2/3 my-6'>
        I craft responsive web apps using React, Node.js, Express, and MongoDB.
        I focus on both frontend and backend with attention to detail, clean
        architecture, and practical problem-solving.
      </p>

      {/* Call to action */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm'>
        <a
          href='https://drive.google.com/file/d/1nqk791XKzc7LjqS6XTKrSqztQoqwsSN-/view'
          target='_blank'
          rel='noopener noreferrer'>
          <Button>
            <Download />
            Download Resume
          </Button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
