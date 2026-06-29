import { toast } from 'react-toastify';
import { CircleCheckBig, CircleAlert } from 'lucide-react';

export const notifySuccess = (title = "Message Sent!", message = "Thank you for your message. I will get back to you soon.") => {
  toast.success(
    <div className="space-y-1 ml-2">
      <p className="font-semibold text-base">{title}</p>
      <p className="text-sm text-txt-300 font-normal">{message}</p>
    </div>, 
    {
      icon: <CircleCheckBig className="text-primary size-7 mt-1" />,
      progressStyle: { background: 'var(--color-primary)' },
    }
  );
};

export const notifyError = (title = "Something went wrong!", message = "Sorry, your message could not be sent. Please try again.") => {
  toast.error(
    <div className="space-y-1 ml-2">
      <p className="font-semibold text-base">{title}</p>
      <p className="text-sm text-txt-300 font-normal">{message}</p>
    </div>, 
    {
      icon: <CircleAlert className="text-red-500 size-7 mt-1" />,
      progressStyle: { background: '#ef4444' }, // red-500
    }
  );
};
