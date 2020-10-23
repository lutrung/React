import React, { Component, PureComponent } from "react";
// pureComponent dùng để render lại Component CHỈ khi có giá trị thay đổi trong component đó đối vs giá trị MẢNG HAY OBJECT thì phải xài {...this.state...}
export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps_Child");
  }

  //   shouldComponentUpdate() {
  //     console.log("shouldComponentUpdate_Child");
  //     return true; //true thì tiếp tục render còn false thì ngưng render
  //   }
  render() {
    console.log("render_Child");
    return (
      <div>
        <h3>Child number:{this.props.number.index}</h3>
        <h3>Test:{this.props.test}</h3>
        Conponent child
      </div>
    );
  }
  componentDidMount() {
    //   gọi API tại Didmount
    console.log("componentDidMount_Child");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate_Child");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    //   Life cycle chạy trước khi component mất khỏi giao diện
  }
}
