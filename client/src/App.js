import React, { Component } from "react";
import logo from "./logo.svg";
//import "./App.css";
import rocketLogo from "./rocket.jpg";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import Launches from "./components/launches";

const client = new ApolloClient({
  uri: "https://webdevbootcamp-infamousgodhand.c9users.io:8081/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="container">
            <img
              alt="Space X app"
              src={rocketLogo}
              style={{
                width: 200,
                height: 200,
                display: "block",
                margin: "auto"
              }}
            />
            <h1 style={{ textAlign: "center", color: "red" }}>SpaceX App</h1>
            <Route exact path="/" component={Launches} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
