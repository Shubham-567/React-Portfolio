import { ArrowUpRight, Github } from "lucide-react";

function ProjectCard({ project }) {
  const { imgUrl, title, description, techStack, repo, live } = project;

  return (
    <div className='bg-background-200 rounded-lg flex flex-col hover:shadow-2xl shadow-primary/30 transition-all duration-300'>
      <div className='relative h-min overflow-hidden rounded-lg bg-background-300 group'>
        <img
          src={imgUrl}
          alt={title + " image"}
          className='w-full object-cover max-h-50 min-h-50 rounded-t-lg group-hover:scale-105 transition-all duration-500 cursor-pointer group-hover:scale-105'
        />

        <a
          href={live}
          className='absolute opacity-0  top-0 left-0 bg-primary/30 z-10 w-full max-h-50 min-h-50 rounded-t-lg transition-all duration-500 cursor-pointer flex justify-center items-center group-hover:opacity-100'>
          <ArrowUpRight className='size-16' />
        </a>
      </div>

      <div className='p-4 flex grow flex-col justify-between group'>
        <div>
          <h5 className='text-lg font-bold text-txt-100 mb-2 group-hover:text-primary'>
            {title}
          </h5>
          <p className='text-sm text-txt-300'>{description}</p>
        </div>

        <div>
          <div className='flex items-center gap-2 flex-wrap mt-4'>
            {techStack.map((tech, i) => (
              <div
                key={i}
                className='px-3 py-1.5 bg-background-300 text-txt-200 text-2xs font-medium rounded-2xl cursor-default hover:-translate-y-1 transition-all duration-300'>
                {tech}
              </div>
            ))}
          </div>

          <div className='flex items-center gap-2 mt-4 mb-0 pl-2'>
            <a
              href={repo}
              target='_blank'
              className='ring ring-background-300 hover:ring-primary outline-none py-2 px-2 rounded-md flex items-center gap-1 text-xs hover:text-primary'>
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href={live}
              target='_blank'
              className='ring ring-background-300 hover:ring-primary outline-none py-2 px-2 rounded-md flex items-center gap-1 text-xs hover:text-primary'>
              <ArrowUpRight size={20} />
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
