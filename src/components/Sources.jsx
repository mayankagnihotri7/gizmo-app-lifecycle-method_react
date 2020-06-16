import React from "react";

const Sources = (props) => {
  console.log("inside sources");
  return (
    <>
      <button onClick={props.click}>{props.children}</button>
      <h1>{props.info.name}</h1>
      <h2>{props.info.description}</h2>
      <h3>{props.info.category}</h3>
    </>
  );
};

export default Sources;
