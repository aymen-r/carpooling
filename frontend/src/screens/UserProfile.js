import React, { useEffect } from "react";
import { Spinner, Alert, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getUserDetails } from "../redux/actions/userActions";
import { USER_DETAILS_RESET } from "../redux/constants/UserConstants";
// import "../profile2.css";

const UserProfile = ({ history, match }) => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, user } = userDetails;
  console.log(user && user);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInformations, token } = userLogin;

  useEffect(() => {
    dispatch({ type: USER_DETAILS_RESET });
  }, [dispatch]);

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else if (!user || !user.name) {
      dispatch(getUserDetails(match.params.id));
    }
  }, [dispatch, match, user, token, history, userInformations]);

  return (
    <>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <div className="profile-card">
            <header>
              <h1>{user.name}</h1>

              <h2> from: {user.address}</h2>
            </header>

            <div className="profile-bio">
              <p>Email: {user.email}</p>
              <p>Phone Number: {user.phone}</p>
            </div>
          </div>
          {/* <Link to="/trips"> */}
          <Button
            onClick={() => {
              history.goBack();
            }}
          >
            {" "}
            go back
          </Button>
        </>
      )}
    </>
  );
};
export default UserProfile;
