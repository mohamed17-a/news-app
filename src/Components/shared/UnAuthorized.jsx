import { Link } from "react-router-dom";
const MustLogin = () => {
  return (
    <section className="py-3 py-md-5 mt-2 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
                <span className="display-1 fw-bold">4</span>
                <i className="bi bi-exclamation-circle-fill text-warning display-4"></i>
                <span className="display-1 fw-bold bsb-flip-h">1</span>
              </h2>
              <h3 className="h2 mb-2">UnAuthroized</h3>
              <p className="mb-5">
                You Must have an account to use NewsApp ! Sign up Now!
              </p>
              <Link
                className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0"
                to="/"
                role="button"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MustLogin;
