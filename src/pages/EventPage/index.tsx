import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import newsService from "../../services/newsService";
import { NoticiasResponse } from "../../interfaces/INoticiaAPI";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EventPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<NoticiasResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedState, setSelectedState] = useState<string>("");

  const handleNavigateToPostEvent = () => {
    navigate("/publicar-evento");
  };

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    console.log("Estado selecionado:", state);
  };

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const noticiasData = await newsService.getNoticias();
        setData(noticiasData);
      } catch {
        // Removido o estado de erro, pois não é mais utilizado
      } finally {
        setIsLoading(false);
      }
    };

    fetchNoticias();
  }, []);

  const filteredNews = data?.noticias.filter((noticia) => {
    console.log("Filtrando notícia:", noticia.state);
    return selectedState ? noticia.state === selectedState : true;
  });

  const displayedNews = selectedState
    ? filteredNews?.slice(0, 6)
    : filteredNews?.slice(6, 12);

  if (isLoading) return <p>Carregando...</p>;

  return (
    <div>
      <Header onStateChange={handleStateChange} />
      <div className="button-containerr">
        <button
          className="create-event-button"
          onClick={handleNavigateToPostEvent}
        >
          Publicar Evento
        </button>
      </div>
      <main className="feed">
        {displayedNews?.map((noticia) => (
          <Link to="/evento" key={noticia.title}>
            <Card image={noticia.image} title={noticia.title} />
          </Link>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;
