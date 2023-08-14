import "./App.css";
import SimpleZoom from "./components/slogan.components";

function App() {
  return <SimpleZoom />;
}
// App.js
import React from 'react';
import Header from './header';
import Footer from './footer';

const App = () => {
  return (
    <div>
      <Header />
      {/* Add other components and content of your website */}
      <Footer />
    </div>
  );
};



export default App;
