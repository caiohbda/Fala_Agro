import Header from "../../components/Header";
import Card from "../../components/Card";
import "./style.css";

const EventPage = () => {
  return (
    <div>
      <Header />
      <div className="button-container">
        <button className="create-event-button">Criar evento</button>
      </div>
      <main className="feed">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <Card key={index} />
        ))}
      </main>
    </div>
  );
};

export default EventPage;
