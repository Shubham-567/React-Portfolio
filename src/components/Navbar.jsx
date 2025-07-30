import { Menu, X } from "lucide-react";
import Button from "./Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const logo = "<SP/>";
  const navlinks = ["Skills", "Projects", "About", "Contact"];

  const [isOpen, setIsOpen] = useState(false); // menu

  // TODO: Add GSAP Animations

  return (
    <header className='sticky top-0 z-40'>
      <nav
        className={`main-container navbar-web flex-between ${
          isOpen ? "bg-background-200" : ""
        }`}>
        <div className='logo'>
          <a href='#'>{logo}</a>
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

          <a
            href='https://drive.google.com/file/d/1nqk791XKzc7LjqS6XTKrSqztQoqwsSN-/view'
            target='_blank'
            rel='noopener noreferrer'>
            <Button className='px-4 py-2 text-sm'>Resume</Button>
          </a>
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
                {link && link === "Resume" ? (
                  <a
                    href='https://drive.google.com/file/d/1nqk791XKzc7LjqS6XTKrSqztQoqwsSN-/view'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Button className='px-4 py-2'>{link}</Button>
                  </a>
                ) : (
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}>
                    <span>{link}</span>
                    <span className='underline'></span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
