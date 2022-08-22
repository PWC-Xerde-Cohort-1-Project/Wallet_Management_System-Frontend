import React from 'react'
import './Why.css'
import cardTwo from '../Images/Coins.jpg'
import pay from "../Images/pay.jpg";

const Why = () => {
  return (
    <section className="max-wrapper who-wrapper pb-5">
      <div className="who">
        <h1>Why we do it</h1>
        <div className="who-content">
          <div className="who-card who-card-1">
            <div className="who-card-img">
              <img src={cardTwo} alt="card_img1" />
            </div>
            <div className="who-card-content">
              <p>Spara is a one-stop mobile-based platform for payment, transportation, food & grocery delivery, and other important services in your everyday life. Millions of users rely on Spara everyday to send and receive money, pay bills, and order food and groceries.</p>
            </div>
          </div>
          <div className="who-card who-card-2">
            <div className="who-card-img">
              <img src={pay} alt="pay" />
            </div>
            <div className="who-card-content">
              <p>With a passionate team, sophisticated mobile platform, and a fast-growing community of users, Spara is a making financial services more efficient for millions of users and it starts with the ability to pay and have access to the right opportunities at the right time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why