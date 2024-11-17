import React from 'react';
import "./style.css";

interface CardProps {
  image?: string,
  title?: string,
}

const Card: React.FC<CardProps> = ({
  image,
  title
}) => {
    return(
        <div className="feed-item">
          <div className="feed-container">
            <h2>{title}</h2>
          </div>
          <img src={image} alt="imagem da noticia" />
        </div>
    )
}

export default Card;