import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./Root";
import HomePage from "./components/home_page";
import Header from "./components/header";
import Footer from "./components/footer";
import Register from "./components/authentication/register";
import LogIn from "./components/authentication/login";
import LogOut from "./components/authentication/logout";

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
        </Root>
      </BrowserRouter>
    </div>
  );
}

export default App;
