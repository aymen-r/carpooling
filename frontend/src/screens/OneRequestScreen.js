import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOneRequest } from "../redux/actions/requestAction";
import { Spinner } from "react-bootstrap";
import Card from "../components/card/Card";

const OneRequestScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const requestTripsList = useSelector((state) => state.requestTripsList);
  const { oneRequest } = requestTripsList;

  useEffect(() => {
    dispatch(getOneRequest(match.params.id));
  }, [dispatch, match]);

  console.log(oneRequest);
  return (
    <div>
      {oneRequest ? (
        <Card obj={oneRequest} />
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      <Link className="btn btn-dark my-3 " to="/requests">
        Back to Requests
      </Link>
    </div>
  );
};

export default OneRequestScreen;
