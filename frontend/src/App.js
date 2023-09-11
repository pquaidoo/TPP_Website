import "./App.css";

import AppRouter from "./AppRouter";
import ProjectPage from "./components/projectPage/ProjectPage.components";
import PastProjects from "./components/projectPage/PastProjects.component";
import SimpleZoom from "./components/slogan.components";
import PictureWithTextbox from "./components/map.components";
import BlueBoy from "./components/project.components";

import React from "react";
import Header from "./components/Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      {/* <SimpleZoom />
      <PictureWithTextbox />
      <BlueBoy />
      <AboutUs /> 
      <ProjectPage />
      <PastProjects />
      <SimpleZoom />
      <PictureWithTextbox />
      <BlueBoy />
      <Header />
      <Footer />*/}
      <AppRouter />
    </div>
  );
}
// App.js
// import React from 'react';
// import Header from './header';
// import Footer from './footer';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       {/* Add other components and content of your website */}
//       <Footer />
//     </div>
//   );
// };

export default App;
