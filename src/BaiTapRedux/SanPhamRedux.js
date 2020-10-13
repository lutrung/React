import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card text-left">
        <img
          style={{ width: "100%" }}
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt={sanPham.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
// hàm lấy state từ redux biến thành props component
const mapStateToProps = (state) => {
  return {};
};
// hàm tạo ra 1 hàm xử lý để gửi giá trị lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClick) => {
      // từ sản phẩm đc click tạo ra sp giỏ hàng
      let spGH = { ...sanPhamClick, soLuong: 1 };
      // để gửi giá trị lên reducer cần 1 object có thuộc tính type để phân biệt state nào thay đổi
      let action = {
        type: "THEM_GIO_HANG", //thuộc tính bắt buộc
        spGH: spGH,
      };
      // dùng hàm dispatch mà redux cung cấp để đưa action lên reducer
      dispatch(action);
      console.log(sanPhamClick);
    },
  };
};

// tham số 1 hàm connect là 1 hàm(callbcallbackfunctionack): lấy giá trị từ reducer về
// tham só 2 hàm connect là 1 hàm(callbackfunction): đưa các giá trị lên reducer
export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);
