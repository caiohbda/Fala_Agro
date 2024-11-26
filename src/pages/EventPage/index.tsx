import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useFetch } from "../../hooks/useFetch";
import { NoticiasResponse } from "../../interfaces/INoticiaAPI";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EventPage = () => {
  const { data, isLoading, error } = useFetch<NoticiasResponse>(
    "http://127.0.0.1:3333/noticias"
  );

  const [selectedState, setSelectedState] = useState<string>("");

  const navigate = useNavigate();

  const handleNavigateToPostEvent = () => {
    navigate("/publicar-evento");
  };

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    console.log("Estado selecionado:", state);
  };

  const filteredNews = data?.noticias.filter((noticia) => {
    console.log("Filtrando notícia:", noticia.state);
    return selectedState ? noticia.state === selectedState : true;
  });

  const displayedNews = selectedState
    ? filteredNews?.slice(0, 6)
    : filteredNews?.slice(6, 12);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

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
          <Link to="/evento">
            <Card
              key={noticia.content}
              image={noticia.image}
              title={noticia.title}
            />
          </Link>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;
