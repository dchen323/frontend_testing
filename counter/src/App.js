import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: ""
    };
    this.decrease = this.decrease.bind(this);
  }

  decrease() {
    if (this.state.counter === 0) {
      this.setState({ error: "Cannot decrease counter below 0" });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        <button
          data-test="increment-button"
          onClick={() =>
            this.setState({ error: "", counter: this.state.counter + 1 })
          }
        >
          Increment Counter
        </button>
        <button data-test="decrement-button" onClick={this.decrease}>
          Decrease Counter
        </button>
        <h2 data-test="error-display" style={{ color: "red" }}>
          {this.state.error}
        </h2>
      </div>
    );
  }
}

export default App;
