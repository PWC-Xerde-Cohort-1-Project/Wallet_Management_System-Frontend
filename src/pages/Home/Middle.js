import React from "react";
import image5 from "../../images/phone.png";

const mp = {
  english: {
    hea: "Do More With Spara Wallet",
    mp: "With Spara Wallet, you can pay goods and send funds! Here's what Spara Wallet offers to global users",
  },
  french: {
    hea: "Faites-en plus avec le portefeuille Spara",
    mp: "Avec Spara Wallet, vous pouvez payer des marchandises et envoyer des fonds ! Voici ce que Spara Wallet offre aux utilisateurs du monde entier",
  },
};

const Middle = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-4 mb-5" style={{ paddingLeft: "60px" }}>
          <h3 className="colorwhite">Do More With Spara Wallet</h3>

          <p className="colorwhiten">
            With Spara Wallet, you can pay goods and send funds! Here's what
            Spara Wallet offers to global users.
          </p>
        </div>
        <div className=" row justify-content-center align-items-center mb-5">
          <img
            style={{ width: "400px", height: "400px" }}
            src={image5}
            alt="phone"
          />
        </div>
      </div>
    </div>
  );
};

export default Middle;
