import { skills } from "../constants/constants";

function Skills() {
  return (
    <section className='section-container'>
      <h3 class='section-heading'>
        My Skills
        <span class='line' />
      </h3>

      <div className='skill-grid'>
        {skills.map(({ skill, icon }) => (
          <div key={skill} className='skill-card'>
            {icon}
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
