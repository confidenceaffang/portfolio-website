import React from "react";
import Home from "./components/Pages/Home";
import MainDisplay from "./components/Pages/MainDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./components/Pages/Projects";
import AboutMe from "./components/Pages/AboutMe";
import Experiences from "./components/Pages/Experiences";
import Connect from "./components/Pages/Connect";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainDisplay />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/connect_with_me" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
