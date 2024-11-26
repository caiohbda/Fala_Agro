import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import newsService from "../../services/newsService";
import { NoticiasResponse } from "../../interfaces/INoticiaAPI";
import { Link } from "react-router-dom";
import "./style.css";

const BussinessPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<NoticiasResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedState, setSelectedState] = useState<string>("");

  const handleStateChange = (state: string) => {
    setSelectedState(state);
  };

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

  const filteredNews = data?.noticias.filter((noticia) =>
    selectedState ? noticia.state === selectedState : true
  );

  const displayedNews = selectedState
    ? filteredNews?.slice(0, 6)
    : filteredNews?.slice(12, 16);

  const handlePublishBusiness = () => {
    navigate("/publicar-negocio");
  };

  if (isLoading) return <p>Carregando...</p>;

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
          <Link to="/negocio" key={noticia.title}>
            <Card image={noticia.image} title={noticia.title} />
          </Link>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default BussinessPage;
