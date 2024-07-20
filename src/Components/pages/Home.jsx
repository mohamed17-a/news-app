import { useEffect, useState } from "react";
import { getNews } from "../../Services/news.service";
import { Link } from "react-router-dom";

const Home = () => {
  let [news, setNews] = useState([]);
  useEffect(() => {
    getNews()
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mt-5 mb-5 min-vh-100">
      <h1 className="text-center mb-2 mt-1">
        Top headlines from TechCrunch right now
      </h1>
      <div className="row">
        <div className="col-md-12 d-flex flex-wrap gap-1">
          {news.map((n) => (
            <div
              key={news.indexOf(n)}
              className="card"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top"
                src={n.urlToImage}
                alt="News picture"
              />
              <div className="card-body">
                <h5 className="card-title">{n.author}</h5>
                <p className="card-text">{n.title}</p>
                <p className="card-text">{n.description}</p>
                <Link to={n.url} className="btn btn-dark">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
