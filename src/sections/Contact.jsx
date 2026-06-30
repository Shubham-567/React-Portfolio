import { useRef, useState } from "react";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";
import { notifySuccess, notifyError } from "../utils/toast";
import { Loader2, Mail, Send } from "lucide-react";
import { socials } from "../constants/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
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
          notifySuccess();
        },
        (error) => {
          console.log("FAILED...", error.text);
          notifyError();
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".contact-info", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      rotationY: 10,
      transformOrigin: "left center",
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".contact-form", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      x: 50,
      opacity: 0,
      rotationY: -10,
      transformOrigin: "right center",
      duration: 1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <>
      <section ref={containerRef} id='contact' className='section-container relative'>
        <h3 className='section-heading'>
          Get in Touch
          <span className='line' />
        </h3>

        <div className='w-full max-w-5xl mx-auto relative group'>
          {/* Ambient Glow */}
          <div className='absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-1000 pointer-events-none rounded-2xl'></div>

          <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-8 md:gap-12 bg-background-200/40 backdrop-blur-xl border border-txt-300/10 rounded-2xl py-8 px-5 sm:px-8 md:py-14 md:px-12 shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative z-10'>
            
            {/* contact info */}
            <div className='space-y-6 md:space-y-8 contact-info'>
              <div>
                <h4 className='font-bold text-txt-100 md:text-3xl text-2xl mb-3 md:mb-4'>
                  Let's Connect
                </h4>
                <p className='text-txt-300 leading-relaxed text-sm md:text-base'>
                  I'm currently seeking new opportunities, and my inbox is always
                  open. Whether you have a question, a project proposal, or just
                  want to connect, feel free to reach out. I'll get back to you as
                  soon as possible!
                </p>
              </div>

              {/* contacts */}
              <div className='space-y-4 md:space-y-6'>
                <a
                  href='mailto:shubhampatil1356@gmail.com'
                  className='flex items-center gap-3 md:gap-4 group/mail cursor-pointer p-3 md:p-4 rounded-xl hover:bg-background-300/50 border border-transparent hover:border-txt-300/10 transition-all duration-300'>
                  <div className='p-2.5 md:p-3 rounded-full bg-primary/10 group-hover/mail:bg-primary/20 group-hover/mail:scale-110 transition-all duration-300'>
                    <Mail className='w-5 h-5 md:w-6 md:h-6 text-primary' />
                  </div>
                  <div className="overflow-hidden">
                    <span className='text-[10px] md:text-xs font-mono text-txt-300 uppercase tracking-wider block mb-0.5'>Email me at</span>
                    <p className='text-txt-100 text-sm md:text-base font-medium group-hover/mail:text-primary transition-colors duration-300 truncate'>
                      shubhampatil1356@gmail.com
                    </p>
                  </div>
                </a>

                <div className='flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl'>
                  <div className='p-2.5 md:p-3 rounded-full bg-primary/10'>
                    <Send className='w-5 h-5 md:w-6 md:h-6 text-primary' />
                  </div>
                  <div>
                    <span className='text-[10px] md:text-xs font-mono text-txt-300 uppercase tracking-wider mb-1 block'>Find me on</span>
                    <ul className='flex items-center gap-3 md:gap-4 mt-1.5 md:mt-2'>
                      {socials.map((link) => {
                        const Icon = link.icon;
                        return (
                          <li key={link.name}>
                            <a
                              href={link.url}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='block p-2 text-txt-200 bg-background-300/50 border border-txt-300/10 rounded-xl hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg'>
                              <Icon className='size-4 md:size-5' />
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* contact form */}
            <form ref={form} onSubmit={sendEmail} className='space-y-4 md:space-y-6 contact-form flex flex-col justify-center mt-2 md:mt-0'>
              <div className='flex flex-col gap-1.5 md:gap-2 w-full group/input'>
                <label htmlFor='name' className='font-mono text-[10px] md:text-xs uppercase tracking-widest text-txt-200 group-focus-within/input:text-primary transition-colors'>
                  Name
                </label>
                <input
                  id='name'
                  name='user_name'
                  type='text'
                  placeholder='Your Name'
                  className='w-full bg-background-300/50 backdrop-blur-sm border border-txt-300/10 text-txt-100 placeholder-txt-300/50 p-3 md:p-4 text-sm md:text-base rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 hover:border-txt-300/30'
                  required
                />
              </div>

              <div className='flex flex-col gap-1.5 md:gap-2 w-full group/input'>
                <label htmlFor='email' className='font-mono text-[10px] md:text-xs uppercase tracking-widest text-txt-200 group-focus-within/input:text-primary transition-colors'>
                  Email
                </label>
                <input
                  id='email'
                  name='user_email'
                  type='email'
                  placeholder='Your Email'
                  className='w-full bg-background-300/50 backdrop-blur-sm border border-txt-300/10 text-txt-100 placeholder-txt-300/50 p-3 md:p-4 text-sm md:text-base rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 hover:border-txt-300/30'
                  required
                />
              </div>
              
              <div className='flex flex-col gap-1.5 md:gap-2 w-full group/input'>
                <label
                  htmlFor='message'
                  className='font-mono text-[10px] md:text-xs uppercase tracking-widest text-txt-200 group-focus-within/input:text-primary transition-colors'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='user_message'
                  placeholder='Your Message'
                  className='w-full bg-background-300/50 backdrop-blur-sm border border-txt-300/10 text-txt-100 placeholder-txt-300/50 p-3 md:p-4 text-sm md:text-base rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 hover:border-txt-300/30 resize-none'
                  rows='4'
                  required
                />
              </div>

              <div className='flex justify-center md:justify-end mt-2'>
                <Button
                  type='submit'
                  isDisabled={isLoading}
                  className={`w-auto px-6 md:px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isLoading ? "cursor-not-allowed opacity-70" : "hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-1 group/btn"
                  }`}>
                  {isLoading && <Loader2 className='animate-spin size-5 mr-2' />}
                  {isLoading ? "Sending..." : "Send Message"}
                  {!isLoading && <Send className='size-5 ml-2 group-hover/btn:translate-x-1 transition-transform' />}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
