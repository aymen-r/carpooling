import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTrips } from "../redux/actions/tripActions";
import { getUserRequests } from "../redux/actions/requestAction";

import { Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserTrips = ({ history }) => {
  const dispatch = useDispatch();
  const UserTrips = useSelector((state) => state.UserTrips);
  const { trips } = UserTrips;
  console.log(trips.response);

  const UserRequests = useSelector((state) => state.UserRequests);
  const { requests } = UserRequests;
  console.log(requests.response);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInformations, token } = userLogin;

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else {
      dispatch(getUserTrips(userInformations._id));
      dispatch(getUserRequests(userInformations._id));
    }
  }, [dispatch, history, userInformations, token]);

  return (
    <Row>
      <Col md={6}>
        <h1>My trips</h1>
        <br />
        {/* {loading && <Spinner animation="border" />} */}
        {trips.response ? (
          trips.response.map((el) => (
            <div
              key={el._id}
              className="card border-primary mb-3"
              style={{ maxWidth: " 20rem" }}
            >
              <Link to={`/my_posts/trips/${el._id}`}>
                <div className="card-header">
                  {el.origin} ==&gt; {el.destination}
                </div>
              </Link>
              <div className="card-body">
                <p className="card-title">
                  Posted on: {el.createdAt.split("T")[0]}
                </p>
              </div>
            </div>
          ))
        ) : (
          <Spinner animation="border" />
        )}
      </Col>
      <Col md={1}></Col>
      <Col md={5}>
        <h1>My Requests</h1>
        <br />
        {/* {loading && <Spinner animation="border" />} */}
        {requests.response ? (
          requests.response.map((el) => (
            <div
              key={el._id}
              className="card border-primary mb-3"
              style={{ maxWidth: " 20rem" }}
            >
              <Link to={`/my_posts/requests/${el._id}`}>
                <div className="card-header">
                  {el.origin} ==&gt; {el.destination}
                </div>
              </Link>
              <div className="card-body">
                <p className="card-title">
                  Posted on: {el.createdAt.split("T")[0]}
                </p>
              </div>
            </div>
          ))
        ) : (
          <Spinner animation="border" />
        )}
      </Col>
    </Row>
  );
};

export default UserTrips;
