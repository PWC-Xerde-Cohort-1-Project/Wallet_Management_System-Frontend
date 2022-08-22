import React from 'react'
import './Values.css'
import en from '../Images/en.jpg'
import di from '../Images/di.jpg'
import co from '../Images/co.jpg'
import inn from '../Images/in.jpg'
const Values = () => {
    return (
      <section className="values-wrapper max-wrapper">
        <div className="values">
          <div className="values-header">
            <h1>Our Values</h1>
            <p>
              When you combine human excellence, expertise and technology, this
              is what you get.
            </p>
          </div>
        </div>
        <div className="our values">
          <div className="values-cards-wrapper">
            <div className="card" style={{ width: "30rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  <img src={en} alt="Entrepreneurship" />
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Entrepreneurship
                </h6>
                <p className="card-text">
                  Ability to identify problems, and collaboratively solve them
                  to create opportunities for everyone.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "30rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  <img src={di} alt="Diversity" />
                </h5>
                <h6 className="card-subtitle mb-2 text-muted text-center">
                  Diversity
                </h6>
                <p className="card-text">
                  Ability to identify problems, and collaboratively solve them
                  to create opportunities for everyone.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "30rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  <img src={inn} alt="Innovation"/>
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">Innovation</h6>
                <p className="card-text">
                  Ability to identify problems, and collaboratively solve them
                  to create opportunities for everyone.
                </p>
              </div>
            </div>
            <div className="card" style={{ width: "30rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  <img src={co} alt="Community" />
                </h5>
                <h6 className="card-subtitle mb-2 text-muted pt-3">
                  Community
                </h6>
                <p className="card-text">
                  Ability to identify problems, and collaboratively solve them
                  to create opportunities for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Values