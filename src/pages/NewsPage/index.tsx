import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import newsService from "../../services/newsService";
import { Link } from "react-router-dom";
import { NoticiasResponse } from "../../interfaces/INoticiaAPI";
import { useNavigate } from "react-router-dom";

const NewsPage = () => {
  const [data, setData] = useState<NoticiasResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const noticiasData = await newsService.getNoticias();
        setData(noticiasData);
      } catch (error) {
        setError("Erro ao carregar as notícias");
        console.error("Erro ao carregar as notícias", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  const handleCreateNews = () => {
    navigate("/publicar-noticia");
  };

  const handleStateChange = (state: string) => {
    setSelectedState(state);
  };

  const filteredNews = data?.noticias.filter((noticia) =>
    selectedState ? noticia.state === selectedState : true
  );

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!data || data.noticias.length === 0) {
    return <p>Não há notícias disponíveis.</p>;
  }

  return (
    <div>
      <Header onStateChange={handleStateChange} />
      <div className="button-containerr">
        <button className="create-event-button" onClick={handleCreateNews}>
          Publicar Notícia
        </button>
      </div>
      <main className="feed">
        {filteredNews?.slice(0, 6).map((noticia) => (
          <Link to="/noticia">
            <Card image={noticia.image} title={noticia.title} />
          </Link>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
