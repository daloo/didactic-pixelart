import React from "react";
import { NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";

import Game from "../game";
import data from "../data/grids.data";

export default ({ match }) => (
  <div>
    <div>Critères de recherche</div>
    <div>
      Résultats de recherche :<br />
      <ul>{results}</ul>
    </div>
  </div>
);

const results = data.map((game, index) => (
  <li key={game.name}>
    <NavLink to={"/game/" + index}>
      {game.name} by {game.author} created on the {game.creationdate} / Size :{" "}
      {game.grid.length}*{game.grid[0].length}
    </NavLink>
  </li>
));
