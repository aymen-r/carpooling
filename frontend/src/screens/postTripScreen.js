import React, { useState, useEffect } from "react";
import { createTrip } from "../redux/actions/tripActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { TRIP_CREATE_RESET } from "../redux/constants/tripConstants";

const PostTripScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInformations, token } = userLogin;

  const postTrip = useSelector((state) => state.postTrip);
  const { success, trip, error } = postTrip;

  console.log(trip);
  if (error) {
    console.log(error.response.data.message);
  }

  const [newTrip, setNewTrip] = useState({
    user: userInformations && userInformations._id,
    origin: "",
    destination: "",
    description: "",
    carType: "",
    price: 0,
    seats: 1,
    time: "",
    date: "",
  });

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
    if (success) {
      dispatch({ type: TRIP_CREATE_RESET });
      history.push("/trips");
    }
  }, [history, success, dispatch, token]);

  const handleChange = (e) => {
    e.preventDefault();
    setNewTrip({ ...newTrip, [e.target.name]: e.target.value });
  };

  const myFunction = () => {
    if (error) {
      alert(error.response.data.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTrip(newTrip));

    myFunction();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Post a trip</legend>

          <div className="form-group">
            <label htmlFor="inputOrigin" className="form-label mt-4">
              Origin
            </label>
            <input
              type="text"
              name="origin"
              className="form-control"
              id="inputOrigin"
              value={newTrip.origin}
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
              value={newTrip.destination}
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
              value={newTrip.description}
              placeholder="Enter Description"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputCarType" className="form-label mt-4">
              Car Type
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCarType"
              name="carType"
              value={newTrip.carType}
              placeholder="Enter Car Type"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPrice" className="form-label mt-4">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="inputPrice"
              name="price"
              value={newTrip.price}
              onChange={handleChange}
              placeholder="Enter Price"
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
              value={newTrip.seats}
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
              value={newTrip.time}
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
              value={newTrip.date}
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

export default PostTripScreen;
