// src/pages/Home.js
import React from "react";
import Header from "../components/header";
import HeroBanner from "../components/slogan.components";
import Map from "../components/map.components";
import Project from "../components/project.components";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Map />
      <Project />
      <Footer />
    </div>
  );
};

export default Home;
