import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Alert, ListGroup } from "react-bootstrap";
import { bookTrip } from "../redux/actions/tripActions";
import { Link } from "react-router-dom";

const UserBookedTrips = ({ match, history }) => {
  const tripId = match.params.id;
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.booking);
  const { bookedTrips } = booking;
  const userLogin = useSelector((state) => state.userLogin);
  const { token } = userLogin;

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else if (tripId) {
      dispatch(bookTrip(tripId));
    }
  }, [dispatch, tripId, token, history]);
  console.log("bookedTrips:", bookedTrips);
  return (
    <Row>
      <Col md={11}>
        <h1>My Booked Trips</h1>
        {bookedTrips.length === 0 ? (
          <Alert variant="info">
            You did not book any trip <Link to="/trips">Go Back</Link>
          </Alert>
        ) : (
          <ListGroup variant="flush">
            {bookedTrips.map((el) => (
              // <ListGroup.Item key={item._id}>
              //   <Row>
              //     <Col md={2}>{item.user.name}</Col>

              //     {/* <Col md={2}>
              //       <Button
              //         type="button"
              //         variant="light"
              //         onClick={() => removeFromCartHandler(item.product)}
              //       >
              //         <i className="fas fa-trash"></i>
              //       </Button>
              //     </Col> */}
              //   </Row>
              // </ListGroup.Item>
              <div className="post" key={el._id}>
                <div className="post-head">
                  <div>
                    {el.origin} ==&gt; {el.destination}
                  </div>
                  <div>posted by: {el.user.name}</div>
                  <div> Price: {el.price}$</div>
                </div>
                <div className="price">
                  <div>Time: {el.time}</div>
                  <div>Date: {el.date}</div>
                </div>
              </div>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
};

export default UserBookedTrips;
