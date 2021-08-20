import React, { useState, useEffect } from "react";
import { createNewRequest } from "../redux/actions/requestAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { CREATE_REQUEST_TRIP_RESET } from "../redux/constants/requestTripConstants";

const RequestTripScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInformations, token } = userLogin;

  const createRequest = useSelector((state) => state.createRequest);
  const { success, error } = createRequest;

  if (error) {
    console.log(error);
  }

  const [newReq, setNewReq] = useState({
    user: userInformations && userInformations._id,
    origin: "",
    destination: "",
    description: "",
    seats: 1,
    time: "",
    date: "",
  });

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
    if (success) {
      dispatch({ type: CREATE_REQUEST_TRIP_RESET });
      history.push("/requests");
    }
  }, [history, success, dispatch, token]);

  const handleChange = (e) => {
    e.preventDefault();
    setNewReq({ ...newReq, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewRequest(newReq));

    // if (success) {
    //   history.push("/requests");
    // }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Post a request</legend>

          <div className="form-group">
            <label htmlFor="inputOrigin" className="form-label mt-4">
              Origin
            </label>
            <input
              type="text"
              name="origin"
              className="form-control"
              id="inputOrigin"
              value={newReq.origin}
              placeholder="Enter Origin"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputDestination" className="form-label mt-4">
              Destination
            </label>
            <input
              type="text"
              name="destination"
              className="form-control"
              id="inputDestination"
              value={newReq.destination}
              placeholder="Enter Destination"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="inputDescription" className="form-label mt-4">
              Description
            </label>
            <input
              type="text"
              name="description"
              className="form-control"
              id="inputDescription"
              value={newReq.description}
              placeholder="Enter Description"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Seats" className="form-label mt-4">
              Seats
            </label>
            <select
              className="form-select"
              id="Seats"
              name="seats"
              value={newReq.seats}
              onChange={handleChange}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="inputTime" className="form-label mt-4">
              Time
            </label>
            <input
              type="time"
              className="form-control"
              id="inputTime"
              name="time"
              value={newReq.time}
              onChange={handleChange}
              placeholder="Time"
            />
          </div>

          <div className="form-group">
            <label htmlFor="inputTime" className="form-label mt-4">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="inputTime"
              name="date"
              value={newReq.date}
              onChange={handleChange}
              placeholder="date"
            />
          </div>
          <hr />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </FormContainer>
  );
};

export default RequestTripScreen;
