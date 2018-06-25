import React, { Component } from "react";

import { timer } from "./utils.js";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: ["gym", "fitness"]
    };
    this.hobbiesList = Array(20)
      .fill(true)
      .map((o, i) => i);
    this.handleChange = this.handleChange.bind(this);
    // this.handleChange = timer(this.handleChange);
  }

  handleChange(event) {
    const { options } = event.target;
    // this.setState({
    //   hobbies: [...options].filter(o => o.selected).map(o => o.value)
    // });
    this.setState({
      hobbies: Array.prototype.reduce.call(
        options,
        (acc, o) => (o.selected && acc.push(o.value), acc),
        []
      )
    });
  }

  render() {
    // console.log("rendering... at " + new Date());
    return (
      <div>
        <form>
          <select
            size="10"
            width="200px"
            onChange={this.handleChange}
            value={this.state.hobbies}
            multiple
            style={{ width: "100%", boxSizing: "border-box" }}
          >
            {this.hobbiesList.map(h => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
          <div>
            <ul>
              {this.state.hobbies &&
                this.state.hobbies.map &&
                this.state.hobbies.map(h => <li key={h}>{h}</li>)}
            </ul>
          </div>
          <div>
            <input
              type="text"
              value="A"
              onChange={event => {
                console.log("wanna change huu?");
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
