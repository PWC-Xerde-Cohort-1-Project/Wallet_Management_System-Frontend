import React from "react";
import image1 from "../../images/Ethereum.png";
import image2 from "../../images/card.png";
import "../../App.css";

const go = {
  french: {
    gh: "Des économies",
    gob: "Économisez votre argent avec Spara Wallet.Commencez à épargner intelligemment avec l'un de nos produits d'épargne et levez-vous jusqu'à 20 % d'intérêts par an. Retirez votre argent à votre propre convenance.",
  },
  english: {
    gh: "Savings",
    gob: "Get to save your money with Spara Wallet. Start saving smartly with any of our savings products and get up to 20% interest returns per annum. Withdraw your money at your own convenience.",
  },
};

const GridO = () => {
  return (
    <div className="row mb-5 mt-4">
      <div className=" col-lg-6" style={{ paddingLeft: "60px" }}>
        <div className="cardfoot">
          <div
            className="card"
            style={{ width: "23rem", borderRadius: "0.9rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={image1}
                  alt="ethereum"
                />
                Savings
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
      <div className="col-lg-6 justify-content-center text-align-center">
        <img src={image2} alt="creditcard" style={{ paddingLeft: "60px" }} />
      </div>
    </div>
  );
};

export default GridO;
