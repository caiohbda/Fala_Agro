import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useFetch } from "../../hooks/useFetch";
import { NoticiasResponse } from "../../interfaces/NoticiaAPI";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate

const NewsPage = () => {
  const { data, isLoading, error } = useFetch<NoticiasResponse>(
    "http://127.0.0.1:3333/noticias"
  );

  const navigate = useNavigate(); // Defina o hook de navegação

  const handleCreateNews = () => {
    navigate("/publicar-noticia"); // Roteamento para a página de criar notícia
  };

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <Header />
      <div className="button-containerr">
        <button className="create-event-button" onClick={handleCreateNews}>
          Publicar Notícia
        </button>
      </div>
      <main className="feed">
        {data?.noticias.slice(0, 6).map((noticia) => (
          <Card
            key={noticia.content}
            image={noticia.image}
            title={noticia.title}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
