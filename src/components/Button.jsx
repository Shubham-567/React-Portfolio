function Button({
  className = "px-8 py-4",
  type = "text",
  isDisabled = false,
  children,
}) {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`primary-btn ${className}`}>
      {children}
    </button>
  );
}

export default Button;
