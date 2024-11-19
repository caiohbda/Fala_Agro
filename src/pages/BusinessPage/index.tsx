import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useFetch } from "../../hooks/useFetch";
import { NoticiasResponse } from "../../interfaces/NoticiaAPI";
import "./style.css";

const BussinessPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch<NoticiasResponse>(
    "http://127.0.0.1:3333/noticias"
  );

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  const handlePublishBusiness = () => {
    navigate("/publicar-negocio");
  };

  return (
    <div>
      <Header />
      <div className="button-containerr">
        <button className="create-event-button" onClick={handlePublishBusiness}>
          Publicar Novo Negócio
        </button>
      </div>
      <main className="feed">
        {data?.noticias.slice(12, 16).map((noticia) => (
          <Card image={noticia.image} title={noticia.title} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default BussinessPage;
