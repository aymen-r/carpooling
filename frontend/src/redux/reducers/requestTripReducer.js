import {
  REQUEST_TRIP_LIST_FAIL,
  REQUEST_TRIP_LIST_REQUEST,
  REQUEST_TRIP_LIST_SUCCESS,
  GET_ONE_REQUEST_TRIP,
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
    default:
      return state;
  }
};
