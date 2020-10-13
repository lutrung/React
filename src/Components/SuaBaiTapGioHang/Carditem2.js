import React, { Component } from "react";

export default class Carditem2 extends Component {
  render() {
    return (
      <tr className="card-item">
        <td>1</td>
        <td>Meizu 16Xs</td>
        <td>
          <img src="./img/meizuphone.jpg" width={50} alt />
        </td>
        <td>
          <button>-</button>1<button>+</button>
        </td>
        <td>7600000</td>
        <td>7600000</td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
