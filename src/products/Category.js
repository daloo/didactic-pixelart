import React from 'react';

import Product from './Product';

export default ({ name, items }) => {
  return (
    <div>
      <div>
        <u>{name}</u>
      </div>
      {items.map(i => <Product key={i.name} {...i} />)}
    </div>
  );
};
