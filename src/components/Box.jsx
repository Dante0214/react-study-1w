import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.name}</h1>
      <img src="" />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
