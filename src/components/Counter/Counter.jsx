import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  decrement() {
    let { count } = this.state;
    this.setState({
      count: ++count,
    });
  }

  increment() {
    let { count } = this.state;
    if (count > 0) {
      this.setState({
        count: --count,
      });
    }
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          +
        </button>
      </>
    );
  }
}

export default Counter;
