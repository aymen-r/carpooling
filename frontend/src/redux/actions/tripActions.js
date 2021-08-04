import {
  TRIP_LIST_FAIL,
  TRIP_LIST_REQUEST,
  TRIP_LIST_SUCCESS,
  GET_ONE_TRIP,
} from "../constants/tripConstants";
import axios from "axios";

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
