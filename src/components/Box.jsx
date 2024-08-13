import { Paper, Typography } from "@mui/material";
import React from "react";

const Box = (props) => {
  let result;
  if (
    props.name === "Computer" &&
    props.result !== "Tie" &&
    props.result !== ""
  ) {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result;
  }
  return (
    <Paper
      elevation={3}
      sx={{
        textAlign: "center",
        backgroundColor:
          result === "Win" ? "#e8f5e9" : result === "Lose" ? "#ffebee" : "#fff",
      }}
    >
      <Typography variant="h3" gutterBottom>
        {props.name}
      </Typography>
      {props.item && (
        <img
          src={props.item.img}
          alt={props.item.name}
          style={{ width: "100%", maxWidth: "200px" }}
        />
      )}
      <Typography variant="h4">{result}</Typography>
    </Paper>
  );
};

export default Box;
