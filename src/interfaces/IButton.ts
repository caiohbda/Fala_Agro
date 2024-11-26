export interface ButtonProps {
  value: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}
