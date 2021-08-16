import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import {
  getOneRequest,
  requestUpdate,
  deleteRequest,
} from "../redux/actions/requestAction";
import { Alert } from "react-bootstrap";
import "../css/main.css";
// import "../css/main.min.css";

const UserRequestScreen = ({ match, history }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [seats, setSeats] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const requestTripsList = useSelector((state) => state.requestTripsList);
  const { oneRequest } = requestTripsList;

  const updateRequest = useSelector((state) => state.updateRequest);
  const { success } = updateRequest;

  const userLogin = useSelector((state) => state.userLogin);
  const { token } = userLogin;

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else if (!oneRequest.origin) {
      dispatch(getOneRequest(match.params.id));
    } else {
      setOrigin(oneRequest.origin);
      setDestination(oneRequest.destination);
      setDescription(oneRequest.description);
      setSeats(oneRequest.seats);
      setTime(oneRequest.time);
      setDate(oneRequest.date);
    }
  }, [dispatch, history, token, match.params.id, oneRequest]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      requestUpdate(match.params.id, {
        origin,
        destination,
        description,
        seats,
        time,
        date,
      })
    );
    history.push("/my_posts");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteRequest(match.params.id));
      history.push("/my_posts");
    }
  };
  return (
    <div>
      {success && <Alert variant="success">Request Updated</Alert>}

      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
          <div className="card card-5">
            <div className="card-heading">
              <h2 className="title">My request</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="form-row">
                  <div className="name">Origin</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="origin"
                        placeholder="Enter origin"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Destination</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="destination"
                        placeholder="Enter destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Description</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="description"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Seats</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="number"
                        placeholder="seats "
                        value={seats}
                        onChange={(e) => setSeats(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Time</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="time"
                        placeholder="Enter time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="name">Date</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="date"
                        placeholder="Enter date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className="boutonet">
                <button
                  className="butn btn--radius-2 btn--blue"
                  onClick={handleSubmit}
                >
                  Update
                </button>
                <button
                  className="butn btn--radius-2 btn--red"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRequestScreen;
