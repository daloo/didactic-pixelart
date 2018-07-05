import React from 'react';

export default ({ filter, filterChanged, onlyStocked, onlyStockedChanged }) => (
  <div>
    <input type="text" value={filter} onChange={filterChanged} />
    <input
      type="checkbox"
      value={onlyStocked}
      onChange={onlyStockedChanged}
    />{' '}
    Only show products in stock
  </div>
);
