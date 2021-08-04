import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { getOneTrip } from "../redux/actions/tripActions";
import { Link } from "react-router-dom";

const OneTripScreen = ({ match }) => {
  const dispatch = useDispatch();
  const tripsList = useSelector((state) => state.tripsList);
  const { oneTrip } = tripsList;

  useEffect(() => {
    dispatch(getOneTrip(match.params.id));
  }, [dispatch, match]);

  console.log(oneTrip);
  return (
    <div className="home">
      <Link className="btn btn-dark my-3" to="/trips">
        Go Back
      </Link>
      {oneTrip ? (
        <div>{oneTrip.origin}</div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default OneTripScreen;
