import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { logout } from "../redux/actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInformations } = userLogin;

  const userInfo = JSON.parse(localStorage.getItem("userInformations"));
  console.log(userInfo && userInfo.name);

  const logoutHandler = () => {
    dispatch(logout());
    console.log("logout");
  };

  return (
    <>
      {/* <ul class="nav nav-pills">
        <li class="nav-item">
          <LinkContainer class="nav-link">Active</LinkContainer>
        </li>
        <li class="nav-item dropdown">
          <LinkContainer
            class="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </LinkContainer>
          <div class="dropdown-menu">
            <LinkContainer class="dropdown-item">Action</LinkContainer>
            <LinkContainer class="dropdown-item">Another action</LinkContainer>
            <LinkContainer class="dropdown-item">
              Something else here
            </LinkContainer>
            <div class="dropdown-divider"></div>
            <LinkContainer class="dropdown-item">Separated link</LinkContainer>
          </div>
        </li>
        <li class="nav-item">
          <LinkContainer class="nav-link">Link</LinkContainer>
        </li>
        <li class="nav-item">
          <LinkContainer class="nav-link disabled">Disabled</LinkContainer>
        </li>
      </ul> */}
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
                  className=" navLnk"
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

                    <LinkContainer to="/my_booked_trips">
                      <Dropdown.Item>My booked trips</Dropdown.Item>
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
