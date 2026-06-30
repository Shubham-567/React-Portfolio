import { Menu, Moon, Sun, X, MousePointer2 } from "lucide-react";
import Button from "./Button";
import { useEffect, useState, useRef } from "react";
import { resumeLink } from "../constants/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar({ isCursorEnabled, setIsCursorEnabled, isLightMode, setIsLightMode }) {
  const logo = "<Shubham/>";
  const navlinks = ["Skills", "Projects", "About", "Contact"];

  const [isOpen, setIsOpen] = useState(false); // menu
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScrolled = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScrolled, { passive: true });
    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);



  // Custom smooth scroll handler
  const handleScrollTo = (id) => {
    setIsOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const offset = 80; // approximate height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Add GSAP sliding animations
  const navRef = useRef(null);
  useGSAP(() => {
    gsap.from(".nav-item", {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: navRef });

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full flex justify-center pointer-events-none">
      
      <nav
        style={{
          maxWidth: scrolled ? '1152px' : '1280px',
          width: scrolled ? 'calc(100% - 2rem)' : '100%',
          marginTop: scrolled ? '1rem' : '0rem',
          willChange: 'width, max-width, margin-top, background-color' // hardware acceleration hint
        }}
        className={`pointer-events-auto z-10 flex items-center justify-between border transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled
            ? "py-3 px-6 md:px-8 bg-background-200/80 backdrop-blur-md border-txt-300/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl"
            : "py-6 px-6 sm:px-[4.5rem] bg-transparent border-transparent rounded-none shadow-none"
        } ${
          isOpen && !scrolled ? "bg-background-200/90 backdrop-blur-md border-txt-300/10 shadow-lg rounded-2xl px-6 py-4 sm:px-[4.5rem]" : ""
        }`}>
        
        {/* Logo */}
        <div className='font-mono font-black text-primary text-xl md:text-2xl tracking-wider nav-item group'>
          <button onClick={() => handleScrollTo('top')} className="relative inline-block cursor-pointer focus:outline-none">
            {logo}
            <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500 ease-in-out'></span>
          </button>
        </div>
        
        {/* Desktop Links */}
        <ul className='hidden md:flex items-center gap-2'>
          {navlinks.map((link, i) => (
            <li
              key={"link" + i}
              className='nav-item'>
              <button 
                onClick={() => handleScrollTo(link)}
                className='font-mono text-txt-100 text-sm px-4 py-2 rounded-lg hover:bg-background-300/50 hover:text-primary transition-all duration-300 block focus:outline-none cursor-pointer'
              >
                {link}
              </button>
            </li>
          ))}

          <li className='nav-item ml-2'>
            <a href={resumeLink} target='_blank' rel='noopener noreferrer'>
              <Button className='px-5 py-2 text-sm rounded-lg font-medium shadow-sm hover:shadow-md'>
                Resume
              </Button>
            </a>
          </li>

          <div className='flex items-center gap-2 ml-4 pl-4 border-l border-txt-300/20'>
            {/* <li className='nav-item'>
              <button
                onClick={() => setIsCursorEnabled(!isCursorEnabled)}
                className={`p-2 rounded-lg border transition-all duration-300 group cursor-pointer ${
                  isCursorEnabled 
                    ? "bg-primary/10 border-primary/30 text-primary hover:bg-primary/20" 
                    : "bg-background-300/50 border-txt-300/10 text-txt-300 hover:text-primary hover:border-primary/30"
                }`}
                title={isCursorEnabled ? "Disable Custom Cursor" : "Enable Custom Cursor"}>
                <MousePointer2 className={`size-4 ${isCursorEnabled ? "drop-shadow-[0_0_8px_rgba(var(--color-primary),0.8)]" : ""}`} />
              </button>
            </li> */}

            <li className='nav-item'>
              <button
                onClick={() => setIsLightMode(!isLightMode)}
                className='p-2 rounded-lg border border-txt-300/10 bg-background-300/50 text-txt-200 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-pointer'
                title={isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}>
                {isLightMode ? (
                  <Moon className='size-4' />
                ) : (
                  <Sun className='size-4' />
                )}
              </button>
            </li>
          </div>
        </ul>

        {/* Mobile Toggles */}
        <div className='flex items-center gap-3 md:hidden nav-item'>
          {/* <button
            onClick={() => setIsCursorEnabled(!isCursorEnabled)}
            className={`p-2 rounded-lg border transition-all duration-300 group cursor-pointer ${
              isCursorEnabled 
                ? "bg-primary/10 border-primary/30 text-primary" 
                : "bg-background-300/50 border-txt-300/10 text-txt-300"
            }`}
            title={isCursorEnabled ? "Disable Custom Cursor" : "Enable Custom Cursor"}>
            <MousePointer2 className={`size-4`} />
          </button> */}

          <button
            onClick={() => setIsLightMode(!isLightMode)}
            className='p-2 rounded-lg border border-txt-300/10 bg-background-300/50 text-txt-200 transition-all duration-300 cursor-pointer'>
            {isLightMode ? (
              <Moon className='size-4' />
            ) : (
              <Sun className='size-4' />
            )}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='p-2 rounded-lg border border-txt-300/10 bg-background-300/50 text-txt-100 hover:text-primary transition-all duration-300 focus:outline-none'
          >
            {!isOpen ? (
              <Menu className='size-5' />
            ) : (
              <X className='size-5' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Links Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-4 right-4 mt-2 transition-all duration-300 origin-top ${
          isOpen 
            ? "opacity-100 scale-y-100 pointer-events-auto" 
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <nav className='bg-background-200/95 backdrop-blur-xl border border-txt-300/10 shadow-2xl rounded-2xl overflow-hidden'>
          <ul className='flex flex-col py-4 font-mono'>
            {navlinks.map((link, i) => (
              <li key={"mobile-link" + i}>
                <button
                  onClick={() => handleScrollTo(link)}
                  className='block w-full text-left px-8 py-4 text-txt-100 hover:bg-background-300/50 hover:text-primary hover:pl-10 transition-all duration-300 border-b border-txt-300/5 last:border-0 focus:outline-none cursor-pointer'
                >
                  {link}
                </button>
              </li>
            ))}
            <li className='px-8 pt-6 pb-2'>
              <a href={resumeLink} target='_blank' rel='noopener noreferrer' onClick={() => setIsOpen(false)}>
                <Button className='w-full py-3 rounded-lg font-medium shadow-sm'>
                  Resume
                </Button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
