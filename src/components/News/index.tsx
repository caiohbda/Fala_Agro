import logo from "../../assets/img/logo.png"
import "./style.css"

const News = () => {
    return(
            <div className="news">
                <img src={logo} alt="logo fala agro" />
                <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, commodi ex!</p>
                <a href="#" className="details news-link">Saiba Mais</a>
            </div>
    )
}

export default News;