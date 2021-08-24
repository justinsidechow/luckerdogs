import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import axios from "axios";

import sign_in from "./components/sign_in";

function App() {
  return (
    <div className="App">
      <header className="App-header">{sign_in()}</header>
    </div>
  );
}

export default App;
