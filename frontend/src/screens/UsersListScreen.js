import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Table, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from "../redux/actions/userActions";

const UsersListScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { token } = userLogin;

  const usersList = useSelector((state) => state.usersList);
  const { loading, users, error } = usersList;
  console.log(users);

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else {
      dispatch(getAllUsers());
    }
  }, [dispatch, token, history]);

  const handleDelete = async (id) => {
    if (window.confirm("you want to delete this user?")) {
      await dispatch(deleteUser(id));
    }
    dispatch(getAllUsers());
  };
  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <Spinner animation="border" role="status"></Spinner>
      ) : error ? (
        console.log(error)
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mail to: ${user.email}`}>{user.email}</a>{" "}
                </td>
                <td>
                  {user.role === "admin" ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  {/* <Link to={`/user/${user._id}/edit`}> */}
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-edit"></i>
                  </Button>
                  <Button
                    className="btn-outline-danger btn-sm"
                    onClick={() => handleDelete(user._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                  {/* </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default UsersListScreen;
