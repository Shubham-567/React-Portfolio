function Button({ className = "px-8 py-4", type = "text", children }) {
  return (
    <button type={type} className={`primary-btn ${className}`}>
      {children}
    </button>
  );
}

export default Button;
