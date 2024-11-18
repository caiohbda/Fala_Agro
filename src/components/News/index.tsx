import React from 'react';
import "./style.css"

interface NewsProps{
    img: string,
    title: string,
    content: string
}

const News: React.FC<NewsProps> = ({
    img, 
    title, 
    content
}) => {
    return(
            <div className="news">
                <img className="news-img" src={img} alt="teste" />
                <div className="news-container">
                    <p className="news-title">{title}</p>
                    <p className="news-content">{content}</p>
                    <a href="#" className="news-link">Saiba Mais</a>
                </div>
            </div>
    )
}

export default News;