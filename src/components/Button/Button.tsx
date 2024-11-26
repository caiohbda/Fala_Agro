import React from "react";
import "./style.css";
import { ButtonProps } from "../../interfaces/IButton";

const Button: React.FC<ButtonProps> = ({ value, type = "button", onClick }) => {
  return (
    <button type={type} onClick={onClick} className="login-button">
      {value}
    </button>
  );
};

export default Button;
