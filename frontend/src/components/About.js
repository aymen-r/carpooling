import React from "react";

const About = () => {
  return (
    <div className="home">
      <div className="carpooling-parag">
        <h1>
          CARPOOLING SERVICE:
          <p className="carpooling">
            the activity of a group of people travelling together in a car,
            especially to work or school.
          </p>
        </h1>
      </div>
      <div className="carpooling-img">
        <img
          src="https://static.vecteezy.com/ti/vecteur-libre/p1/147391-carpooling-concept-on-green-background-gratuit-vectoriel.jpg"
          alt=""
          style={{ width: "440px", height: "390px", borderRadius: "15px" }}
        />
      </div>
    </div>
  );
};

export default About;
