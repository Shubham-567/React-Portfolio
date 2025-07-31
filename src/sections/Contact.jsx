import { useRef, useState } from "react";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";
import Toast from "../components/Toast";
import { Loader, Loader2 } from "lucide-react";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [status, setStatus] = useState("error");
  const form = useRef();

  const serviceId = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
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
      .finally(() => {
        setIsLoading(false);
        setShowToast(true);
      });
  };

  return (
    <>
      <section id='contact' className='section-container'>
        <h3 className='section-heading'>
          Contact
          <span className='line' />
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
                  className='input-box'
                  required
                />
              </div>

              <div className='input-wrapper'>
                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  name='user_email'
                  type='email'
                  placeholder='Your Email'
                  className='input-box'
                  required
                />
              </div>
            </div>
            <div className='input-wrapper'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='user_message'
                placeholder='Your Message'
                className='input-box'
                rows='4'
                required
              />
            </div>

            <div className='flex justify-center'>
              <Button
                type='submit'
                isDisabled={isLoading}
                className={`${
                  isLoading ? "cursor-not-allowed bg-background-200" : ""
                }`}>
                {isLoading && <Loader2 className='animate-spin' />}
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
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
