import { skills } from "../constants/constants";

function Skills() {
  return (
    <section id='skills' className='section-container'>
      <h3 className='section-heading'>
        My Skills
        <span className='line' />
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
