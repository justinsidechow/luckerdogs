import React, { useEffect, useState } from "react";
import CoinToss from "./coin_toss_page";
import App from "../App";

function CoinTossAPIFetch() {
  const CoinTossLoading = CoinTossLoadingComponent(CoinToss);
  const [appState, setAppState] = useState({
    loading: false,
    cointoss: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/api/coin-toss/`;
    fetch(apiUrl)
      .then((data) => data.json())
      .then((cointoss) => {
        setAppState({ loading: false, cointoss: cointoss });
      });
  }, [setAppState]);
  return (
    <div className="App">
      <CoinTossLoading
        isLoading={appState.loading}
        cointoss={appState.cointoss}
      />
    </div>
  );
}

function CoinTossLoadingComponent(Component) {
  return function CoinTossLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ fontSize: "25px" }}>
        We are waiting for the data to load!...
      </p>
    );
  };
}

export default CoinTossAPIFetch;

/*
import React from "react";

function CoinTossLoading(Component) {
  return function CoinTossLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ fontSize: "25px" }}>
        We are waiting for the data to load!...
      </p>
    );
  };
}

export default CoinTossLoading;
*/
