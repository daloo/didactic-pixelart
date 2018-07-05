import React from 'react';

import ProductsForm from './ProductsForm';
import Categories from './Categories';

import items from './items.data';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onlyStocked: false,
      filter: ''
    };
    this.onlyStockedChanged = this.onlyStockedChanged.bind(this);
    this.filterChanged = this.filterChanged.bind(this);
  }

  onlyStockedChanged(event) {
    this.setState({
      onlyStocked: event.target.checked
    });
  }

  filterChanged(event) {
    this.setState({
      filter: event.target.value
    });
  }

  getItemsByCategory() {
    let newItems = this.state.filter
      ? items.filter(({ name }) => name.indexOf(this.state.filter) !== -1)
      : items;
    newItems = this.state.onlyStocked
      ? newItems.filter(({ stocked }) => stocked)
      : newItems;

    return newItems.reduce(categoryFilter, {});
  }

  render() {
    return (
      <div>
        <ProductsForm
          onlyStocked={this.state.onlyStocked}
          filter={this.state.filter}
          filterChanged={this.filterChanged}
          onlyStockedChanged={this.onlyStockedChanged}
        />
        <Categories items={this.getItemsByCategory()} />
      </div>
    );
  }
}

const categoryFilter = (categories, item) => {
  const category =
    categories[item.category] || (categories[item.category] = []);
  category.push(item);
  return categories;
};
