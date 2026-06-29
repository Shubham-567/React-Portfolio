import React from 'react';

function Button({
  className = "",
  type = "button",
  variant = "primary", // primary, outline, ghost
  isDisabled = false,
  onClick,
  children,
}) {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 font-mono font-medium transition-all duration-300 focus:outline-none overflow-hidden active:scale-95";
  
  const variants = {
    primary: "bg-primary text-background-100 border border-primary hover:bg-background-100 hover:text-primary",
    outline: "bg-transparent text-primary border border-primary hover:bg-primary/10",
    ghost: "bg-transparent text-txt-200 border border-transparent hover:text-primary hover:bg-primary/10",
  };

  // Provide sensible defaults if not overridden by className
  const defaultPadding = className.includes("p-") || className.includes("px-") || className.includes("py-") ? "" : "px-6 py-3";
  const defaultRounding = className.includes("rounded") ? "" : "rounded-xl";

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${defaultPadding} ${defaultRounding} ${isDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer"} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
        {children}
      </span>
    </button>
  );
}

export default Button;
