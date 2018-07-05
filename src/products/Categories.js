import React from 'react';

import Category from './Category';

export default props => {
  return (
    <div>
      <div>Name Price</div>
      {categories(props.items)}
    </div>
  );
};

const categories = items =>
  Object.keys(items).map(key => (
    <Category key={key} name={key} items={items[key]} />
  ));
