import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./Root";
import HomePage from "./components/home_page";
import Header from "./components/header";
import Footer from "./components/footer";
import Register from "./components/signup/register";
import LogIn from "./components/login/login";
import LogOut from "./components/authentication/logout";
import { ToastContainer } from "react-toastify";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Root>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="*">Ups</Route>
          </Routes>
          <Footer />
          <ToastContainer hideProgressBar={true} newestOnTop={true} />
        </Root>
      </BrowserRouter>
    </div>
  );
}

export default App;
