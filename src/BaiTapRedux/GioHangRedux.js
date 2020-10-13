import React, { Component } from "react";
// import SanPhamGHRedux from "./SanPhamGHRedux";
// import SanPhamGHRedux from "./SanPhamRedux";
// import thư viện kết nối react component và redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    console.log(this.props.gioHang)
    return this.props.gioHang.map((spGioHang, index) => {
      return (
        <tr key={index}>
          <td>{spGioHang.maSP}</td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} width={50} />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiam(spGioHang.maSP, false);
              }}
            >
              -
            </button>
            {spGioHang.soLuong}
            <button
              onClick={() => {
                this.props.tangGiam(spGioHang.maSP, true);
              }}
            >
              +
            </button>
          </td>
          <td>{spGioHang.giaBan.toLocaleString()}</td>
          <td>{(spGioHang.giaBan * spGioHang.soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(spGioHang.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log("props", this.props.gioHang);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
      </table>
    );
  }
}

// Láy state từ ređux store biến thành props của component
// tham số state: đại diện cho rootReducer
const mapStateToProps = (state) => {
  //state là store tổng => truy xuất đến BaiTapGioHangReducer =>  biến state trên BaiTapGioHangReducer
  return {
    gioHang: state.StateBaiTapGioHang.gioHang,
  };
};
// XÓA SẢN PHẨM
const mapDispatchToProps = (dispatch) => {
  return {
    // XÓA SẢN PHẨM
    xoaGioHang: (maSPClick) => {
      console.log(maSPClick);
      // tạo ra action gửi lên reducer
      const action = {
        type: "XOA_GIO_HANG",
        maSPClick,
      };
      dispatch(action);
    },
    // TĂNG GIẢM
    tangGiam: (maSP, tangGiam) => {
      // tạo ra action gửi lên reducer
      const action = {
        type: "TANG_GIAM_SOLUONG",
        maSP,
        tangGiam,
      };

      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
{
  /* kết nối giữa gioHangReduxComponent và ređux store */
}
