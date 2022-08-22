import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DesktopFour.css";
import img1 from "../../images/DesktopFour-img.png";
import img2 from "../../images/card-img.png";
import img3 from "../../images/./security-img.png";

const DesktopFour = () => {
  return (
    <>
      <div className="container-md ">
        <div>
          <h3>
            With Spara{" "}
            <span className="heading"> Wallet, Your Transactions</span> are
            Faster
          </h3>
          <p>
            Simple, quick transactions. Say goodbye to queues. Spara is the
            quickest and easiest method to manage your funds and conduct
            transactions without having to wait in long bank lines.
          </p>

          <img
            className="imageOne img-fluid "
            src={img1}
            alt="Transaction description"
          />
        </div>

        <div className="container-md ">
          <h3>
            With Spara <span className="debit"> Debit, You </span> good to go.
          </h3>
          <p>
            You can use your Spara wallet to make purchases of goods, services,
            and worldwide subscriptions using our real debit cards. Utilize your
            Spara card to easily make payments offline or online and to
            participate in our generous rewards program.
          </p>
          <img src={img2} alt="ATM card" className="img-fluid imageTwo" />
        </div>
      </div>

      <div className="display-flex-md container-fluid  m-5 g-0 align-items-center justify-content">
        <div>
          <Row>
            <Col>
              <img src={img3} alt="security" className="img-fluid imgThree " />
            </Col>
            <Col>
              <table cellspacing="15">
                <tr>
                  <td>
                    <strong>
                      <h3>Security Is Our Priority </h3>
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      Your Security and Privacy are important to us.
                      contemporary fraud detection
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      Strong cryptography is employed to store and encrypt your
                      data. We regularly check our systems for security
                      concerns.Your cash is secure with us.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      We adhere to PCI DSS requirements. Your transactions are
                      protected and encrypted at all times.
                    </p>
                  </td>
                </tr>
              </table>
            </Col>
          </Row>
        </div>
      </div>

      {/* <div className="display-flex-md row m-5 g-0 align-items-center justify-content-center  ">
        <div className="col-4 col-lg-4">
          <img src={img3} alt="security" className="img-fluid imgThree" />
        </div>
        <div className="col-6 align-text-left">
          <table cellspacing="15">
            <tr>
              <td>
                <strong>
                  <h3>Security Is Our Priority </h3>
                </strong>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Your Security and Privacy are important to us. contemporary
                  fraud detection
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Strong cryptography is employed to store and encrypt your
                  data. We regularly check our systems for security
                  concerns.Your cash is secure with us.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  We adhere to PCI DSS requirements. Your transactions are
                  protected and encrypted at all times.
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div> */}
    </>
  );
};

export default DesktopFour;
