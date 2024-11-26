import React from "react";
import { MainProps } from "../../interfaces/IMainProps";
import "./style.css";

const Main: React.FC<MainProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
