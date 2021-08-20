import React from "react";

import { Link } from "react-router-dom";
import "../css/post.css";

const Post = ({ el }) => {
  return (
    <div style={{ width: "80%", margin: "20px" }}>
      <Link to={`/trips/${el._id}`}>
        <div className="post">
          <div className="post-head">
            <div>
              {el.origin} ==&gt; {el.destination}
            </div>
            <div>posted by: {el.user.name}</div>
            <div>{el.price}$</div>
          </div>
          <div className="price">{el.seats} seats vailable</div>
        </div>
      </Link>

      {/* <Card>
        <Link to={`/trips/${el._id}`}>
          <Card.Header as="h5">
            {el.origin} ==&gt; {el.destination}
          </Card.Header>
        </Link>
        <Card.Body>
          <Card.Title>{el.user.name}</Card.Title>
          <Card.Text>Description: {el.description}</Card.Text>
          <Card.Text>Available seats: {el.seats}</Card.Text>

          <Card.Text> Posted on: {el.time}</Card.Text>

          <Button className="btn-outline-info" variant="info">
            Book this trip
          </Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Post;
