import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NoticiasResponse } from "../../interfaces/INoticiaAPI";
import { useFetch } from "../../hooks/useFetch";
import "./style.css";

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
        <img className="img-news" src={data?.noticias[0].image} alt="Notícia" />
        <div className="container-news">
          <h1>{data?.noticias[0].content}</h1>
          <div className="content">
            <p>
              Um navio que veio da Holanda e atracou no Porto de Santos, em
              outubro, trouxe o primeiro carregamento de fertilizante lower
              carbon, ou seja, um material produzido com baixíssimo carbono que
              irá auxiliar na descarbonização do agronegócio brasileiro.
              Comparado ao mesmo fertilizante produzido a partir de gás natural
              de origem fóssil, esse insumo, elaborado com matéria-prima
              renovável, apresenta uma redução de até 90% na emissão de gases de
              efeito estufa. O primeiro lote será destinado à Cooxupé, uma das
              principais cooperativas de café do mundo, sediada em Alfenas, em
              Minas Gerais, que conta com cerca de 20 mil cooperados. A
              agricultura é responsável por mais de um terço das emissões
              globais de gases de efeito estufa, de acordo com a FAO, órgão da
              ONU para alimentação e agricultura. A maior parte da emissão dos
              poluentes vem das etapas de produção que levam os alimentos para a
              fazenda, o que inclui os fertilizantes e correspondem a quase 40%
              dos gases emitidos. De acordo com levantamento feito pelo
              Economist Intelligence Unit (EIU), os impactos climáticos têm um
              custo projetado em US$ 7,9 trilhões até 2050. No começo de
              dezembro, o Brasil começará a produção interna do fertilizante de
              baixíssimo carbono, utilizando biometano, na planta da empresa
              Yara, em Cubatão, em São Paulo.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetNewsPage;
