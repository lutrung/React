import React, { Component } from "react";
import DanhSachSanPham from "./data.json";
import GioHangRedux from "./GioHangRedux";
import SanPhamRedux from "./SanPhamRedux";

export default class BaiTapGioHangRedux extends Component {
  renderSanPham = () => {
    return DanhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamRedux sanPham={sanPham} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Bài Tập Giỏ Hàng REDUX</h3>
        <div className="row">{this.renderSanPham()}</div>
        <div className="">
          <div className="text-right">Giỏ hàng (0)</div>
          <GioHangRedux />
        </div>
      </div>
    );
  }
}
