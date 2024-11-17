import {useEffect, useState} from "react";
import axios from "axios";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import News from "../../components/News";
import Carousel from "../../components/Carousel";
import { NoticiasResponse } from "../../interfaces/NoticiaAPI";


const HomePage = () => {
  const [data, setData] = useState<NoticiasResponse>({noticias: []});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3333/noticias")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="homepage">
      <Header />
      <Main>
      <div className="carousel-container">
          <Carousel />
      </div>
        {data.noticias.slice(0, 3).map((noticia, index) => (
          <News
            key={index}
            img={noticia.image}
            title={noticia.title}
            content={noticia.content}
          />
        ))}
      </Main>
      <Footer />
    </div>
  );
};


export default HomePage;
