// src/pages/Home.js
import React from "react";
import Header from "../header";
import HeroBanner from "../slogan.components";
import Map from "../map.components";
import Project from "../project.components";
import Footer from "../footer";

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
