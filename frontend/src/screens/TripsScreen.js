import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Trip from "../components/Trip";
import { listTrips } from "../redux/actions/tripActions";
import { Spinner } from "react-bootstrap";

const TripsScreen = () => {
  const dispatch = useDispatch();
  const tripsList = useSelector((state) => state.tripsList);
  const { trips } = tripsList;

  useEffect(() => {
    dispatch(listTrips());
  }, [dispatch]);

  console.log(trips);
  return (
    <div className="home">
      <h1>List of trips</h1>
      {trips ? (
        trips.map((el) => <Trip key={el._id} el={el} />)
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default TripsScreen;
