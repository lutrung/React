import React, { Component } from "react";

export default class SanPham extends Component {
  handleDetail = () => {
    const currentProduct = this.props.sanPhamProps;
    this.props.xuLyChiTiet(currentProduct);
  };

  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.sanPhamProps.hinhAnh}
          alt="không có thì báo lỗi"
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.sanPhamProps.tenSP}</h4>
          <button className="btn btn-success" onClick={this.handleDetail}>
            Chi tiết
          </button>
          {/* sd onClick có ()=> thì ko cần tạo như HandleDetail */}
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleCardListttt(this.props.sanPhamProps);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
