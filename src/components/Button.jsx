function Button({ value, icon = "", padding = "px-8 py-4" }) {
  return (
    <button className={`primary-btn ${padding}`}>
      {icon}
      {value}
    </button>
  );
}

export default Button;
