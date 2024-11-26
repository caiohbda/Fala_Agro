import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import newsService from "../../services/newsService";
import { NoticiasResponse } from "../../interfaces/INoticiaAPI";
import "./style.css";

const GetBusinessPage = () => {
  const [data, setData] = useState<NoticiasResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const noticiasData = await newsService.getNoticias();
        setData(noticiasData);
      } catch (error) {
        console.error("Erro ao carregar as notícias", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  if (isLoading) return <p>Carregando...</p>;
  if (!data || data.noticias.length === 0) {
    return <p>Não há notícias disponíveis.</p>;
  }

  return (
    <div>
      <Header />
      <main className="main-news">
        <img className="img-news" src={data?.noticias[12].image} alt="" />
        <div className="container-news">
          <h1>{data?.noticias[12].title}</h1>
          <p>Informações: {data?.noticias[12].content}</p>
          <input
            type="button"
            value="Entrar em Contato"
            className="create-event-button"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetBusinessPage;
