import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { Row, Col, Spinner, Alert, ListGroup } from "react-bootstrap";
import {
  deleteBooking,
  getUserBookings,
} from "../redux/actions/bookingActions";

// import { Link } from "react-router-dom";

const BookingScreen = ({ history }) => {
  const dispatch = useDispatch();
  const UserBooking = useSelector((state) => state.UserBooking);
  const { loading, bookings, error } = UserBooking;
  console.log(bookings);

  const userLogin = useSelector((state) => state.userLogin);
  const { token } = userLogin;

  const handleDelete = async (id) => {
    if (window.confirm("you want to unbook this trip?")) {
      await dispatch(deleteBooking(id));
    }

    dispatch(getUserBookings());
  };

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else {
      dispatch(getUserBookings());
    }
  }, [dispatch, token, history]);

  console.log("bookedTrips:", bookings);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status"></Spinner>
      ) : error ? (
        console.log(error)
      ) : bookings.length === 0 ? (
        <h1>You didn't book any trip</h1>
      ) : (
        // {}
        bookings &&
        bookings.map((el) => (
          <div key={el._id} className="booking-card">
            <div>
              booked on: {el.dateBooked.split("T")[0]} at{" "}
              {el.dateBooked.split("T")[1].split(".")[0]}
            </div>
            <div>
              from {el.bookedTrip.origin} to {el.bookedTrip.destination}
            </div>
            <div>leaving at {el.bookedTrip.time}</div>
            <div>on {el.bookedTrip.date}</div>
            <button
              className="btn-outline-danger btn-sm"
              onClick={() => handleDelete(el._id)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default BookingScreen;
