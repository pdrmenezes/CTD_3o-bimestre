// import React from "react";
// export default class extends React.Component{}

import { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.props.text)
  }

  render() {

    return (
      <>
        <h1>Hello Class Component</h1>
        <h1>{this.props.text}</h1>
        <button onClick={this.handleClick}>Aperte-me</button>
      </>
    );

  }
}