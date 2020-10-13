import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    let { cardProps, tangGiamSoLuong, deleteItem } = this.props;
    return (
      <tr className="card-item">
        <td>1</td>
        <td>{cardProps.tenSP}</td>
        <td>
          <img src={cardProps.hinhAnh} width={50} alt="không có thì báo lỗi" />
        </td>
        <td>
          <button
            onClick={() => {
              tangGiamSoLuong(cardProps.maSP, false);
            }}
          >
            -
          </button>
          {cardProps.soLuong}
          <button
            onClick={() => {
              tangGiamSoLuong(cardProps.maSP, true);
            }}
          >
            +
          </button>
        </td>
        <td>{cardProps.giaBan}</td>
        <td>{(cardProps.giaBan * cardProps.soLuong).toLocaleString()}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteItem(cardProps.maSP);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
