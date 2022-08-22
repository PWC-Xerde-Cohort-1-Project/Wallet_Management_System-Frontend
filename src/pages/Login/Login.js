import React, { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Login.css";

import axios from "../../api/axios";
import Dashboard from "../Dashboard/Dashboard";
const LOGIN_URL = "/api/users/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  useEffect(() => {
    if (success || user) {
      navigate("/dashboard");
    }
  }, [user, success, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing User Email or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <Dashboard />
      ) : (
        <div className="container-fluid login">
          <img className="navbar-brand login-logo mt-3" src={logo} alt="" />
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div className="text-center">
            <h3 className="text-white fw-bold">Join The Most Fastest and</h3>
            <h3 className="text-white fw-bold trusted">Trusted Network</h3>
          </div>
          <h3 className="text-center fw-bold text-white login-text">Login</h3>
          <div className="container-fluid">
            <form
              className="d-flex flex-column container align-items-center"
              onSubmit={handleSubmit}
            >
              <div className="input-icons text-center">
                <i className="fa fa-user-circle-o icon"></i>
                <input
                  className="input-field"
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-icons text-center">
                <i
                  className={
                    isRevealPwd ? "fa fa-eye-slash icon" : "fa fa-eye icon"
                  }
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? "hide" : "show"}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                ></i>
                <input
                  className="input-field"
                  type={isRevealPwd ? "text" : "password"}
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  placeholder="Password"
                  required
                />
              </div>
              <a
                className="text-decoration-none text-white text-right mb-3 forgot-password"
                href="j"
              >
                Forgot Password
              </a>
              <button className="submit fw-bold" type="submit">
                Login
              </button>
            </form>
            <p className="text-white text-center mb-4">
              Don't have an account?{" "}
              <a className="text-decoration-none neutral-blue" href="/register">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
