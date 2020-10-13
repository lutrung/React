import React, { Component } from "react";

export default class SanPham extends Component {
  handleDetail = () => {
    this.props.xuLyChiTiet(this.props.sanPhamProp);
  };
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.sanPhamProp.hinhAnh}
          alt
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.sanPhamProp.tenSP}</h4>
          <button className="btn btn-success" onClick={this.handleDetail}>
            Chi tiết
          </button>
          <button className="btn btn-danger">Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
