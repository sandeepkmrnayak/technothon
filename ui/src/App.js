import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layouts/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
    {/* <Home/> */}
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/login" exact element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
