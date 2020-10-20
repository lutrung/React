import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: {
        index: 1,
      },
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
        <button
          onClick={() => {
            let newNumber = { ...this.state.number };
            newNumber.index += 1;

            this.setState({
              number: newNumber,
            });
          }}
        >
          +
        </button>
        {/* {this.state.number < 3 ? <ChildComponent /> : ""} */}
        <ChildComponent number={this.state.number} />
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
