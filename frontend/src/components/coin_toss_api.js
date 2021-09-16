import React, { useEffect, useState } from "react";
import CoinToss from "./coin_toss";
import App from "../App";
import CoinTossLoadingComponent from "./coin_toss_loading";

function CoinTossAPI() {
  const CoinTossLoading = CoinTossLoadingComponent(CoinToss);
  const [appState, setAppState] = useState({
    loading: false,
    cointoss: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/api/cointoss`;
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
export default CoinTossAPI;
