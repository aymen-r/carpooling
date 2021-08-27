import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import Request from "../components/Request";
import { listRequests } from "../redux/actions/requestAction";

const RequestsScreen = () => {
  const dispatch = useDispatch();
  const requestTripsList = useSelector((state) => state.requestTripsList);
  const { requests } = requestTripsList;

  useEffect(() => {
    dispatch(listRequests());
  }, [dispatch]);

  console.log(requests);
  return (
    <div className="posts">
      <h1 style={{ margin: "20px", textAlign: "center" }}>List of requests</h1>
      {requests ? (
        requests.map((el) => <Request key={el._id} el={el} />)
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default RequestsScreen;
