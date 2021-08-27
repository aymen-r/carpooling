import React from "react";
import "./header.css";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { logout } from "../redux/actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInformations } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    console.log("logout");
  };

  return (
    <>
      <Navbar className="navbar" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <span className="Logo">Carpooling</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/about">
                <Nav.Link>
                  <button className="btn btn-outline-primary my-2 my-sm-0 navLnk">
                    About
                  </button>
                </Nav.Link>
              </LinkContainer>

              <Dropdown>
                <Dropdown.Toggle
                  className="btn btn-outline-primary my-2 my-sm-0 navLnk"
                  variant="primary"
                  id="dropdown-basic"
                >
                  <i className="fas fa-search"></i>Find
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

              <LinkContainer to="/posts">
                <button className="btn btn-outline-primary my-2 my-sm-0 navLnk">
                  <i className="fas fa-plus"></i>Post
                </button>
              </LinkContainer>
              {userInformations ? (
                <Dropdown>
                  <Dropdown.Toggle
                    // className="btn btn-outline-secondary my-2 my-sm-0 navLnk"
                    className="btn btn-outline-primary my-2 my-sm-0 navLnk"
                    variant="primary"
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

                    <LinkContainer to="/my_booked_trips">
                      <Dropdown.Item>My booked trips</Dropdown.Item>
                    </LinkContainer>

                    <Dropdown.Item onClick={logoutHandler}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <LinkContainer to="/login">
                  <button className="btn btn-outline-primary my-2 my-sm-0 navLnk">
                    Sign in
                  </button>
                </LinkContainer>
              )}
              {userInformations && userInformations.role === "admin" && (
                <Dropdown>
                  <Dropdown.Toggle
                    className="btn btn-outline-secondary my-2 my-sm-0 navLnk"
                    variant="secondary"
                    id="adminmenu"
                  >
                    Admin
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <LinkContainer to="/admin/userList">
                      <Dropdown.Item>Users</Dropdown.Item>
                    </LinkContainer>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
