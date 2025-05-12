import React from "react";
import Home from "./components/Pages/Home";
import MainDisplay from "./components/Pages/MainDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainDisplay />} />
        <Route path="/first" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
