import React from "react";
import image1 from "../../images/Awoof.jpg";
import image2 from "../../images/card.png";
import "../../App.css";

const go = {
  french: {
    gh: "Spara Awoof",
    gob: "Où que vous soyez, ajoutez de l'argent à votre porte-monnaie Spara. Vous pouvez rechargez rapidement votre compte par virement bancaire ou débit/crédit cartes.from the comfort of your homes or on-the-go. Pay for your cable",
    paymp:
      "Effectuez des paiements en ligne avec votre compte Spara. Effectuez vos paiements dans le confort de votre foyer ou en déplacement. Payez votre câble électricité, taxes et plus.",
    paym: "Payments",
  },
  english: {
    gh: " Spara Awoof",
    gob: " No matter where you are, add money to your Spara wallet.You can quickly top up your account with bank transfers or debit/credit cards.",
    paymp:
      "Make online payments with your Spara account. Make your payments from the comfort of your homes or on-the-go. Pay for your cable electricity, tax and more.",
    paym: "Paiements",
  },
};
const GridTh = () => {
  return (
    <div className="row mb-5">
      <div className="col-lg-6" style={{ paddingLeft: "60px" }}>
        <div className="cardfoot mb-4">
          <div
            className="card"
            style={{ width: "23rem", borderRadius: "0.9rem", height: "253px" }}
          >
            <div className="card-body">
              <h5 className="card-title">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={image1}
                  alt="awoof"
                />
                Spara Awoof
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">
                No matter where you are, add money to your Spara wallet.You can
                quickly top up your account with bank transfers or debit/credit
                cards.
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
                  src={image1}
                  alt="ethereum"
                />
                Payments
              </h5>
              <h6 className="card-subtitle mb-2 text-muted"></h6>
              <p className="card-text">
                Make online payments with your Spara account. Make your payments
                from the comfort of your homes or on-the-go. Pay for your cable
                electricity, tax and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridTh;
