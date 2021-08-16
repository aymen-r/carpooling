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
  ONE_REQUEST_RESET,
  REQUEST_UPDATE_RESET,
  REQUEST_DELETE_REQUEST,
  REQUEST_DELETE_SUCCESS,
  REQUEST_DELETE_FAIL,
  CREATE_REQUEST_TRIP_RESET,
} from "../constants/requestTripConstants";

export const requestTripsListReducer = (
  state = { requests: [], oneRequest: {} },
  action
) => {
  switch (action.type) {
    case REQUEST_TRIP_LIST_REQUEST:
      return { loading: true, requests: [] };
    case REQUEST_TRIP_LIST_SUCCESS:
      return { loading: false, requests: action.payload };
    case REQUEST_TRIP_LIST_FAIL:
      return { loading: false, error: action.payload };

    case GET_ONE_REQUEST_TRIP:
      return { loading: false, oneRequest: action.payload };
    case ONE_REQUEST_RESET:
      return { loading: false, oneRequest: {} };
    default:
      return state;
  }
};

export const createRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_REQUEST_TRIP_REQUEST:
      return { loading: true };
    case CREATE_REQUEST_TRIP_SUCCESS:
      return { loading: false, success: true, newRequest: action.payload };
    case CREATE_REQUEST_TRIP_RESET:
      return { newRequest: {} };

    case CREATE_REQUEST_TRIP_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export const UserRequestsReducer = (state = { requests: [] }, action) => {
  switch (action.type) {
    case USER_REQUESTS_REQUEST:
      return { loading: true, requests: [] };

    case USER_REQUESTS_SUCCESS:
      return { loading: false, requests: action.payload };

    case USER_REQUESTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const updateRequestReducer = (state = { oneRequest: {} }, action) => {
  switch (action.type) {
    case REQUEST_UPDATE_REQUEST:
      return { loading: true, success: false, oneRequest: {} };

    case USER_REQUESTS_SUCCESS:
      return { loading: false, success: true, oneRequest: action.payload };
    case REQUEST_UPDATE_RESET:
      return { success: false };

    case USER_REQUESTS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deleteRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_DELETE_REQUEST:
      return { loading: true };
    case REQUEST_DELETE_SUCCESS:
      return { loading: false, success: true };
    case REQUEST_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
