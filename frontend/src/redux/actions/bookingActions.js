import axios from "axios";
import {
  BOOK_TRIP_FAIL,
  BOOK_TRIP_REQUEST,
  BOOK_TRIP_SUCCESS,
  USER_BOOKINGS_FAIL,
  USER_BOOKINGS_REQUEST,
  USER_BOOKINGS_SUCCESS,
  BOOKING_DELETE_REQUEST,
  BOOKING_DELETE_SUCCESS,
  BOOKING_DELETE_FAIL,
  BOOK_TRIP_RESET,
} from "../constants/bookingConstants";
import { logout } from "../actions/userActions";

export const getUserBookings = () => async (dispatch) => {
  try {
    dispatch({ type: USER_BOOKINGS_REQUEST });
    const user = JSON.parse(localStorage.getItem("userInformations"));
    const token = localStorage.getItem("token").replace(/"/g, "");

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    let result = await axios.get(
      `http://localhost:5000/bookings/get/userbookings/${user._id}`,
      config
    );

    dispatch({ type: USER_BOOKINGS_SUCCESS, payload: result.data });
    dispatch({ type: BOOK_TRIP_RESET });
  } catch (error) {
    dispatch({
      type: USER_BOOKINGS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const bookingTrip = (tripId) => async (dispatch) => {
  try {
    dispatch({ type: BOOK_TRIP_REQUEST });
    const user = JSON.parse(localStorage.getItem("userInformations"));
    const token = localStorage.getItem("token").replace(/"/g, "");

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    let result = await axios.post(
      `http://localhost:5000/bookings`,
      {
        bookedTrip: tripId,
        user: user._id,
      },
      config
    );

    dispatch({ type: BOOK_TRIP_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: BOOK_TRIP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// delete a  Booking

export const deleteBooking = (id) => async (dispatch) => {
  try {
    dispatch({ type: BOOKING_DELETE_REQUEST });

    const token = localStorage.getItem("token").replace(/"/g, "");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete(`http://localhost:5000/bookings/${id}`, config);

    dispatch({ type: BOOKING_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "the user is not authorized") {
      dispatch(logout());
    }
    dispatch({
      type: BOOKING_DELETE_FAIL,
      payload: message,
    });
  }
};
