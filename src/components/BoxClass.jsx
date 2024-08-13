import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    let result;

    if (
      this.props.name === "Computer" &&
      this.props.result !== "Tie" &&
      this.props.result !== ""
    ) {
      result = this.props.result === "Win" ? "Lose" : "Win";
    } else {
      result = this.props.result;
    }
    return (
      <div className={`box ${result}`}>
        <h1 className="name">{this.props.name}</h1>
        <img
          className="item-img"
          src={this.props.item && this.props.item.img}
          alt={this.props.item && this.props.item.name}
        />
        <h2>{result}</h2>
      </div>
    );
  }
}
