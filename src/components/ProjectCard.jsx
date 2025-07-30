import { ArrowUpRight, Github } from "lucide-react";

function ProjectCard({ project }) {
  const { imgUrl, title, description, techStack, repo, live } = project;

  return (
    <div className='project-card'>
      <div className='image-wrapper group'>
        <img
          src={imgUrl}
          alt={title + " image"}
          className='project-card-img group-hover:scale-105'
        />

        <a href={live} className='image-overlay group-hover:opacity-100'>
          <ArrowUpRight className='size-16' />
        </a>
      </div>

      <div className='project-info'>
        <h5 className='title'>{title}</h5>
        <p className='text-sm text-txt-300'>{description}</p>

        <div className='skill-container'>
          {techStack.map((tech, i) => (
            <div key={i} className='skill-badge'>
              {tech}
            </div>
          ))}
        </div>

        <div className='links-container'>
          <a href={repo} target='_blank' className='project-link-btn'>
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href={live} target='_blank' className='project-link-btn'>
            <ArrowUpRight size={20} />
            <span>Live</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
