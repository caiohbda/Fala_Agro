import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import News from "../../components/News";
import Carousel from "../../components/Carousel";
import { useEffect, useState } from "react";
import newsService from "../../services/newsService";
import { NoticiasResponse } from "../../interfaces/INoticiaAPI";

const HomePage = () => {
  const [data, setData] = useState<NoticiasResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const noticiasData = await newsService.getNoticias();
        setData(noticiasData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Erro ao carregar as notícias");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchNoticias();
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
        {data?.noticias?.slice(0, 3).map((noticia, index) => (
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
