import { skills } from "../constants/constants";

function Skills() {
  return (
    <section id='skills' className='section-container'>
      <h3 className='section-heading'>
        My Skills
        <span className='line' />
      </h3>

      <div className='grid grid-cols-2 md:grid-cols-4 py-6 gap-4 w-full'>
        {skills.map(({ skill, icon }) => (
          <div
            key={skill}
            className='flex flex-col items-center justify-center gap-4 px-12 py-6 font-mono text-sm bg-background-200 rounded-lg hover:-translate-y-2 transition-all duration-300'>
            {icon}
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
