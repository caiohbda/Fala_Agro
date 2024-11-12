import "./style.css";
import Header from "../../components/Header";
import News from "../../components/News";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <main className="feed">
        <div className="container">
          <div className="news carousel-container">
          </div>
            {[1, 2, 3].map(() => <News />)}
        </div>
      </main>
    </div>
  );
};


export default HomePage;
