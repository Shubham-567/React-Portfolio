import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/constants";

function Projects() {
  return (
    <section className='section-container'>
      <h3 class='section-heading'>
        Things I've Built
        <span class='line' />
      </h3>

      <div className='project-grid'>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
