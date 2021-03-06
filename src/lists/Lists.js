import React from 'react';

class List extends React.Component {
  render() {
    let { name, items } = this.props;
    let options = [];

    options.push(<option value={name}>{name}</option>);

    for (var index in items) {
      let item = items[index];
      options.push(<option value={item}>{item}</option>);
    }

    return (
      <span>
        <select
          onChange={this.props.handler}
          value={this.props.value ? this.props.value : 'Model'}
        >
          {options}
        </select>
      </span>
    );
  }
}

export default class TwoLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: null,
      model: null,
      models: [],
      buttonDisabled: true
    };
    this.brandChanged = this.brandChanged.bind(this);
    this.modelChanged = this.modelChanged.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.knownModel = this.knownModel.bind(this);
  }

  brandChanged(event) {
    let brand = event.target.value;
    if (this.knownBrand(brand)) {
      let models = this.data()[brand];
      this.setState({
        brand,
        model: null,
        models: models,
        buttonDisabled: true
      });
    } else {
      this.setState({
        brand: null,
        model: null,
        models: [],
        buttonDisabled: true
      });
      this.setState({ brand: null, models: [] });
    }
  }

  modelChanged(event) {
    let model = event.target.value;
    if (this.knownModel(model)) {
      this.setState({ model, buttonDisabled: false });
    } else {
      this.setState({ model: null, buttonDisabled: true });
    }
  }

  buttonClicked(event) {
    let { brand, model } = this.state;
    console.log(this.state);
    console.log(`${brand} ${model} riding...`);
  }

  data() {
    return {
      Opel: ['Agila', 'Astra', 'Corsa', 'Vectra'],
      Škoda: ['Fabia', 'Octavia', 'Superb', 'Yeti'],
      Toyota: ['Auris', 'Avensis', 'Corolla', 'Prius']
    };
  }

  brands() {
    return Object.keys(this.data());
  }

  knownBrand(brand) {
    return this.brands().indexOf(brand) !== -1;
  }

  knownModel(model) {
    return this.state.models.indexOf(model) !== -1;
  }

  render() {
    return (
      <div id={this.props.id}>
        <List
          name="Brand"
          items={this.brands()}
          handler={this.brandChanged}
          value={this.state.brand}
        />
        <List
          name="Model"
          items={this.state.models}
          handler={this.modelChanged}
          value={this.state.model}
        />
        <button
          onClick={this.buttonClicked}
          disabled={this.state.buttonDisabled}
        >
          Ride
        </button>
      </div>
    );
  }
}
