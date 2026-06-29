import { ArrowUpRight, Github } from "lucide-react";

function ProjectCard({ project }) {
  const { imgUrl, title, description, techStack, repo, live } = project;

  return (
    <div className='relative group/card h-full' data-hover='true'>
      {/* Ambient Glow */}
      <div className='absolute inset-0 bg-primary opacity-0 group-hover/card:opacity-10 blur-xl rounded-lg transition-opacity duration-700 pointer-events-none'></div>

      <div className='relative flex flex-col h-full bg-background-200/40 backdrop-blur-md border border-txt-300/10 rounded-lg hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden z-10'>
        
        {/* Image Section */}
        <div className='relative h-44 overflow-hidden rounded-t-xl bg-background-300 group/img'>
          <img
            src={imgUrl}
            alt={title + " image"}
            className='w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer'
          />
          
          {/* Overlay on Image */}
          <a
            href={live}
            target='_blank'
            rel='noopener noreferrer'
            className='absolute inset-0 bg-background-100/40 backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-all duration-500 flex justify-center items-center z-10'>
            <div className='bg-primary text-background-100 p-3 rounded-full translate-y-4 group-hover/img:translate-y-0 transition-transform duration-500'>
              <ArrowUpRight className='size-6' />
            </div>
          </a>
        </div>

        {/* Content Section */}
        <div className='p-5 flex flex-col grow justify-between relative'>
          
          {/* Accent Line */}
          <div className='absolute top-0 left-5 right-5 h-[1px] bg-txt-300/10 group-hover/card:bg-primary/30 transition-colors duration-500'></div>

          <div className='mb-4'>
            <h5 className='text-lg font-bold text-txt-100 mb-2 group-hover/card:text-primary transition-colors duration-300'>
              {title}
            </h5>
            <p className='text-sm text-txt-300 leading-relaxed'>{description}</p>
          </div>

          <div>
            <div className='flex items-center gap-2 flex-wrap mb-5'>
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  className='px-2.5 py-0.5 bg-primary/5 border border-primary/20 text-primary text-xs font-mono rounded-full cursor-default hover:-translate-y-1 hover:bg-primary/20 transition-all duration-300'>
                  {tech}
                </div>
              ))}
            </div>

            <div className='flex items-center gap-3'>
              <a
                href={repo}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-xs font-medium text-txt-200 border border-txt-300/20 px-3 py-1.5 rounded-lg hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300'>
                <Github size={16} />
                <span>Source</span>
              </a>
              <a
                href={live}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-xs font-medium text-background-100 bg-primary border border-primary px-3 py-1.5 rounded-lg hover:bg-transparent hover:text-primary transition-all duration-300'>
                <ArrowUpRight size={16} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
