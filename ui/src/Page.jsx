import React from "react";
import Contents from "./Contents.jsx";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink className="navlinks" exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink className="navlinks" to="/issues">
        Issue List
      </NavLink>
      {" | "}
      <NavLink className="navlinks" to="/report">
        Report
      </NavLink>
    </nav>
  );
}

export default function() {
  return (
    <div className="navbar">
      <Navbar />
      <Contents />
    </div>
  );
}
