import React, { useEffect, useState } from "react";
import "./App.css";
import CoinTossAPI from "./components/coin_toss_api";

function App() {
  return <div>{CoinTossAPI()}</div>;
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
