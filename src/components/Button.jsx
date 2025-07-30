import { Loader } from "lucide-react";

function Button({
  value,
  icon = "",
  padding = "px-8 py-4",
  type = "text",
  isLoading = false,
}) {
  return (
    <button
      type={type}
      className={`primary-btn ${padding} ${
        isLoading ? "cursor-not-allowed bg-background-200" : ""
      }`}>
      {icon} {isLoading && <Loader className='animate-spin' />}
      {value}
    </button>
  );
}

export default Button;
