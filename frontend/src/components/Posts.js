import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div className="post1">
      <div className="title">
        <h1>Going Somewhere?</h1>
      </div>
      <div>
        <Link to="/post_trip">
          <Card>
            <Card.Header
              as="h5"
              style={{
                color: "#ff5722",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              Post a trip
            </Card.Header>

            <Card.Body>
              <Card.Title>
                You are driving and have empty seats in your car you are looking
                to fill?
              </Card.Title>
            </Card.Body>
          </Card>
        </Link>

        <hr />
        <Link to="/post_request">
          <Card>
            <Card.Header
              as="h5"
              style={{ color: "green", fontSize: "25px", fontWeight: "bold" }}
            >
              Post a request
            </Card.Header>

            <Card.Body>
              <Card.Title>You are looking for a ride?</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Posts;
