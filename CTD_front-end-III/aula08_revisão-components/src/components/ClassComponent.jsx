import React, { Component } from "react";
export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      name: "numberman",
    };
  }

  increment = () => {
    this.setState({
      number: this.state.number + 1,
      name: "numbermore",
    });
  };

  decrement = () => {
    this.setState({
      number: this.state.number - 1,
      name: "numberless",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.number}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrementar</button>
      </div>
    );
  }
}
