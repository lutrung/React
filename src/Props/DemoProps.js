import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";
// Props công dụng: truyền dữ liệu giữa các Component
export default class DemoProps extends Component {
  state = {
    ten: "Hello",
    lop: 51,
  };
  render() {
    return (
      <div>
        <h2>Props</h2>
        <FunctionProps
          // Cách tuyền props trong ReactJS
          hoVaTen={this.state.ten}
          Lop={this.state.lop}
          maSV={151120410}
        />
        <ClassProps
          hoVaTen={this.state.ten}
          Lop={this.state.lop}
          maSV={151120410}
        />
      </div>
    );
  }
}
