import React, { Component } from "react";

class Component1 extends Component {
  //imageUrl: "https://picsum.photos/200",
  render() {
    return (
      <div>
        <p> value: {this.props.counter.value} </p>
        <button onClick={() => this.props.onIncrement(this.props.counter)}>
          increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          delete
        </button>
      </div>
    );
  }
}

export default Component1;
