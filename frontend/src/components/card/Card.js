import React from "react";
// import { Row, Col } from "react-bootstrap";
import "./card.css";

const Card = ({ obj }) => {
  return (
    // <Row>
    //   <Col md={8}>{obj.origin} aymen</Col>
    //   <Col md={4}></Col>
    // </Row>
    <div className="background">
      <div className="container1">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>
                  {obj.origin} <span style={{ color: "white" }}>to</span>{" "}
                  {obj.destination}
                </span>
              </div>
              <div className="app-contact time">
                leaving on {obj.date} at {obj.time}
              </div>

              {obj.price ? (
                <div className="app-contact">
                  {obj.seats} seats:
                  <span style={{ color: "#0ff80f" }}>
                    {" "}
                    {obj.price}$ per seat
                  </span>
                </div>
              ) : (
                <div className="app-contact">{obj.seats} seats wanted</div>
              )}
            </div>
            <div className="screen-body-item">
              <div className="app-title">
                <span>{obj.user.name}</span>
              </div>
              {obj.carType && (
                <div className="app-contact">Car Type: {obj.carType}</div>
              )}

              <div className="app-contact">
                description: "{obj.description}"
              </div>

              {/* <div className="app-form-group buttons">
                  <button className="app-form-button">CANCEL</button>
                  <button className="app-form-button">SEND</button>
                </div> */}
            </div>
          </div>
        </div>
        {/* <div className="credits">
          inspired by
          <a
            className="credits-link"
            href="https://dribbble.com/shots/2666271-Contact"
          >
            <svg className="dribbble" viewBox="0 0 200 200">
              <g stroke="#ffffff" fill="none">
                <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
                <path
                  d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345"
                  stroke-width="20"
                ></path>
                <path
                  d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951"
                  stroke-width="20"
                ></path>
                <path
                  d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103"
                  stroke-width="20"
                ></path>
              </g>
            </svg>
            Gururaj
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
