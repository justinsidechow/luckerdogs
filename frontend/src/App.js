import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import sign_in from "./components/sign_in";
import navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <div>{sign_in()}</div>
    </div>
  );
}

export default App;
