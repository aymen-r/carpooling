import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  tripsListReducer,
  postTripReducer,
  UserTripsReducer,
  tripUpdateReducer,
  tripDeleteReducer,
  // bookingReducer,
} from "./redux/reducers/tripsReducer";
import {
  requestTripsListReducer,
  createRequestReducer,
  UserRequestsReducer,
  updateRequestReducer,
  deleteRequestReducer,
} from "./redux/reducers/requestTripReducer";
import {
  userLoginReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userRegisterReducer,
  usersListReducer,
  usersDeleteReducer,
} from "./redux/reducers/userReducers";
import {
  bookingDeleteReducer,
  bookTripReducer,
  UserBookingsReducer,
} from "./redux/reducers/bookingReducer";

const reducer = combineReducers({
  tripsList: tripsListReducer,
  postTrip: postTripReducer,
  requestTripsList: requestTripsListReducer,
  createRequest: createRequestReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userRegister: userRegisterReducer,
  UserTrips: UserTripsReducer,
  UserRequests: UserRequestsReducer,
  tripUpdate: tripUpdateReducer,
  updateRequest: updateRequestReducer,
  tripDelete: tripDeleteReducer,
  requestDelete: deleteRequestReducer,
  usersList: usersListReducer,
  UserBooking: UserBookingsReducer,
  bookTrip: bookTripReducer,
  bookingDelete: bookingDeleteReducer,
  usersDelete: usersDeleteReducer,
  // booking: bookingReducer,
});

// const bookedTripsFromStorage = localStorage.getItem("bookedTrips")
//   ? JSON.parse(localStorage.getItem("bookedTrips"))
//   : [];

const userInfoFromStorage = localStorage.getItem("userInformations")
  ? JSON.parse(localStorage.getItem("userInformations"))
  : null;

const userTokenFromStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;

const initialState = {
  // booking: {
  //   bookedTrips: bookedTripsFromStorage,
  // },
  userLogin: {
    userInformations: userInfoFromStorage,
    token: userTokenFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
