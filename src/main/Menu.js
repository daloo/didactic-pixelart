import React from 'react';
import { NavLink } from 'react-router-dom';

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
    <div className="menuitem">
      <NavLink to="/products">Products</NavLink>
    </div>
    <div className="menuitem">
      <NavLink to="/todos">Todos</NavLink>
    </div>
    <div className="menuitem">
      <NavLink to="/lists">lists</NavLink>
    </div>
    <div className="menuitem">
      <NavLink to="/teststate">teststate</NavLink>
    </div>
  </nav>
);
