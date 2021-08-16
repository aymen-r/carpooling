import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Posts from "./components/Posts";
import HomeScreen from "./screens/HomeScreen";
import TripsScreen from "./screens/TripsScreen";
import RequestsScreen from "./screens/RequestScreen";
import OneRequestScreen from "./screens/OneRequestScreen";
import OneTripScreen from "./screens/OneTripScreen";
import LoginScreen from "./screens/LoginScreen";
import PostTripScreen from "./screens/postTripScreen";
import RequestTripScreen from "./screens/RequestTripScreen";
import ProfileScreen from "./screens/Profile";
import RegisterScreen from "./screens/RegisterScreen";
import UserPosts from "./screens/UserPostsScreen";
import UserRequestScreen from "./screens/UserRequestScreen";
import UserTripScreen from "./screens/UserTripScreen";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Switch>
            <Route path="/my_posts" component={UserPosts} exact />
            <Route
              path="/my_posts/requests/:id"
              component={UserRequestScreen}
            />
            <Route path="/my_posts/trips/:id" component={UserTripScreen} />
            <Route path="/about" component={About} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/post_request" component={RequestTripScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/post_trip" component={PostTripScreen} />
            <Route path="/posts" component={Posts} />
            <Route path="/trips" component={TripsScreen} exact />
            <Route path="/trips/:id" component={OneTripScreen} />
            <Route path="/requests" component={RequestsScreen} exact />
            <Route path="/requests/:id" component={OneRequestScreen} />
            <Route exact path="/" component={HomeScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
