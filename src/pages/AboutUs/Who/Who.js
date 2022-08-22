import React from 'react'
import './Who.css'
import cardOne from '../Images/Online.jpg'
import cardTwo from '../Images/Bitcoin.jpg'

const Who = () => {
  return (
    <section className="max-wrapper who-wrapper">
      <div className="who">
        <h1>Who we are</h1>
        <div className="who-content">
          <div className="who-card who-card-1">
            <div className="who-card-img">
              <img src={cardOne} alt="card_img1" className='' />
            </div>
            <div className="who-card-content">
              <p>We are more than a payment company. We believe everyone should be able to enjoy financial and social inclusion, without regard for physical borders, boundaries, or even social status.</p>
            </div>
          </div>
          <div className="who-card who-card-2">
            <div className="who-card-img">
              <img src={cardTwo} alt="card_img2" />
            </div>
            <div className="who-card-content">
              <p>Over 60% of people in Africa remain unbanked and can't access the most basic financial services to invest in their education and businesses, which limits their full potential. Nobody should be denied access to participate in the world economy because of their circumstances or background.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Who