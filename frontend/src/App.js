import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Sign_in from "./components/sign_in";
import Sign_up from "./components/sign_up";
import navbar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Sign_up />
      </div>
    </React.Fragment>
  );
}

export default App;
