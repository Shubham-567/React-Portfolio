import { Menu, X } from "lucide-react";
import Button from "./Button";
import { useEffect, useState } from "react";
import { resumeLink } from "../constants/constants";

function Navbar() {
  const logo = "<SP/>";
  const navlinks = ["Skills", "Projects", "About", "Contact"];

  const [isOpen, setIsOpen] = useState(false); // menu
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

  // Add GSAP sliding animations

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "top-2 px-4" : ""
      }`}>
      <nav
        className={`main-container navbar-web flex-between transition-all duration-300  ${
          isOpen ? "bg-background-200" : ""
        } ${scrolled ? "scrolled" : ""}`}>
        <div className='logo'>
          <a href='#' onClick={() => setIsOpen(false)}>
            {logo}
          </a>
        </div>
        <ul className='hidden md:flex flex-between gap-6'>
          {navlinks.map((link, i) => (
            <li key={"link" + i} className='nav-links group'>
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
        </ul>

        {/* Mobile Menu Icon  */}
        <div onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
          {!isOpen ? (
            <Menu className='menu-icon' />
          ) : (
            <X className='menu-icon' />
          )}
        </div>
      </nav>

      {/* Mobile Links */}
      {isOpen && (
        <nav className='mobile-nav-wrapper'>
          <ul className='mobile-nav-links'>
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
