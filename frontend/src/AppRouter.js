// src/AppRouter.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/projects/Projects";
import PastProjects from "./pages/projects/PastProject";
import CurrentProjects from "./pages/projects/CurrentProjects";

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
