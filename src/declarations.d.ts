// src/declarations.d.ts
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "react-input-mask" {
  import React from "react";

  interface InputMaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mask: string;
    maskChar?: string | null;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

  export default class InputMask extends React.Component<InputMaskProps> {}
}
