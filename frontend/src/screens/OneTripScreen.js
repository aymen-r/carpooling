import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Button, Alert } from "react-bootstrap";
import { getOneTrip } from "../redux/actions/tripActions";
import { Link } from "react-router-dom";
import Card from "../components/card/Card";
import { bookingTrip } from "../redux/actions/bookingActions";

const OneTripScreen = ({ match, history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { token } = userLogin;

  const dispatch = useDispatch();
  const tripsList = useSelector((state) => state.tripsList);
  const { oneTrip } = tripsList;

  const bookTrip = useSelector((state) => state.bookTrip);
  const { booking, success } = bookTrip;

  useEffect(() => {
    dispatch(getOneTrip(match.params.id));
  }, [dispatch, match]);

  // const bookingHandler = () => {
  //   history.push(`/my_booked_trips/${match.params.id}`);
  // };

  console.log(oneTrip);

  const bookingHandler = () => {
    if (!token) {
      history.push("/login");
    } else {
      dispatch(bookingTrip(match.params.id));
      history.push("/my_booked_trips");
    }
  };

  return (
    <div>
      {success && <Alert variant="success">{booking.message}</Alert>}
      {oneTrip ? (
        <Card obj={oneTrip} />
      ) : (
        // <div>{oneTrip.origin}</div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <div className="ONe">
        <Button className="btn btn-outline-light my-3" onClick={bookingHandler}>
          Book this trip
        </Button>

        <Link className="btn btn-outline-dark my-3" to="/trips">
          Back to Trips
        </Link>
      </div>
    </div>
  );
};

export default OneTripScreen;
