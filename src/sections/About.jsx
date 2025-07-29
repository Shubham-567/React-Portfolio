function About() {
  return (
    <section className='section-container'>
      <h3 class='section-heading'>
        About Me
        <span class='line' />
      </h3>

      <div className='about-container'>
        <div className='md:w-2/3 space-y-6'>
          <p className='text-txt-300'>
            Hello! I'm Jane, a developer with a passion for creating beautiful
            and functional interfaces. My journey into web development started
            during my university days, where I discovered a love for turning
            complex problems into elegant, interactive designs. I thrive on
            learning new technologies and continuously honing my craft.
          </p>
          <p className='text-txt-300'>
            My goal is to join a forward-thinking company where I can contribute
            to meaningful projects, collaborate with talented individuals, and
            grow as a developer. I'm particularly interested in roles that
            challenge me to blend my technical skills with my eye for design.
          </p>
        </div>
        <div className='md:w-1/3 relative group'>
          <img
            src='images/profile.png'
            alt='profile-pic'
            className='profile-img group-hover:grayscale-0'
          />

          <div className='profile-img-hover group-hover:translate-2 ' />
        </div>
      </div>
    </section>
  );
}

export default About;
