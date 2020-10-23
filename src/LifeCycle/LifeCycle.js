import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: {
        index: 1,
      },
      test: 0,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("render");
    return (
      <div>
        <header>Header</header>
        <h1>LifeCycle number: {this.state.number.index}</h1>
        <h1>Test: {this.state.test}</h1>
        <button
          onClick={() => {
            let newNumber = { ...this.state.number };
            newNumber.index += 1;

            this.setState({
              number: newNumber,
            });
            let newTest = this.state.test;
            newTest += 1;
            this.setState({
              test: newTest,
            });
          }}
        >
          +
        </button>
        {/* {this.state.number < 3 ? <ChildComponent /> : ""} */}
        <ChildComponent number={this.state.number} test={this.state.test} />
      </div>
    );
  }
  componentDidMount() {
    //   gọi API tại Didmount
    console.log("componentDidMount");
  }

  //   Hàm này chạy khi setState hoặc thay đổi props
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
