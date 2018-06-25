import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Menu, Main, Footer } from "./main";

import "./App.css";

export default () => (
  <Router>
    <div className="app container">
      <Menu />
      <Main />
      <Footer />
    </div>
  </Router>
);
