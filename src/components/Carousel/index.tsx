import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import { fetchNoticias } from "../../services/newsService";
import { NoticiasResponse } from "../../interfaces/INoticiaAPI";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

const Carousel = () => {
  const [data, setData] = useState<NoticiasResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNoticias = async () => {
      try {
        const noticias = await fetchNoticias();
        setData(noticias);
      } catch (err) {
        const errorMessage =
          (err as Error).message || "Erro ao carregar notícias.";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    loadNoticias();
  }, []);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <Swiper
      className="swiper"
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {data?.noticias?.slice(3, 6).map((noticia, index) => (
        <SwiperSlide className="slider" key={index}>
          <div className="slide-container">
            <h1 className="slide-title">{noticia.title}</h1>
            <p className="slide-content">{noticia.content}</p>
          </div>
          <img className="slide-img" src={noticia.image} alt="Notícia" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
