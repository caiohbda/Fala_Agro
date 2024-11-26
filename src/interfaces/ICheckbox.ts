import { UseFormRegisterReturn } from "react-hook-form";

export interface CheckboxProps {
  className?: string;
  type: string;
  id: string;
  register: UseFormRegisterReturn;
  htmlFor: string;
  value: string;
}
