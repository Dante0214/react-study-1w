import React, { Component } from "react";
import { Paper, Typography } from "@mui/material";

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
      <Paper
        elevation={3}
        sx={{
          textAlign: "center",
          backgroundColor:
            result === "Win"
              ? "#e8f5e9"
              : result === "Lose"
              ? "#ffebee"
              : "#fff",
        }}
      >
        <Typography variant="h3" gutterBottom>
          {this.props.name}
        </Typography>
        {this.props.item && (
          <img
            src={this.props.item.img}
            alt={this.props.item.name}
            style={{ width: "100%", maxWidth: "200px" }}
          />
        )}
        <Typography variant="h4">{result}</Typography>
      </Paper>
    );
  }
}
