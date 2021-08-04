import {
  REQUEST_TRIP_LIST_FAIL,
  REQUEST_TRIP_LIST_REQUEST,
  REQUEST_TRIP_LIST_SUCCESS,
  GET_ONE_REQUEST_TRIP,
} from "../constants/requestTripConstants";
import axios from "axios";

export const listRequests = () => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_TRIP_LIST_REQUEST });
    let result = await axios.get("http://localhost:5000/request_trip");
    dispatch({ type: REQUEST_TRIP_LIST_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({
      type: REQUEST_TRIP_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getOneRequest = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`http://localhost:5000/request_trip/${id}`);
    dispatch({ type: GET_ONE_REQUEST_TRIP, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
