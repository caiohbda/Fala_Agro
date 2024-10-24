import "./style.css";
import Header from "../../components/Header";
import Card from "../../components/Card";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <main className="feed">
        {[1, 2, 3, 4, 5, 6].map((_, index) => <Card key={index} />)}
      </main>
    </div>
  );
};

export default HomePage;
