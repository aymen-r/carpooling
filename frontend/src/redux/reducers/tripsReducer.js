import {
  TRIP_LIST_FAIL,
  TRIP_LIST_REQUEST,
  TRIP_LIST_SUCCESS,
  GET_ONE_TRIP,
} from "../constants/tripConstants";

export const tripsListReducer = (
  state = { trips: [], oneTrip: {} },
  action
) => {
  switch (action.type) {
    case TRIP_LIST_REQUEST:
      return { loading: true, trips: [] };

    case TRIP_LIST_SUCCESS:
      return { loading: false, trips: action.payload };

    case TRIP_LIST_FAIL:
      return { loading: false, error: action.payload };

    case GET_ONE_TRIP:
      return { loading: false, oneTrip: action.payload };

    default:
      return state;
  }
};
