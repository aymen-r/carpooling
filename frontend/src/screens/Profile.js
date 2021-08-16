import React, { useState, useEffect } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { USER_UPDATE_RESET } from "../redux/constants/UserConstants";
import {
  getUserDetails,
  updateUserProfile,
} from "../redux/actions/userActions";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInformations, token } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else if (!user || !user.name || success) {
      dispatch({ type: USER_UPDATE_RESET });
      dispatch(getUserDetails(userInformations._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setAddress(user.address);
      setGender(user.gender);
    }
  }, [dispatch, user, token, history, userInformations, success]);

  const handleSubmit = (e) => {
    if (password !== confirmPassword) {
      e.preventDefault();
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateUserProfile({ name, email, password, phone, address, gender })
      );
    }
  };

  return (
    <div className="container">
      <div className="card h-100">
        <div className="card-body">
          {message && <Alert variant="danger">{message}</Alert>}
          {success && <Alert variant="success">Profile Updated</Alert>}
          {loading && <Spinner animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <div className="row gutters">
              <div className="h2User">
                <h2 className="mb-2 text-primary">User Profile</h2>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="eMail">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="eMail"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row gutters">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="Password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="Confirm Password">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="Confirm Password"
                    placeholder="confirm password "
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="Address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Address"
                    placeholder="Enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="form-group">
                  <label htmlFor="Gender">Gender</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Gender"
                    placeholder="Enter gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="row gutters">
              <div className="profile_buttons">
                <Link to="/">
                  <button type="button" className="btn btn-outline-light">
                    Cancel
                  </button>
                </Link>
                <button type="submit" className="btn btn-outline-primary">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
    // </div>

    // <Row>
    //   <Col md={4}>
    //     <div className="h2User">
    //       <h2>User Profile</h2>
    //     </div>
    //     {message && <Alert variant="danger">{message}</Alert>}
    //     {success && <Alert variant="success">Profile Updated</Alert>}
    //     {loading && <Spinner animation="border" />}
    //     {error && <Alert variant="danger">{error}</Alert>}

    //     <Form onSubmit={handleSubmit}>
    //       <Form.Group controlId="name">
    //         <Form.Label>Name:</Form.Label>
    //         <Form.Control
    //           type="name"
    //           placeholder="Enter name"
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //         ></Form.Control>
    //       </Form.Group>

    //       <Form.Group controlId="email">
    //         <Form.Label>Email Address:</Form.Label>
    //         <Form.Control
    //           type="email"
    //           placeholder="Enter email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         ></Form.Control>
    //       </Form.Group>

    //       <Form.Group controlId="password">
    //         <Form.Label>Password:</Form.Label>
    //         <Form.Control
    //           type="password"
    //           placeholder="Enter password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         ></Form.Control>
    //       </Form.Group>

    //       <Form.Group controlId="confirmPassword">
    //         <Form.Label>Confirm Password:</Form.Label>
    //         <Form.Control
    //           type="password"
    //           placeholder="confirm password "
    //           value={confirmPassword}
    //           onChange={(e) => setConfirmPassword(e.target.value)}
    //         ></Form.Control>
    //       </Form.Group>

    //       <Form.Group controlId="phone">
    //         <Form.Label>Phone Number:</Form.Label>
    //         <Form.Control
    //           type="text"
    //           placeholder="Enter phone number"
    //           value={phone}
    //           onChange={(e) => setPhone(e.target.value)}
    //         ></Form.Control>
    //       </Form.Group>

    //       <Form.Group controlId="address">
    //         <Form.Label>Address:</Form.Label>
    //         <Form.Control
    //           type="address"
    //           placeholder="Enter address"
    //           value={address}
    //           onChange={(e) => setAddress(e.target.value)}
    //         ></Form.Control>
    //       </Form.Group>

    //       <Form.Group controlId="gender">
    //         <Form.Label>Gender:</Form.Label>
    //         <Form.Control
    //           type="gender"
    //           placeholder="Enter gender"
    //           value={gender}
    //           onChange={(e) => setGender(e.target.value)}
    //         ></Form.Control>
    //       </Form.Group>

    //       <br />
    //       <Button type="submit" variant="primary">
    //         Update
    //       </Button>
    //     </Form>
    //   </Col>

    // </Row>
  );
};

export default ProfileScreen;
