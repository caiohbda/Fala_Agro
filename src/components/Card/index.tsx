import React from "react";
import "./style.css";
import { CardProps } from "../../interfaces/ICard";

const Card: React.FC<CardProps> = ({ image, title }) => {
  return (
    <div className="feed-item">
      <img src={image} alt="imagem da noticia" />
      <div className="feed-container">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
