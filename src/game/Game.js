import React from 'react';
import data from '../data/grids.data';

export default props => {
  const id = props.match.params.id;
  const game = data[id];

  return (
    <div>
      <div>author : {game.author}</div>
      <div>name : {game.name}</div>
      <div>size : {size(game)}</div>
      <div>colors : {game.colors}</div>
      <div>Creation date : {game.creationdate}</div>
    </div>
  );
};

const size = data => [data.grid.length, data.grid[0].length];
