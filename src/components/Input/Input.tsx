import React from "react";
import "./style.css";
import { InputProps } from "../../interfaces/IInput";

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  register,
  error,
  onChange,
  maxLength,
  className = "",
}) => {
  return (
    <div className={`input-container ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        {...register}
        onChange={onChange}
        maxLength={maxLength}
        className="input-field"
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;
