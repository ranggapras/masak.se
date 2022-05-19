import React from "react";

const Button = ({ children, style }) => {
  return (
    <button
      type="button"
      class="btn"
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
