import React from "react";
import { Card } from "react-bootstrap";

const Posts = () => {
  return (
    <>
      <div className="title">
        <h1>Going Somewhere?</h1>
      </div>
      <div>
        <Card>
          <Card.Header as="h5">Post a trip</Card.Header>

          <Card.Body>
            <Card.Title>
              You are driving and have empty seats in your car you are looking
              to fill?
            </Card.Title>
          </Card.Body>
        </Card>
        <hr />
        <Card>
          <Card.Header as="h5">Post a request</Card.Header>

          <Card.Body>
            <Card.Title>You are looking for a ride?</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Posts;
