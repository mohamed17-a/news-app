import { useEffect, useState } from "react";
import { getSports } from "../../Services/news.service";
import { Link } from "react-router-dom";
const Sports = () => {
  let userId = JSON.parse(localStorage.getItem("signedUser"));
  let [news, setNews] = useState([]);
  useEffect(() => {
    getSports()
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mt-5 mb-5 min-vh-100">
      <h1 className="text-center mb-2 mt-1">
        Top headlines about Real Madrid from 10th July till now
      </h1>
      <h3 className="text-center">Hello User {userId.id}</h3>
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
                alt="News picture"
              />
              <div className="card-body">
                <h5 className="card-title text-bg-secondary badge fs-6">
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

export default Sports;
