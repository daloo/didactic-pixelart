import React from "react";
import { NavLink } from "react-router-dom";

export default () => (
  <nav className="menu container">
    <div className="menuitem">
      <NavLink to="/">Home</NavLink>
    </div>
    <div className="menuitem">
      <NavLink to="/search">Search</NavLink>
    </div>
    <div className="menuitem">
      <NavLink to="/creation">Creation</NavLink>
    </div>
  </nav>
);
