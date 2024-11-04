import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import "./style.css";

interface InputProps {
  label: string;
  id: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  className?: string;
}

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