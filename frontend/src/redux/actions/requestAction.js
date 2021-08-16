import {
  REQUEST_TRIP_LIST_FAIL,
  REQUEST_TRIP_LIST_REQUEST,
  REQUEST_TRIP_LIST_SUCCESS,
  GET_ONE_REQUEST_TRIP,
  CREATE_REQUEST_TRIP_REQUEST,
  CREATE_REQUEST_TRIP_SUCCESS,
  CREATE_REQUEST_TRIP_FAIL,
  USER_REQUESTS_REQUEST,
  USER_REQUESTS_SUCCESS,
  USER_REQUESTS_FAIL,
  REQUEST_UPDATE_REQUEST,
  REQUEST_UPDATE_SUCCESS,
  REQUEST_UPDATE_FAIL,
  REQUEST_UPDATE_RESET,
  ONE_REQUEST_RESET,
  REQUEST_DELETE_REQUEST,
  REQUEST_DELETE_SUCCESS,
  REQUEST_DELETE_FAIL,
} from "../constants/requestTripConstants";
import axios from "axios";
import { logout } from "../actions/userActions";

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

export const createNewRequest = (post) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_REQUEST_TRIP_REQUEST });
    const {
      userLogin: { token },
    } = getState();
    console.log(token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(
      "http://localhost:5000/request_trip",
      post,
      config
    );
    console.log(data);
    dispatch({ type: CREATE_REQUEST_TRIP_SUCCESS });
  } catch (error) {
    dispatch({
      type: CREATE_REQUEST_TRIP_FAIL,
      payload: error,
    });
  }
};

export const getUserRequests = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_REQUESTS_REQUEST });

    const {
      userLogin: { token },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    let result = await axios.get(
      `http://localhost:5000/request_trip/get/${id}`,
      config
    );
    dispatch({ type: USER_REQUESTS_SUCCESS, payload: result.data });
    dispatch({ type: ONE_REQUEST_RESET });

    dispatch({ type: REQUEST_UPDATE_RESET });
  } catch (error) {
    dispatch({
      type: USER_REQUESTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// update a request!:
export const requestUpdate = (id, request) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_UPDATE_REQUEST });

    const token = localStorage.getItem("token").replace(/"/g, "");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `http://localhost:5000/request_trip/${id}`,
      request,
      config
    );
    console.log(data);

    dispatch({ type: REQUEST_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REQUEST_UPDATE_FAIL,
      payload: error,
    });
    console.log(error);
  }
};

// delete a request!:
export const deleteRequest = (id) => async (dispatch) => {
  try {
    dispatch({ type: REQUEST_DELETE_REQUEST });

    const token = localStorage.getItem("token").replace(/"/g, "");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete(`http://localhost:5000/request_trip/${id}`, config);

    dispatch({ type: REQUEST_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "the user is not authorized") {
      dispatch(logout());
    }
    dispatch({
      type: REQUEST_DELETE_FAIL,
      payload: message,
    });
  }
};
