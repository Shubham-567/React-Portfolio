import { Menu, Moon, Sun, X } from "lucide-react";
import Button from "./Button";
import { useEffect, useState } from "react";
import { resumeLink } from "../constants/constants";

function Navbar() {
  const logo = "<Shubham/>";
  const navlinks = ["Skills", "Projects", "About", "Contact"];

  const [isOpen, setIsOpen] = useState(false); // menu
  const [isLightMode, setIsLightMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrolled);

    return () => window.removeEventListener("scroll", handleScrolled);
  }, []);

  // handle light mode toggle function with preffered theme
  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "light");
    }
  }, [isLightMode]);

  // Add GSAP sliding animations

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "top-2 px-4" : ""
      }`}>
      <nav
        className={`main-container py-3 z-10 flex-between transition-all duration-300  ${
          isOpen ? "bg-background-200" : ""
        } ${
          scrolled
            ? "bg-background-300/50 backdrop-blur-2xl rounded-full max-w-6xl ring ring-background-200"
            : ""
        }`}>
        <div className='font-mono font-black text-primary text-2xl tracking-wider'>
          <a href='#' onClick={() => setIsOpen(false)}>
            {logo}
          </a>
        </div>
        <ul className='hidden md:flex flex-between gap-6'>
          {navlinks.map((link, i) => (
            <li
              key={"link" + i}
              className='font-mono text-txt-100 text-sm group'>
              <a href={`#${link.toLowerCase()}`}>
                <span>{link}</span>
                <span className='underline '></span>
              </a>
            </li>
          ))}

          <li>
            <a href={resumeLink} target='_blank' rel='noopener noreferrer'>
              <Button className='px-4 py-2 text-sm'>Resume</Button>
            </a>
          </li>

          <li>
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className='p-2 bg-primary/5 hover:bg-primary/10 rounded-full hover:text-primary cursor-pointer'>
              {isLightMode ? (
                <Moon className='size-5' />
              ) : (
                <Sun className='size-5' />
              )}
            </button>
          </li>
        </ul>

        <div className='flex items-center gap-4 md:hidden'>
          {/* light mode toggle  */}
          <button
            onClick={() => setIsLightMode(!isLightMode)}
            className='p-2 bg-primary/5 hover:bg-primary/10 rounded-full hover:text-primary cursor-pointer'>
            {isLightMode ? (
              <Sun className='size-5' />
            ) : (
              <Moon className='size-5' />
            )}
          </button>

          {/* Mobile Menu Icon  */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <Menu className='text-primary size-8 hover:cursor-pointer' />
            ) : (
              <X className='text-primary size-8 hover:cursor-pointer' />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Links */}
      {isOpen && (
        <nav className='absolute -z-5 bg-background-100/80 backdrop-blur-sm h-[105vh] w-screen -top-2 left-0'>
          <ul className='flex flex-col justify-center items-center md:hidden font-mono gap-8 h-screen'>
            {navlinks.map((link, i) => (
              <li
                key={"link" + i}
                className='text-2xl navLinks group hover:text-primary'>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}>
                  <span>{link}</span>
                  <span className='underline'></span>
                </a>
              </li>
            ))}

            <li>
              <a href={resumeLink} target='_blank' rel='noopener noreferrer'>
                <Button className='px-4 py-2 text-2xl'>Resume</Button>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
