import React from 'react';

const outOfStockStyle = {
  color: 'red',
  'font-weight': 'bold'
};

const stockedStyle = {
  color: 'black'
};

export default ({ stocked, name, price }) => {
  const style = stocked ? stockedStyle : outOfStockStyle;
  return (
    <div>
      <span style={style}>{name}</span>
      <span>{price}</span>
    </div>
  );
};
