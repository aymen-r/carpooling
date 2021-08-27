import {
  USER_BOOKINGS_FAIL,
  USER_BOOKINGS_REQUEST,
  USER_BOOKINGS_SUCCESS,
  BOOK_TRIP_REQUEST,
  BOOK_TRIP_SUCCESS,
  BOOK_TRIP_FAIL,
  BOOK_TRIP_RESET,
  BOOKING_DELETE_REQUEST,
  BOOKING_DELETE_SUCCESS,
  BOOKING_DELETE_FAIL,
} from "../constants/bookingConstants";

export const UserBookingsReducer = (state = { bookings: [] }, action) => {
  switch (action.type) {
    case USER_BOOKINGS_REQUEST:
      return { loading: true, bookings: [] };

    case USER_BOOKINGS_SUCCESS:
      return { loading: false, bookings: action.payload };

    case USER_BOOKINGS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const bookTripReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_TRIP_REQUEST:
      return { loading: true, success: false };

    case BOOK_TRIP_SUCCESS:
      return { loading: false, success: true, booking: action.payload };
    case BOOK_TRIP_RESET:
      return { booking: {}, success: false };

    case BOOK_TRIP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const bookingDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_DELETE_REQUEST:
      return { loading: true };
    case BOOKING_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BOOKING_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
