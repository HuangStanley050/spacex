import React, { Component } from "react";
import logo from "./logo.svg";
//import "./App.css";
import rocketLogo from "./rocket.jpg";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img
          alt="Space X app"
          src={rocketLogo}
          style={{ width: 200, height: 200, display: "block", margin: "auto" }}
        />
        <h1 style={{ textAlign: "center", color: "red" }}>SpaceX App</h1>
      </div>
    );
  }
}

export default App;
