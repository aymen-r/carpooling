import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/post.css";

const Post = ({ el }) => {
  return (
    <div style={{ width: "80%", margin: "20px" }}>
      <Link to={`/requests/${el._id}`}>
        <div className="post" style={{ background: "#78b97a" }}>
          <div className="post-head">
            <div>
              {el.origin} ==&gt; {el.destination}
            </div>
          </div>
          <div className="price">{el.seats} seats wanted</div>
        </div>
      </Link>
      {/* <Card>
        <Link to={`/requests/${el._id}`}>
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
            Contact traveller
          </Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Post;
