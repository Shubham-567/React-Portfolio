import { ArrowUpRight, Github } from "lucide-react";

function ProjectCard({ project }) {
  const { imgUrl, title, description, techStack, repo, live } = project;

  return (
    <div className='project-card'>
      <div class='image-wrapper group'>
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
          <a href={repo}>
            <Github className='size-6 hover:text-primary' />
          </a>
          <a href={live}>
            <ArrowUpRight className='size-8 hover:text-primary' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
