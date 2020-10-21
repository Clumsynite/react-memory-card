import React from "react";
import "../Styles/Navbar.css";
import images from "./images";
const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="nav nav-bg"></div>
      <div className="scoreboard">
        <div className="current">
          {" "}
          Score: {props.score} of {images.length}
        </div>
        <div className="best"> Best Score: {props.best}</div>
      </div>
    </div>
  );
};

export default Navbar;
