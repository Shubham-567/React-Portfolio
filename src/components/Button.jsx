function Button({ value, icon = "", padding = "px-8 py-4", type = "text" }) {
  return (
    <button type={type} className={`primary-btn ${padding}`}>
      {icon}
      {value}
    </button>
  );
}

export default Button;
