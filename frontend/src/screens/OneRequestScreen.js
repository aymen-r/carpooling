import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOneRequest } from "../redux/actions/requestAction";
import { Spinner } from "react-bootstrap";

const OneRequestScreen = ({ match }) => {
  const dispatch = useDispatch();
  const requestTripsList = useSelector((state) => state.requestTripsList);
  const { oneRequest } = requestTripsList;

  useEffect(() => {
    dispatch(getOneRequest(match.params.id));
  }, [dispatch, match]);

  console.log(oneRequest);
  return (
    <div className="home">
      <Link className="btn btn-dark my-3" to="/requests">
        Go Back
      </Link>
      {oneRequest ? (
        <div>{oneRequest.origin}</div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default OneRequestScreen;
