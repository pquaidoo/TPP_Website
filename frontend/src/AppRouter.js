// src/AppRouter.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/projects/Projects";
import PastProjects from "./components/pages/projects/PastProject";
import CurrentProjects from "./components/pages/projects/CurrentProjects";

const AppRouter = () => {
  console.log("AppRouter");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/past" element={<PastProjects />} />
        <Route path="/projects/current" element={<CurrentProjects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
