import React, { Component } from "react";
import FormComponent from "./FormComponent";
import { connect } from "react-redux";
import {
  xoaNguoiDungAction,
  suaNguoiDungAction,
} from "../Redux/actions/QuanLyNguoiDungAction";
import NewFormComponent from "./NewFormComponent";
class DanhSachNguoiDung extends Component {
  renderMangNguoiDung = () => {
    return this.props.mangNguoiDung.map((member, index) => {
      return (
        <tr key={index}>
          <td>{member.maNguoiDung}</td>
          <td>{member.tenNguoiDung}</td>
          <td>{member.soDienThoai}</td>
          <td>{member.email}</td>
          <td>
            <button
              className="btn btn-primary mx-1"
              onClick={() => {
                // tạo ra acion từ người dùng được click
                let action = suaNguoiDungAction(member);
                // dispatch action nguoiDungChinhSua lên reducer
                this.props.dispatch(action);
              }}
            >
              Sửa
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                // gọi hàm trong mapDispatchToPRops
                // Hàm này khi sử dụng connect vs redux sẽ tự có props này (nói chung cách này là khỏi cần khai báo const mapDispatchToProps ở dưới)

                // let action = {
                //   type: "XOA_NGUOI_DUNG",
                //   maNguoiDung: member.maNguoiDung,
                // };

                this.props.dispatch(xoaNguoiDungAction(member.maNguoiDung));
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
    return (
      <div className="container">
        {/* <FormComponent /> */}
        <NewFormComponent />
        <table className="table">
          <thead>
            <th>Mã người dùng</th>
            <th>Tên người dùng</th>
            <th>Số điện thoại</th>
            <th>Email</th>
          </thead>
          <tbody>{this.renderMangNguoiDung()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangNguoiDung: state.stateQuanLyNguoiDung.mangNguoiDung,
  };
};
export default connect(mapStateToProps)(DanhSachNguoiDung);
