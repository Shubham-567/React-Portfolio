import { useRef, useState } from "react";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";
import Toast from "../components/Toast";
import { Loader, Loader2, Mail, Send } from "lucide-react";
import { socials } from "../constants/constants";

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
          Get in Touch
          <span className='line' />
        </h3>

        <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 justify-between gap-8 bg-background-200 rounded-lg py-8 px-10 md:py-12 md:px-16'>
          {/* contact info */}
          <div className='space-y-4'>
            <h4 className='font-bold text-txt-100 md:text-2xl text-xl'>
              Let's Connect
            </h4>
            <p className='text-txt-300 mb-6 '>
              I'm currently seeking new opportunities, and my inbox is always
              open. Whether you have a question, a project proposal, or just
              want to connect, feel free to reach out. I'll get back to you as
              soon as possible!
            </p>

            {/* contacts */}
            <a
              href='mailto:shubhampatil1356@gmail.com'
              className='flex items-center gap-2 group cursor-pointer'>
              <div className='p-2 rounded-full bg-primary/10 group-hover:bg-primary/20'>
                <Mail className='w-6 h-6 text-primary' />
              </div>
              <div>
                <span className='text-xs text-txt-300'>Email me at</span>
                <p className='group-hover:text-primary'>
                  shubhampatil1356@gmail.com
                </p>
              </div>
            </a>

            <div className='flex items-center gap-2 group cursor-pointer'>
              <div className='p-2 rounded-full bg-primary/10 group-hover:bg-primary/20'>
                <Send className='w-6 h-6 text-primary' />
              </div>
              <div>
                <span className='text-xs text-txt-300'>Find me on</span>
                <ul className='flex items-center gap-4 mt-1'>
                  {socials.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.name}>
                        <a
                          href={link.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='block text-txt-200 hover:text-primary transition-all duration-300 transform hover:-translate-y-1'>
                          <Icon className='size-6' />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* contact form */}
          <form ref={form} onSubmit={sendEmail} className='space-y-5'>
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor='name' className='font-mono text-sm text-txt-200'>
                Name
              </label>
              <input
                id='name'
                name='user_name'
                type='text'
                placeholder='Your Name'
                className='w-full bg-background-300 border border-background-300 text-txt-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors'
                required
              />
            </div>

            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor='email' className='font-mono text-sm text-txt-200'>
                Email
              </label>
              <input
                id='email'
                name='user_email'
                type='email'
                placeholder='Your Email'
                className='w-full bg-background-300 border border-background-300 text-txt-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors'
                required
              />
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
                className='w-full bg-background-300 border border-background-300 text-txt-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors'
                rows='4'
                required
              />
            </div>

            <div className='flex justify-end'>
              <Button
                type='submit'
                isDisabled={isLoading}
                className={`${
                  isLoading ? "cursor-not-allowed bg-background-300" : ""
                }`}>
                {isLoading && <Loader2 className='animate-spin' />}
                {isLoading ? "Sending..." : "Send Message"}
                {!isLoading && <Send className='size-6 ml-2' />}
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
