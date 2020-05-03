import React, { Component } from "react";

// stateless functional component
// object destructuring
const Component3 = ({ totalCounters }) => {
  return (
    <React.Fragment>
      <h1> Grocery Cart </h1>
      <h3> Number of Counters: {totalCounters} </h3>
    </React.Fragment>
  );
};

export default Component3;
