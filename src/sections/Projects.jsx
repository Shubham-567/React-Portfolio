import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/constants";

function Projects() {
  return (
    <section id='projects' className='section-container'>
      <h3 className='section-heading'>
        Things I've Built
        <span className='line' />
      </h3>

      <div className='project-grid'>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
