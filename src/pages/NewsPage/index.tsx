import { useState, useEffect } from "react";
import { newsService } from "../../services/newsService";
import { NoticiasResponse } from "../../interfaces/INoticiaAPI";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

interface NewsPageProps {
  selectedState: string;
}

const NewsPage = ({ selectedState }: NewsPageProps) => {
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

  // Se selectedState estiver vazio, não aplicamos filtro
  const filteredNews = data?.noticias.filter((noticia) =>
    selectedState ? noticia.state === selectedState : true
  );

  // Exibir as 6 primeiras notícias
  const limitedNews = filteredNews?.slice(0, 6);

  if (isLoading) return <p>Carregando...</p>;
  if (!data || data.noticias.length === 0)
    return <p>Não há notícias disponíveis.</p>;

  return (
    <div>
      <main className="feed">
        {limitedNews?.map((noticia) => (
          <Link to="/noticia" key={noticia.title}>
            <Card image={noticia.image} title={noticia.title} />
          </Link>
        ))}
      </main>
    </div>
  );
};

export default NewsPage;
