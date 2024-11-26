import React from "react";
import "./style.css";
import { CheckboxProps } from "../../interfaces/ICheckbox";

const Checkbox: React.FC<CheckboxProps> = ({
  className = "",
  type,
  id,
  register,
  htmlFor,
  value,
}) => {
  return (
    <div className={`checkbox-container ${className}`}>
      <input type={type} id={id} {...register} />
      <label htmlFor={htmlFor}>{value}</label>
    </div>
  );
};

export default Checkbox;
