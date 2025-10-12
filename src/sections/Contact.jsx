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
          Contact Me
          <span className='line' />
        </h3>

        <div className='py-6 md:max-w-9/10 lg:max-w-3/4 mx-auto'>
          <p className='text-txt-300 text-center mb-6 md:px-10'>
            Have a project in mind or want to connect? Drop me a message below,
            and I'll get back to you as soon as possible.
          </p>

          <form ref={form} onSubmit={sendEmail} className='space-y-5'>
            <div className='flex max-md:flex-col items-center gap-4'>
              <div className='flex flex-col gap-1 w-full'>
                <label
                  htmlFor='name'
                  className='font-mono text-sm text-txt-200'>
                  Name
                </label>
                <input
                  id='name'
                  name='user_name'
                  type='text'
                  placeholder='Your Name'
                  className='w-full bg-background-200 border border-background-300 text-txt-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors'
                  required
                />
              </div>

              <div className='flex flex-col gap-1 w-full'>
                <label
                  htmlFor='email'
                  className='font-mono text-sm text-txt-200'>
                  Email
                </label>
                <input
                  id='email'
                  name='user_email'
                  type='email'
                  placeholder='Your Email'
                  className='w-full bg-background-200 border border-background-300 text-txt-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors'
                  required
                />
              </div>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label
                htmlFor='message'
                className='font-mono text-sm text-txt-200'>
                Message
              </label>
              <textarea
                id='message'
                name='user_message'
                placeholder='Your Message'
                className='w-full bg-background-200 border border-background-300 text-txt-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors'
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
