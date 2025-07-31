import { socials } from "../constants/constants";

function SocialLinks() {
  return (
    <div className='hidden md:block'>
      {/* Left side  */}
      <div className='fixed bottom-0 left-8 z-30 flex flex-col items-center'>
        <div className='flex flex-col items-center'>
          <ul className='flex flex-col items-center space-y-6'>
            {socials.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block text-txt-200 hover:text-primary transition-all duration-300 transform hover:-translate-y-1'>
                    <Icon className='size-6' />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className='h-28 w-1 mt-6 bg-primary rounded-full' />
        </div>
      </div>

      {/* Right side  */}
      <div className='fixed bottom-0 right-8 z-30 flex flex-col items-center'>
        <div className='flex flex-col items-center'>
          <a
            href='mailto:shubhampatil1356@gmail.com'
            style={{ writingMode: "vertical-rl" }}
            data-magnetic
            className='font-mono text-txt-200 text-sm mb-0 hover:text-primary transition-all duration-300 transform hover:-translate-y-1'>
            shubhampatil1356@gmail.com
          </a>
          <div className='h-28 w-1 mt-6 bg-primary rounded-full' />
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
