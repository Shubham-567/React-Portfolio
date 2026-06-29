import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CustomToastContainer() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastClassName={() => "relative flex p-4 min-h-16 rounded-xl justify-between overflow-hidden cursor-pointer bg-background-300/90 backdrop-blur-xl border border-txt-300/10 text-txt-100 font-sans shadow-2xl mb-4"}
      bodyClassName={() => "flex text-sm font-medium p-2"}
      progressClassName="bg-primary"
    />
  );
}
