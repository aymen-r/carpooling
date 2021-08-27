import {
  TRIP_LIST_FAIL,
  TRIP_LIST_REQUEST,
  TRIP_LIST_SUCCESS,
  GET_ONE_TRIP,
  TRIP_CREATE_SUCCESS,
  TRIP_CREATE_REQUEST,
  TRIP_CREATE_FAIL,
  TRIP_CREATE_RESET,
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
  BOOKING_TRIP,
  UNBOOK_TRIP,
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
    case TRIP_RESET:
      return { loading: false, oneTrip: {} };

    default:
      return state;
  }
};

export const postTripReducer = (state = {}, action) => {
  switch (action.type) {
    case TRIP_CREATE_REQUEST:
      return { loading: true, success: false };

    case TRIP_CREATE_SUCCESS:
      return { loading: false, success: true, trip: action.payload };

    case TRIP_CREATE_RESET:
      return { trip: {} };

    case TRIP_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UserTripsReducer = (state = { trips: [] }, action) => {
  switch (action.type) {
    case USER_TRIPS_REQUEST:
      return { loading: true, trips: [] };

    case USER_TRIPS_SUCCESS:
      return { loading: false, trips: action.payload };

    case USER_TRIPS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const tripUpdateReducer = (state = { OneTrip: {} }, action) => {
  switch (action.type) {
    case TRIP_UPDATE_REQUEST:
      return { loading: true, success: false };

    case TRIP_UPDATE_SUCCESS:
      return { loading: false, success: true, OneTrip: action.payload };
    case TRIP_UPDATE_RESET:
      return { success: false };

    case TRIP_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const tripDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case TRIP_DELETE_REQUEST:
      return { loading: true };
    case TRIP_DELETE_SUCCESS:
      return { loading: false, success: true };
    case TRIP_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// export const bookingReducer = (state = { bookedTrips: [] }, action) => {
//   switch (action.type) {
//     case BOOKING_TRIP:
//       const trip = action.payload;

//       const existBooking = state.bookedTrips.find((el) => el._id === trip._id);

//       if (existBooking) {
//         return {
//           ...state,
//           bookedTrips: state.bookedTrips.map((el) =>
//             el._id === existBooking._id ? trip : el
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           bookedTrips: [...state.bookedTrips, trip],
//         };
//       }
//     case UNBOOK_TRIP:
//       return {
//         ...state,
//         bookedTrips: state.bookedTrips.filter(
//           (el) => el._id !== action.payload
//         ),
//       };

//     default:
//       return state;
//   }
// };
