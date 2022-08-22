import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Check from "../../images/check.png";
import "./Register.css";

const Verified = () => {
  return (
    <div>
      <div className="container-fluid register">
        <img className="navbar-brand login-logo mt-3" src={logo} alt="" />

        <div className="text-center">
          <h3 className="text-white fw-bold">Join The Most Fastest and</h3>
          <h3 className="text-white fw-bold trusted">Trusted Network</h3>
        </div>
        <h3 className="text-center fw-bold text-white login-text">Verified</h3>
        <div className="text-center container">
          <img src={Check} alt="" />
          <br />
          <Link
            to="/login"
            className="text-decoration-none btn btn-primary text-white mt-3"
          >
            {" "}
            Login{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Verified;
