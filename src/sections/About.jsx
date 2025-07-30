function About() {
  return (
    <section id='about' className='section-container'>
      <h3 className='section-heading'>
        About Me
        <span className='line' />
      </h3>

      <div className='about-container'>
        <div className='md:w-2/3 space-y-6'>
          <p className='text-txt-300'>
            Hi, I’m Shubham, a full-stack web developer with a focus on building
            real-world applications using the MERN stack. I started exploring
            web development alongside my BCA studies and quickly became
            passionate about solving problems through code.
          </p>
          <p className='text-txt-300'>
            I enjoy working on both frontend and backend, and have built several
            full-stack projects involving authentication, payments, and AI
            integration. I’m currently looking for opportunities to apply my
            skills, learn from experienced developers, and grow through
            meaningful work.
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
