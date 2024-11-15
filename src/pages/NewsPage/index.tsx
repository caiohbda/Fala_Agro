import Header from "../../components/Header";
import Card from "../../components/Card";
import "./style.css";

const NewsPage = () => {
  return (
    <div>
      <Header />
      <div className="button-container">
        <button className="create-event-button">Publicar Notícia</button>
      </div>
      <main className="feed">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <Card />
        ))}
      </main>
    </div>
  );
};

export default NewsPage;
