import React from "react";
import image1 from "../../images/mobile.png";
import image2 from "../../images/Teth.jpg";
import "../../App.css";

const go = {
  french: {
    gth: " Spara Mobile",
    gtob: "Avec Spara, vous pouvez effectuer des virements, paiements, retraits rapides et conversions. Ceci est facilement géré sur votre téléphone avec un connexion sécurisée au système.",
    dig: "Transfert numérique",
    digp: "Utilisez Spara pour envoyer des virements en ligne à vos proches. Déplacer et collecter vos fonds en utilisant vos devises préférées où qu'elles soient Peut être.",
  },
  english: {
    gth: "Savings",
    gtob: "Get to save your money with Spara Wallet. Start saving smartly with any of our savings products and get up to 20% interest returns per annum. Withdraw your money at your own convenience.",
    digh: "Digital Transfer",
    digp: " Use Spara to send online transfers to your loved ones. Move and collect your funds using your preferred currencies wherever they may be.Utilisez Spara pour envoyer des virements en ligne à vos proches. Déplacer et collecter vos fonds en utilisant vos devises préférées où qu'elles soient Peut être.",
  },
};

const GridT = () => {
  return (
    <div className="row mb-4">
      <div className="col-lg-6" style={{ paddingLeft: "60px" }}>
        <div className="cardfoot mb-4">
          <div
            className="card "
            style={{ width: "23rem", borderRadius: "0.9rem", height: "253px" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={image1}
                  alt="mobile"
                />
                Spara Mobile
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">
                With Spara you can make fast transfers, payments, withdrawals
                and conversions. This is easily managed on your phone with a
                secure system login.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6" style={{ paddingLeft: "60px" }}>
        <div className="cardfoot mt-2">
          <div
            className="card"
            style={{
              width: "23rem",
              borderRadius: "0.9rem",
              height: "253px",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={image2}
                  alt="tether"
                />
                Digital Transfer
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">
                Use Spara to send online transfers to your loved ones. Move and
                collect your funds using your preferred currencies wherever they
                may be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridT;
