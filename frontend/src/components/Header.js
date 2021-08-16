import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { logout } from "../redux/actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInformations } = userLogin;

  // const userInformations = JSON.parse(localStorage.getItem("userInformations"));
  // console.log(userInformations.name);

  const logoutHandler = () => {
    dispatch(logout());
    console.log("logout");
  };
  // useEffect(() => {
  //   const userInformations = JSON.parse(
  //     localStorage.getItem("userInformations")
  //   );
  //   console.log(userInformations);
  // }, [userInformations]);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Carpooling</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer className=" navLnk" to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <Dropdown>
                <Dropdown.Toggle
                  className="btn btn-outline-primary my-2 my-sm-0 navLnk"
                  variant="primary"
                  id="dropdown-basic"
                >
                  <i className="fas fa-search"></i> Find
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <LinkContainer to="/trips">
                    <Dropdown.Item>Trips</Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/requests">
                    <Dropdown.Item>Requests</Dropdown.Item>
                  </LinkContainer>
                </Dropdown.Menu>
              </Dropdown>

              <LinkContainer className="navLnk  " to="/posts">
                <button className="btn btn-outline-warning my-2 my-sm-0">
                  <i className="fas fa-plus"> </i> Post
                </button>
              </LinkContainer>
              {userInformations ? (
                <Dropdown>
                  <Dropdown.Toggle
                    className="btn btn-outline-secondary my-2 my-sm-0 navLnk"
                    variant="secondary"
                    id="dropdown-basic"
                  >
                    {userInformations.name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <LinkContainer to="/profile">
                      <Dropdown.Item>Profile</Dropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/my_posts">
                      <Dropdown.Item>My posts</Dropdown.Item>
                    </LinkContainer>

                    <Dropdown.Item onClick={logoutHandler}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <LinkContainer className="navLnk  " to="/login">
                  <button className="btn btn-outline-secondary my-2 my-sm-0">
                    Sign in
                  </button>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
