import "./App.css";
import SimpleZoom from "./components/slogan.components";
import PictureWithTextbox from "./components/map.components";
import BlueBoy from "./components/project.components";
import React from 'react';
import Header from './header';
import Footer from './footer';

function App() {
  return <div>
          <SimpleZoom />
          <PictureWithTextbox/>
          <BlueBoy />
          <Header />
      {/* Add other components and content of your website */}
      <Footer />
          
        </div>;

  
}




export default App;
