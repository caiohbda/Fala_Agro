import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useFetch } from "../../hooks/useFetch";
import { NoticiasResponse } from "../../interfaces/INoticiaAPI";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate
import { useState } from "react";

const NewsPage = () => {
  const { data, isLoading, error } = useFetch<NoticiasResponse>(
    "http://127.0.0.1:3333/noticias"
  );

  const [selectedState, setSelectedState] = useState<string>("");

  const navigate = useNavigate(); // Defina o hook de navegação

  const handleCreateNews = () => {
    navigate("/publicar-noticia"); // Roteamento para a página de criar notícia
  };

  const handleStateChange = (state: string) => {
    setSelectedState(state); // Atualiza o estado selecionado
  };

  // Filtra as notícias com base no estado selecionado
  const filteredNews = data?.noticias.filter((noticia) =>
    selectedState ? noticia.state === selectedState : true
  );

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

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
