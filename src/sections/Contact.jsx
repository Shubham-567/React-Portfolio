import { useRef, useState } from "react";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";
import Toast from "../components/Toast";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [status, setStatus] = useState("");
  const form = useRef();

  const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setShowToast(true);
    setIsLoading(true);

    // TODO add Toast component for success and error messages
    // TODO add proper input validation

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        // publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("success");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("error");
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <>
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

          <form ref={form} onSubmit={sendEmail} className='space-y-5'>
            <div className='input-container'>
              <div className='input-wrapper'>
                <label htmlFor='name'>Name</label>
                <input
                  id='name'
                  name='user_name'
                  type='text'
                  placeholder='Your Name'
                  class='input-box'
                />
              </div>

              <div className='input-wrapper'>
                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  name='user_email'
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
                name='user_message'
                placeholder='your message'
                className='input-box'
                rows='4'
              />
            </div>

            <div className='flex justify-center'>
              <Button
                type='submit'
                value={isLoading ? "Sending..." : "Send Message"}
                isLoading={isLoading}
              />
            </div>
          </form>
        </div>
      </section>

      {showToast ? (
        <Toast type={status} onClose={() => setShowToast(false)} />
      ) : null}
    </>
  );
}

export default Contact;
