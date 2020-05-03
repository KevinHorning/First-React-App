import React, { Component } from "react";
import Component1 from "./component1";

class Component2 extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Component1
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h4> Counter #{counter.id} </h4>
          </Component1>
        ))}
        <button onClick={onReset}> reset </button>
      </div>
    );
  }
}

export default Component2;
