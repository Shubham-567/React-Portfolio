import { socials } from "../constants/constants";
import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className='main-container mt-12 md:mt-24 mb-6 pt-12 border-t border-txt-300/10'>
      <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12'>
        
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='group relative inline-block font-mono font-bold text-2xl text-txt-100 hover:text-primary transition-colors focus:outline-none cursor-pointer'>
            &lt;Shubham/&gt;
            <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500 ease-in-out'></span>
          </button>
          <p className='text-txt-300 mt-4 text-sm max-w-sm'>
            Crafting responsive, clean, and reliable web experiences.
          </p>
        </div>

        {/* Mobile Socials */}
        <ul className='flex items-center gap-4 md:hidden mt-2 md:mt-0'>
          {socials.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <a
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={link.name}
                  className='block p-3 rounded-xl bg-background-200 border border-txt-300/10 text-txt-200 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1'
                >
                  <Icon className='size-5' />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Back to top button for desktop to balance the right side */}
        <div className="hidden md:block">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-2 text-txt-300 hover:text-primary transition-colors font-mono text-sm group cursor-pointer p-2"
          >
            Back to Top
            <ArrowUp className="size-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-txt-300/10'>
        <p className='font-mono text-xs text-txt-300 text-center md:text-left'>
          Designed & Built by Shubham Patil © {new Date().getFullYear()}
        </p>
        <p className='font-mono text-xs text-txt-300 text-center md:text-right hidden md:block'>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
