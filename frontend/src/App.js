import React from "react";
import { Route, Switch } from "react-router";
import Root from "./Root";
import HomePage from "./components/home/homePage";
import Header from "./components/header/header";
import Footer from "./components/footer";
import SignUp from "./components/signup/signup";
import LogIn from "./components/login/login";
import LogOut from "./components/authentication/logout";
import { ToastContainer } from "react-toastify";
import ActivateAccount from "./components/authentication/ActivateAccount";
import ResendActivation from "./components/authentication/ResendActivation";
import ResetPassword from "./components/authentication/ResetPassword";
import ResetPasswordConfirm from "./components/authentication/ResetPasswordConfirm";

import axios from "axios";

if (window.location.origin === "http://localhost:3000") {
  axios.defaults.baseURL = "http://127.0.0.1:8000";
} else {
  axios.defaults.baseURL = window.location.origin;
}

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
          <Route path="/activate/:uid/:token" component={ActivateAccount} />
          <Route path="/resend_activation" component={ResendActivation} />
          <Route path="/send_reset_password/" component={ResetPassword} />
          <Route
            path="/reset_password/:uid/:token"
            component={ResetPasswordConfirm}
          />
        </Switch>
        <ToastContainer hideProgressBar={true} newestOnTop={true} />
        <Footer />
      </Root>
    </div>
  );
}

export default App;
