import React from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Cards />
      </div>
    </div>
  );
}

export default App;
