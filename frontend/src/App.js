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

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/posts" component={Posts} />
            <Route path="/trips/:id" component={OneTripScreen} />
            <Route path="/trips" component={TripsScreen} />
            <Route path="/requests/:id" component={OneRequestScreen} />
            <Route path="/requests" component={RequestsScreen} />
            <Route exact path="/" component={HomeScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
