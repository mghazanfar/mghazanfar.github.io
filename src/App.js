import React, { Component } from "react";
import "./App.css";
import SearchMap from "./components/SearchMap";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          paddingLeft: 32,
          paddingRight: 32
        }}
      >
        <SearchMap />
        <div style={{ marginTop: 10 }}>
          <p style={{ color: "#686588", margin: 0 }}>Routes</p>
          <a
            style={{
              color: "#686588",
              fontSize: 12,
              textDecoration: "none",
              margin: 0
            }}
            href="/"
          >
            Create Report
          </a>
        </div>
        <Table />
      </div>
    );
  }
}

export default App;
