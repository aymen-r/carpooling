import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ obj }) => {
  console.log(obj);
  return (
    <div className="background">
      <div className="container1">
        {obj.user && (
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
                  <span>
                    <span
                      style={{
                        color: "white",
                        fontSize: "20px",
                      }}
                    >
                      Created by:
                    </span>

                    <Link to={`/profile/${obj.user.name}/${obj.user._id}`}>
                      {" "}
                      {obj.user.name}
                    </Link>
                  </span>
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
        )}
      </div>
    </div>
  );
};

export default Card;
