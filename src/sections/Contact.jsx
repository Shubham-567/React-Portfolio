import React from "react";
import Button from "../components/Button";

function Contact() {
  // ToDO: add handle submit function

  return (
    <section className='section-container'>
      <h3 class='section-heading'>
        Contact
        <span class='line' />
      </h3>

      <div className='form-container'>
        <p className='text-txt-300 text-center mb-6'>
          Have a project in mind or want to connect? Drop me a message below,
          and I'll get back to you as soon as possible.
        </p>

        <form className='space-y-5'>
          <div className='input-container'>
            <div className='input-wrapper'>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                type='text'
                placeholder='Your Name'
                class='input-box'
              />
            </div>

            <div className='input-wrapper'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='email'
                placeholder='Your Email'
                class='input-box'
              />
            </div>
          </div>
          <div className='input-wrapper'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              placeholder='your message'
              className='input-box'
              rows='4'
            />
          </div>

          <div className='flex justify-center'>
            <Button type='submit' value='Send Message' />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
