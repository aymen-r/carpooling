import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneTrip,
  updateTrip,
  deleteTrip,
} from "../redux/actions/tripActions";
import { Alert } from "react-bootstrap";

const UserTripsScreen = ({ match, history }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
  const [carType, setCarType] = useState("");
  const [price, setPrice] = useState("");
  const [seats, setSeats] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const tripsList = useSelector((state) => state.tripsList);
  const { oneTrip } = tripsList;

  const tripUpdate = useSelector((state) => state.tripUpdate);
  const { success } = tripUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { token } = userLogin;

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else if (!oneTrip.origin) {
      dispatch(getOneTrip(match.params.id));
    } else {
      setOrigin(oneTrip.origin);
      setDestination(oneTrip.destination);
      setDescription(oneTrip.description);
      setCarType(oneTrip.carType);
      setPrice(oneTrip.price);
      setSeats(oneTrip.seats);
      setTime(oneTrip.time);
      setDate(oneTrip.date);
    }
  }, [dispatch, history, token, match.params.id, oneTrip]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTrip(match.params.id, {
        origin,
        destination,
        description,
        carType,
        price,
        seats,
        time,
        date,
      })
    );

    history.push("/my_posts");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteTrip(match.params.id));
      history.push("/my_posts");
    }
  };
  return (
    <div>
      {success && <Alert variant="success">trip Updated</Alert>}

      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
          <div className="card card-5">
            <div className="card-heading">
              <h2 className="title">My trip</h2>
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
                  <div className="name">Car Type</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="carType"
                        placeholder="Enter carType"
                        value={carType}
                        onChange={(e) => setCarType(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="name">Price</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="number"
                        placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
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

export default UserTripsScreen;
