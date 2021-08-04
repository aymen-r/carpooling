import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { tripsListReducer } from "./redux/reducers/tripsReducer";
import { requestTripsListReducer } from "./redux/reducers/requestTripReducer";
import { userLoginReducer } from "./redux/reducers/userReducers";

const reducer = combineReducers({
  tripsList: tripsListReducer,
  requestTripsList: requestTripsListReducer,
  userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userDetails")
  ? JSON.parse(localStorage.getItem("userDetails"))
  : null;

const initialState = { userLogin: { userDetails: userInfoFromStorage } };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
