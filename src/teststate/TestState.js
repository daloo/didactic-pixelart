import React from 'react';

export default class TestStateParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: 1 };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(({ data }) => ({ data: data + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <React.Fragment>
        <TestStateComponent name="digits" data={this.state.data} />
        <TestStateComponent
          name="tenth"
          data={Math.trunc(this.state.data / 10)}
        />/
      </React.Fragment>
    );
  }
}

class TestStateComponent extends React.PureComponent {
  //   shouldComponentUpdate(nextProps) {
  //     return this.props.data !== nextProps.data;
  //   }

  render() {
    console.log(`rerendering TestStateComponent ${this.props.name}`);
    return <h1>{this.props.data}</h1>;
  }
}
