import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useFetch } from '../../hooks/useFetch';
import { NoticiasResponse } from '../../interfaces/NoticiaAPI';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

const Carousel = () => {

    const {data, isLoading, error} = useFetch<NoticiasResponse>("http://127.0.0.1:3333/noticias");

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return(
        <Swiper className='swiper'
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{delay: 5000}}
        pagination={{clickable: true}}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data?.noticias?.slice(3, 6).map(noticia => (

        <SwiperSlide className='slider'>
            <div className="slide-container">
                <h1 className='slide-title'>{noticia.title}</h1>
                <p className="slide-content">{noticia.content}</p>
            </div>
            <img className="slide-img" src={noticia.image} alt="" />
        </SwiperSlide>
        ))}
      </Swiper>
    );
  };

export default Carousel;