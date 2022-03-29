import React from "react";
import { Route, Switch } from "react-router";
import Root from "./Root";
import HomePage from "./components/homePage";
import Header from "./components/header/header";
import Footer from "./components/footer";
import SignUp from "./components/signup/signup";
import LogIn from "./components/login/login";
import LogOut from "./components/authentication/logout";
import { ToastContainer } from "react-toastify";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";

function App() {
  return (
    <div className="App">
      <Root>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/logout" component={LogOut} />
        </Switch>
        <ToastContainer hideProgressBar={true} newestOnTop={true} />
        <Footer />
      </Root>
    </div>
  );
}

export default App;
