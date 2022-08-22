import React, { useRef, useState, useEffect } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./Register.css";
import logo from "../../images/logo.png";
import axios from "../../api/axios";
import OTP from "./OTP";

const USER_REGEX =
  /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/api/users";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [value, setValue] = useState("");
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ email: user, password: pwd }),
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Email Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <OTP />
      ) : (
        <div className="container-fluid register">
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
          <h3 className="text-center fw-bold text-white login-text">Sign Up</h3>
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
                  id="email"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />

                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  {"  "} 4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>

              <div className="password-field">
                <PhoneInput
                  defaultCountry="NG"
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
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
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  {"  "}
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
                </p>
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
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} /> {"  "}
                  Must match the first password input field.
                </p>
              </div>
              <div className="form-check text-white">
                <input
                  className="form-check-input border border-primary bg-transparent"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  required
                />
                <p className="text-white text-center mb-4">
                  I agree to Spara{" "}
                  <a className="neutral-blue" href="/signup">
                    terms of services
                  </a>{" "}
                  and{" "}
                  <a className="neutral-blue" href="/signup">
                    privacy policy
                  </a>
                </p>
              </div>

              <button
                disabled={!validPwd || !validMatch ? true : false} type="submit"
                className="submit fw-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
