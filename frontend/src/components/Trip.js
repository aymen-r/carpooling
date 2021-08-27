import React from "react";
import { Link } from "react-router-dom";
import "../css/post.css";

const Post = ({ el }) => {
  return (
    <div>
      {el.user && (
        <div className="post">
          <div className="courses-container">
            <div className="course">
              <div className="course-preview">
                <h2>
                  posted by:
                  <br />
                  {el.user.name}
                </h2>
              </div>
              <div className="course-info">
                <div className="progress-container"></div>
                <h6 className="price">{el.seats} seats available</h6>
                <h2>
                  {el.origin}
                  <img
                    src="https://snipstock.com/assets/cdn/png/1eca89145511beba3f0fdbc4c39bfd31.png"
                    style={{
                      width: "50px",
                      height: "20px",
                    }}
                    alt=""
                  />
                  {el.destination}
                </h2>
                <div className="price">{el.price}$</div>
                <br />
                <br />
                <br />
                <Link to={`/trips/${el._id}`}>
                  <button className="btn1">See more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
