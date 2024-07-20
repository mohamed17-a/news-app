import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg 
                    navbar-dark bg-dark py-3"
      >
        <div className="container">
          <Link className="navbar-brand fw-bolder" to="/">
            News App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link fs-5 mx-1" to="/">
                Home
              </Link>
              <Link className="nav-link fs-5 mx-1" to="/sports">
                Sports
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
