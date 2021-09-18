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
import CoinTossAPI from "./components/coin_toss_api";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/coin-toss">
            <CoinTossAPI />
          </Route>
        </Router>
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
