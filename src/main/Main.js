import React from "react";
import Route from "react-router-dom/Route";

import Home from "../home";
import Search from "../search";
import Creation from "../creation";
import Game from "../game";

export default () => (
  <div className="main container">
    <Route path="/" exact strict component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/creation" exact strict component={Creation} />
    <Route path="/game/:id" component={Game} />
  </div>
);
