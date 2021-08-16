import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_RESET,
} from "../constants/UserConstants";

// login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      "http://localhost:5000/users/login",
      { email, password },
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("userInformations", JSON.stringify(data));
    // dispatch(getUserDetails(data._id));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data,
    });
    console.log(error.response.data);
  }
};

// logout
export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userInformations");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
};

// create a new user
export const register = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.post(
      "http://localhost:5000/users/register",
      user,
      config
    );

    console.log(data);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    // const { email, password } = data.response;
    // login(email, password);
    // localStorage.setItem("token", JSON.stringify(data.token));

    localStorage.setItem("userInformations", JSON.stringify(data.response));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.data,
    });
    // console.log(error.response);
  }
};

// get user details by id
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    // const {
    //   userLogin: { token },
    // } = getState();
    const token = localStorage.getItem("token").replace(/"/g, "");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    // console.log(`Bearer ${token}`);

    const { data } = await axios.get(
      `http://localhost:5000/users/${id}`,
      config
    );

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    // localStorage.setItem("userInformations", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.data,
    });
    // console.log(error.response.data.message);
  }
};

// update a user profile
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });

    // const {
    //   userLogin: { userInformations },
    // } = getState();

    const userInformations = JSON.parse(
      localStorage.getItem("userInformations")
    );
    const token = localStorage.getItem("token").replace(/"/g, "");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(userInformations);

    const { data } = await axios.put(
      `http://localhost:5000/users/${userInformations._id}`,
      user,
      config
    );
    console.log(data);

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });

    localStorage.setItem("userInformations", JSON.stringify(data.response));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: error,
    });
    console.log(error);
  }
};
