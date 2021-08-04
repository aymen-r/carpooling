import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Post = ({ el }) => {
  return (
    <div style={{ width: "80%", margin: "20px" }}>
      <Card>
        <Link to={`/trips/${el._id}`}>
          <Card.Header as="h5">
            {el.origin} ==&gt; {el.destination}
          </Card.Header>
        </Link>
        <Card.Body>
          <Card.Title>{el.user.name}</Card.Title>
          <Card.Text>Description: {el.description}</Card.Text>
          <Card.Text>Available seats: {el.seats}</Card.Text>

          <Card.Text> Posted on: {el.createdAt.split("T")[0]}</Card.Text>

          <Button className="btn-outline-info" variant="info">
            Book this trip
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
