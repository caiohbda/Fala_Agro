import { UseFormRegisterReturn } from "react-hook-form";

export interface InputProps {
  label: string;
  id: string;
  type: string;
  register: UseFormRegisterReturn;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  className?: string;
}
