import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useFetch } from "../../hooks/useFetch";
import { NoticiasResponse } from "../../interfaces/NoticiaAPI";
import "./style.css";

const EventPage = () => {
  const { data, isLoading, error } = useFetch<NoticiasResponse>(
    "http://127.0.0.1:3333/noticias"
  );

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <Header />
      <div className="button-containerr">
        <button className="create-event-button">Publicar Evento</button>
      </div>
      <main className="feed">
        {data?.noticias.slice(6, 12).map((noticia) => (
          <Card image={noticia.image} title={noticia.title} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;
