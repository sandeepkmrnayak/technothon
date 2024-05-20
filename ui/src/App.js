import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layouts/Home";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;
