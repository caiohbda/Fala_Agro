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
                <img className="img-news" src={data?.noticias[12].image} alt="" />
                <div className="container-news">
                    <h1>{data?.noticias[12].title}</h1>
                    <p>Informações: {data?.noticias[12].content}</p>
                    <input type="button" value="Entrar em Contato" className="create-event-button" />
                </div>
            </main>
            <Footer />
        </div>
    )
};

export default GetNewsPage;