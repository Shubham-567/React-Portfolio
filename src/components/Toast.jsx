import { CircleAlert, CircleCheckBig, CircleX } from "lucide-react";
import { useEffect } from "react";

function Toast({ onClose, type = "success" }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type.toLowerCase() === "success";
  const isError = type.toLowerCase() === "error";

  const icon = isSuccess ? (
    <CircleCheckBig className='text-primary size-10 pb-3' />
  ) : (
    isError && <CircleAlert className='text-red-500 size-10 pb-3' />
  );

  const title = isSuccess
    ? "Message Sent!"
    : isError && "Something went wrong!";
  const message = isSuccess
    ? "Thank you for your message. I will get back to you soon."
    : isError && "Sorry, your message could not be sent. Please try again.";

  //ToDo: add GSAP animation

  return (
    <div className='fixed max-md:top-20 max-md:right-6 md:bottom-6 md:right-14 w-80 bg-background-300/50 backdrop-blur-2xl text-txt-100 rounded-lg shadow-lg z-45 ring ring-background-300'>
      <div className='p-4'>
        <div className='flex items-start gap-3'>
          {icon}
          <div className='space-y-1'>
            <p className='font-semibold'>{title}</p>
            <p className='text-sm text-txt-300'>{message}</p>
          </div>
        </div>

        <button
          className='absolute top-3 right-4 cursor-pointer'
          onClick={onClose}>
          <CircleX className='text-txt-100 size-4 hover:text-primary' />
        </button>
      </div>

      {/* remaining time line */}
      <div className='h-1 bg-primary rounded-full animate-progress' />
    </div>
  );
}

export default Toast;
