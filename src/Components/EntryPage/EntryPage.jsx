import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { createUser, fetchUsers } from "../../Services/users.services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const EntryPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { signedUser, handlelogin, handlelogOut } = useContext(AuthContext);
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [usersList, setUsers] = useState([{}]);
  useEffect(() => {
    fetchUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  /*handle input change */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // handle empty email or password
    if (!formData.email || !formData.password) {
      Swal.fire("Error", "Email or Password cannot be empty", "error");
    }
    // validate email and password are in usersList or not
    const signed = usersList.filter(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (signed.length === 0) {
      Swal.fire(
        "Error",
        "Check that your Email and Password are written correctly",
        "error"
      );
    } else {
      handlelogin(signed[0]);
      navigateTo(`/home/${signed[0].id}`);
    }
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      const alreadyUser = usersList.filter((user) => {
        return user.email === formData.email;
      });
      if (alreadyUser.length > 0) {
        Swal.fire("Error", "There is already a user with this email", "error");
      } else {
        createUser(formData).then(() => {
          Swal.fire("Success", "You are now a user,Log in now!", "success");
        });
      }
    } else {
      Swal.fire("Error", "All inputs are required", "error");
    }
  };
  return (
    <div className="container mb-5 pb-5">
      <div className="row">
        <div className="col-md-12 w-100 mt-3 d-flex justify-content-center">
          <h1>Welcome to News App!</h1>
        </div>
      </div>
      <div className="row pb-3 mx-2 rounded-3 text-bg-dark d-flex justify-content-center">
        <div className="col-md-12 mt-3 p-4 rounded-3">
          {/* sign in form */}
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="email" className="form-label">
              Enter Your Email
            </label>
            <div className="input-group mb-2">
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Email*"
                aria-label="Email"
                value={formData.email}
                onChange={handleChange}
                aria-required="true"
              />
            </div>
            <label htmlFor="password" className="form-label">
              Enter Your Password
            </label>
            <div className="input-group mb-2 required">
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="password*"
                aria-label="Password"
                value={formData.password}
                onChange={handleChange}
                aria-required="true"
              />
            </div>
            <div className="input-group">
              <button
                className="btn btn-primary form-control py-2 fw-bolder"
                type="submit"
              >
                SIGN IN
              </button>
            </div>
          </form>
          {/* sign up form */}
          <div className="text-center pt-2">
            Don&apos;t have an account{" "}
            <button
              type="button"
              className="btn btn-primary d-inline"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Sign Up
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content text-bg-secondary">
                  <div className="modal-header">
                    <h2 className="modal-title fs-5 " id="exampleModalLabel">
                      Create Account
                    </h2>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <form onSubmit={handleSignupSubmit}>
                    <div className="modal-body">
                      <label htmlFor="name" className="form-label">
                        Enter Your Name
                      </label>
                      <div className="input-group mb-2">
                        <input
                          id="name"
                          name="name"
                          type="name"
                          className="form-control"
                          placeholder="Name*"
                          aria-label="name"
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          aria-required="true"
                        />
                      </div>
                      <label htmlFor="emailSignUp" className="form-label">
                        Enter Your Email
                      </label>
                      <div className="input-group mb-2">
                        <input
                          id="emailSignUp"
                          name="emailSignUp"
                          type="email"
                          className="form-control"
                          placeholder="Email*"
                          aria-label="Email"
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          aria-required="true"
                        />
                      </div>
                      <label htmlFor="passwordSignUp" className="form-label">
                        Enter Your Password
                      </label>
                      <div className="input-group mb-2 required">
                        <input
                          id="passwordSignUp"
                          name="passwordSignUp"
                          type="password"
                          className="form-control"
                          placeholder="password*"
                          aria-label="Password"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              password: e.target.value,
                            })
                          }
                          aria-required="true"
                          aria-describedby="passwordHelpBlock"
                        />
                        <div id="passwordHelpBlock" className="form-text">
                          Your password must be 6-18 characters long, contain
                          letters and numbers, and must not contain spaces,
                          special characters, or emoji.
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>{" "}
            Now!
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
