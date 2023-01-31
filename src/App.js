import React from "react";
import Slide from "./components/Slide";
import data from "./data";
const App = () => {
  return (
    <div className="container">
      <div className="title">
        <h2>Our Reviews</h2>
        <div className="underline"></div>
        <Slide />
      </div>
    </div>
  );
};

export default App;
