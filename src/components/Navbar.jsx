import { Menu, X } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

function Navbar() {
  const logo = "<SP/>";
  const navlinks = ["Skills", "Projects", "About", "Contact", "Resume"];

  const [isOpen, setIsOpen] = useState(false); // menu

  // TODO: Add GSAP Animations

  return (
    <header className='sticky top-0 z-40'>
      <div
        className={`main-container navbar-web flex-between ${
          isOpen ? "bg-background-200" : ""
        }`}>
        <div className='logo'>{logo}</div>
        <ul className='hidden md:flex flex-between gap-6'>
          {navlinks.map((link, i) => (
            <li key={"link" + i} className='nav-links hover:text-primary'>
              {link && link === "Resume" ? (
                <Button value={link} padding='px-4 py-2' />
              ) : (
                <a href={link}>{link}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon  */}
        <div onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
          {!isOpen ? (
            <Menu className='menu-icon' />
          ) : (
            <X className='menu-icon' />
          )}
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className='mobile-nav-wrapper'>
          <ul className='mobile-nav-links'>
            {navlinks.map((link, i) => (
              <li
                key={"link" + i}
                className='text-2xl navLinks hover:text-primary'>
                {link && link === "Resume" ? (
                  <Button value={link} padding='px-4 py-2' />
                ) : (
                  <a href={link}>{link}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
