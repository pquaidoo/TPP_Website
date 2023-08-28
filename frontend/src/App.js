import "./App.css";
import SimpleZoom from "./components/slogan.components";
import PictureWithTextbox from "./components/map.components";
import BlueBoy from "./components/project.components";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <div>
      <SimpleZoom />
      <PictureWithTextbox />
      <BlueBoy />
      <Header />
      <Footer />
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
