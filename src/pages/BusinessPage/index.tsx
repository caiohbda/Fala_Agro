import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useFetch } from "../../hooks/useFetch";
import { NoticiasResponse } from "../../interfaces/INoticiaAPI";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const BussinessPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch<NoticiasResponse>(
    "http://127.0.0.1:3333/noticias"
  );

  const [selectedState, setSelectedState] = useState<string>("");

  const handleStateChange = (state: string) => {
    setSelectedState(state);
  };

  const filteredNews = data?.noticias.filter((noticia) =>
    selectedState ? noticia.state === selectedState : true
  );

  // Exibe as notícias de 12 a 16 ou as 6 primeiras do filtro
  const displayedNews = selectedState
    ? filteredNews?.slice(0, 6)
    : filteredNews?.slice(12, 16);

  const handlePublishBusiness = () => {
    navigate("/publicar-negocio");
  };

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <Header onStateChange={handleStateChange} />
      <div className="button-containerr">
        <button className="create-event-button" onClick={handlePublishBusiness}>
          Publicar Novo Negócio
        </button>
      </div>
      <main className="feed">
        {displayedNews?.map((noticia) => (
          <Link to="/negocio">
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

export default BussinessPage;
