import { useEffect, useState } from "react";
import { getNews } from "../../Services/news.service";
import { Link } from "react-router-dom";

const Home = () => {
  const userId = JSON.parse(localStorage.getItem("signedUser"));
  let [news, setNews] = useState([]);
  useEffect(() => {
    getNews()
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mt-5 mb-5 min-vh-100">
      <div className="row">
        <div className="col-md-12 d-flex flex-column gap-2 text-center mb-2 mt-1">
          <h1 className="">Top headlines from TechCrunch right now</h1>
          <h3 className="">Hello User {userId.id}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex flex-wrap gap-2">
          {news.map((n) => (
            <div
              key={news.indexOf(n)}
              className="card text-bg-dark"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top"
                src={n.urlToImage}
                alt={"news image"}
              />
              <div className="card-body">
                <h5 className="card-title badge fs-6 text-bg-info text-wrap">
                  {n.author}
                </h5>
                <p className="card-text">{n.title}</p>
                <p className="card-text">{n.description}</p>
                <Link to={n.url} className="btn btn-primary">
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
