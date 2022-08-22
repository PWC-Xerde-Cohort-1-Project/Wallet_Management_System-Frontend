import React, { useContext } from "react";
import felix from "../../images/felix.png";
import caleb from "../../images/caleb.png";
import { ThemeContext } from "../../context/ThemeContext";
import "./carousel.css";

const Ttt = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="row mb-5 mt-4">
      <div className=" col-lg-6" style={{ paddingLeft: "60px" }}>
        <div className="cardfoot">
          <div
            className="card"
            id={isDarkMode ? "To" : "Top"}
            style={{ width: "23rem", borderRadius: "0.9rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={felix}
                  alt="felix"
                />
                Caleb Jude
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">
                Get to save your money with Spara Wallet. <br />
                Start saving smartly with any of our savings products and get up
                to 20% interest returns per annum. Withdraw your money at your
                own convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-6" style={{ paddingLeft: "60px" }}>
        <div className="cardfoot">
          <div
            className="card"
            id={isDarkMode ? "To" : "Top"}
            style={{ width: "23rem", borderRadius: "0.9rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={caleb}
                  alt="caleb"
                />
                Felix Morgan
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">
                Get to save your money with Spara Wallet. <br />
                Start saving smartly with any of our savings products and get up
                to 20% interest returns per annum. Withdraw your money at your
                own convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ttt;
