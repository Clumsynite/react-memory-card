import React from "react";
import "../Styles/Navbar.css";
const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="nav nav-bg"></div>
      <div className="scoreboard">
        <div className="current"> Score: {props.score}</div>
        <div className="best"> Best Score: {props.best}</div>
      </div>
    </div>
  );
};

export default Navbar;
