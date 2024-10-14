import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck]);

  return (
    <div className="display-flex justify-space-between align-center">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark align-center">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            style={{ display: "flex", gap: "30px", paddingLeft: "15px" }}
          >
            Connect4Fun
          </a>{" "}
          <span className="navbar-text">
            where there’s a board there’s a way
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <div style={{ display: "flex", gap: "15px" }}>
                  {!loginCheck ? (
                    <button className="btn" type="button">
                      <Link to="/login">Login</Link>
                    </button>
                  ) : (
                    <button
                      className="btn"
                      type="button"
                      id="logout"
                      onClick={() => {
                        auth.logout();
                      }}
                    >
                      Logout
                    </button>
                  )}
                </div>
              </li>
              <li className="nav-item">
                <div>
                  <button className="btn" type="button">
                    <Link to="/hot-games">Hot Games</Link>
                  </button>
                </div>
              </li>
              <li className="nav-item">
                <div>
                  <button className="btn" type="button">
                    <Link to="/villian-list">Villian List</Link>
                  </button>
                </div>
              </li>
              <li className="nav-item">
                <button className="btn" type="button">
                  <Link to="/groups">Groups</Link>
                </button>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Session Options
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item">
                    <button className="btn" type="button">
                      <Link to="/calendar">Create an Event</Link>
                    </button>
                  </a>
                  <a className="dropdown-item">
                    <button className="btn" type="button">
                      <Link to="/summary">Summary</Link>
                    </button>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
