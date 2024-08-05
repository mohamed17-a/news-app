import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const { handlelogOut } = useContext(AuthContext);
  function getSignedUserFromLocal() {
    return JSON.parse(localStorage.getItem("signedUser"))
      ? JSON.parse(localStorage.getItem("signedUser"))
      : {};
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
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
              <Link
                className="nav-link fs-5 mx-1"
                to={`/home/${getSignedUserFromLocal().id}`}
              >
                Home
              </Link>
              <Link
                className="nav-link fs-5 mx-1"
                to={`/sports/${getSignedUserFromLocal().id}`}
              >
                Sports
              </Link>
            </div>
            {Object.values(getSignedUserFromLocal()).length !== 0 && (
              <div className="nav-item dropdown text-light">
                <a
                  className="nav-link"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person fs-4"></i>
                </a>
                <ul className="dropdown-menu ">
                  <li>
                    <a className="dropdown-item">
                      Hello,{getSignedUserFromLocal().name}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item">
                      Email:{getSignedUserFromLocal().email}
                    </a>
                  </li>
                  <Link
                    className="dropdown-item"
                    to={`/`}
                    onClick={() => handlelogOut()}
                  >
                    Log Out
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
