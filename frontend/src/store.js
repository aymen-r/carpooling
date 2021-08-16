import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  tripsListReducer,
  postTripReducer,
  UserTripsReducer,
  tripUpdateReducer,
  tripDeleteReducer,
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
} from "./redux/reducers/userReducers";

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
});

const userInfoFromStorage = localStorage.getItem("userInformations")
  ? JSON.parse(localStorage.getItem("userInformations"))
  : null;

const userTokenFromStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;

const initialState = {
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
