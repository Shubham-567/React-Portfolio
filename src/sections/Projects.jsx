import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".project-card-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      rotationY: 15,
      transformOrigin: "center center",
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id='projects' className='section-container'>
      <h3 className='section-heading'>
        Things I've Built
        <span className='line' />
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-6 w-full'>
        {projects.map((project, i) => (
          <div key={i} className="project-card-anim">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
