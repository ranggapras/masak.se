import React from "react";

const Button = ({ children, style, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      class="btn"
      onClick={onClick}
      style={{
        background: "#ffad61",
        width: "15rem",
        borderRadius: "1rem",
        color: "#fff",
        fontWeight: "bold",
        marginTop: "1.5rem",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
