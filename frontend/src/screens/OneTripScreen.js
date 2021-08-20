import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner, Button } from "react-bootstrap";
import { getOneTrip } from "../redux/actions/tripActions";
import { Link } from "react-router-dom";
import Card from "../components/card/Card";

const OneTripScreen = ({ match }) => {
  const dispatch = useDispatch();
  const tripsList = useSelector((state) => state.tripsList);
  const { oneTrip } = tripsList;

  useEffect(() => {
    dispatch(getOneTrip(match.params.id));
  }, [dispatch, match]);

  console.log(oneTrip);
  return (
    <div>
      {oneTrip ? (
        <Card obj={oneTrip} />
      ) : (
        // <div>{oneTrip.origin}</div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <div className="ONe">
        <Button className="btn btn-outline-light my-3">Book this trip</Button>
        <Link className="btn btn-outline-dark my-3" to="/trips">
          Back to Trips
        </Link>
      </div>
    </div>
  );
};

export default OneTripScreen;
