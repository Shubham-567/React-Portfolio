import { Download } from "lucide-react";
import Button from "../components/Button";

function Hero() {
  // TODO: add GSAP animations

  return (
    <div className='hero-container'>
      {/* Heading  */}

      <p className='mono-txt'>Hi, my name is</p>
      <h1 className='heading-1'>Shubham Patil.</h1>
      <h2 className='heading-2'>I build things for the web.</h2>

      {/* Description */}
      <p className='text-txt-300 md:max-w-2/3 my-6'>
        I'm a passionate frontend developer specializing in creating modern,
        responsive, and user-friendly web applications. As a recent graduate,
        I'm eager to apply my skills in React and UI/UX design to build amazing
        digital experiences.
      </p>

      {/* Call to action */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm'>
        <Button value='View My Projects' />
        <Button value='Download Resume' icon={<Download />} />
      </div>
    </div>
  );
}

export default Hero;
