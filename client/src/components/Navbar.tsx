import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./final copy.png";
import LoginSignupForm from "./LoginSignupForm";
import "./Navbar.css";

function Navbar() {
  const [showLoginSignup, setShowLoginSignup] = useState(false);

  const handleLoginSignupClose = () => {
    setShowLoginSignup(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Flight Finder Logo" style={{ width: "150px" }} />
        </Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button
              className="btn btn-outline-secondary"
              onClick={() => setShowLoginSignup(true)}
            >
              Login / Sign Up
            </button>
          </li>
        </ul>
      </div>

      <div
        className="modal"
        tabIndex={-1}
        role="dialog"
        style={{ display: showLoginSignup ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login / Sign Up</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleLoginSignupClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <LoginSignupForm />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
