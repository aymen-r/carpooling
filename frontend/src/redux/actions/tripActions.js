import {
  TRIP_LIST_FAIL,
  TRIP_LIST_REQUEST,
  TRIP_LIST_SUCCESS,
  GET_ONE_TRIP,
  TRIP_CREATE_SUCCESS,
  TRIP_CREATE_REQUEST,
  TRIP_CREATE_FAIL,
  USER_TRIPS_REQUEST,
  USER_TRIPS_SUCCESS,
  USER_TRIPS_FAIL,
  TRIP_UPDATE_REQUEST,
  TRIP_UPDATE_SUCCESS,
  TRIP_UPDATE_FAIL,
  TRIP_RESET,
  TRIP_UPDATE_RESET,
  TRIP_DELETE_REQUEST,
  TRIP_DELETE_SUCCESS,
  TRIP_DELETE_FAIL,
} from "../constants/tripConstants";
import axios from "axios";
import { logout } from "../actions/userActions";

export const listTrips = () => async (dispatch) => {
  try {
    dispatch({ type: TRIP_LIST_REQUEST });

    let result = await axios.get("http://localhost:5000/trips");
    dispatch({ type: TRIP_LIST_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: TRIP_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserTrips = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_TRIPS_REQUEST });

    const token = localStorage.getItem("token").replace(/"/g, "");

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    let result = await axios.get(
      `http://localhost:5000/trips/get/${id}`,
      config
    );
    dispatch({ type: USER_TRIPS_SUCCESS, payload: result.data });
    dispatch({ type: TRIP_RESET });
    dispatch({ type: TRIP_UPDATE_RESET });
  } catch (error) {
    dispatch({
      type: USER_TRIPS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOneTrip = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`http://localhost:5000/trips/${id}`);
    dispatch({ type: GET_ONE_TRIP, payload: result.data });
  } catch (error) {
    dispatch({
      type: TRIP_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createTrip = (post) => async (dispatch) => {
  try {
    dispatch({ type: TRIP_CREATE_REQUEST });
    const token = localStorage.getItem("token").replace(/"/g, "");

    console.log(token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/trips",
      post,
      config
    );
    console.log(data);

    dispatch({ type: TRIP_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TRIP_CREATE_FAIL,
      payload: error,
    });
  }
};

// update a trip!:
export const updateTrip = (id, trip) => async (dispatch) => {
  try {
    dispatch({ type: TRIP_UPDATE_REQUEST });

    const token = localStorage.getItem("token").replace(/"/g, "");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `http://localhost:5000/trips/${id}`,
      trip,
      config
    );
    console.log(data);

    dispatch({ type: TRIP_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TRIP_UPDATE_FAIL,
      payload: error,
    });
    console.log(error);
  }
};

// delete a trip

export const deleteTrip = (id) => async (dispatch) => {
  try {
    dispatch({ type: TRIP_DELETE_REQUEST });

    const token = localStorage.getItem("token").replace(/"/g, "");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete(`http://localhost:5000/trips/${id}`, config);

    dispatch({ type: TRIP_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "the user is not authorized") {
      dispatch(logout());
    }
    dispatch({
      type: TRIP_DELETE_FAIL,
      payload: message,
    });
  }
};

// export const bookTrip = (id) => async (dispatch, getState) => {
//   try {
//     const { data } = await axios.get(`http://localhost:5000/trips/${id}`);
//     console.log("data: ", data);
//     dispatch({ type: BOOKING_TRIP, payload: data });
//     localStorage.setItem(
//       "bookedTrips",
//       JSON.stringify(getState().booking.bookedTrips)
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
