import React from "react";
import "./style.css";

interface ButtonProps {
  value: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  value,
  type = "button",
  onClick,
}) => {
  return (
    <button type={type} onClick={onClick} className="login-button">
      {value}
    </button>
  );
};

export default Button;