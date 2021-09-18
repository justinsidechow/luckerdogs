import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import HomePage from "./components/home_page";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <HomePage />
      </React.Fragment>
    </div>
  );
}
export default App;

//{console.log(appState.cointoss)}

/*
class connectionExample extends React.Component {
  componentDidMount() {
    const apiURL = "http://127.0.0.1:8000/api/cointoss";
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return <div>Example Connection</div>;
  }
}

export default connectionExample;
*/
