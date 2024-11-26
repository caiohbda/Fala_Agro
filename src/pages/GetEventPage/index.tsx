import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NoticiasResponse } from "../../interfaces/INoticiaAPI";
import { useFetch } from "../../hooks/useFetch";
import "./style.css"

const GetNewsPage = () => {
    const { data, isLoading, error } = useFetch<NoticiasResponse>(
        "http://127.0.0.1:3333/noticias"
      );
    
    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;
    
    return (
        
        <div>
            <Header />
            <main className="main-news">
                <img className="img-news" src={data?.noticias[6].image} alt="" />
                <div className="container-news">
                    <h1>{data?.noticias[6].title}</h1>
                    <p>A feira de tecnologia agrícola e-Agro abriu suas portas nesta quinta-feira, dia 7, e se estenderá até sábado (9), no Centro de Convenções de Salvador. Em seu terceiro ano na capital, o evento reúne uma diversidade de produtos e soluções para o agronegócio, destacando desde o artesanato e itens autênticos da Bahia até inovações tecnológicas, startups, soluções digitais e rodadas de negócios. O objetivo principal é aproximar o campo da cidade, promovendo conexões e conhecimento para o público urbano.</p>
                </div>
            </main>
            <Footer />
        </div>
    )
};

export default GetNewsPage;