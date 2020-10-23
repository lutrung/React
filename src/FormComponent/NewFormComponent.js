import React, { Component } from "react";
import swal from "sweetalert2";
import { connect } from "react-redux";
import { xoaNguoiDungAction } from "../Redux/actions/QuanLyNguoiDungAction";
class NewFormComponent extends Component {
  handleChangeInput = (event) => {
    // Lấy ra Name và Value
    let { name, value } = event.target; //Bốc tách phần tử

    // Lấy ra attribute types( các thuộc tính trên thẻ tự thêm gọi là attribute)
    let types = event.target.getAttribute("types");
    console.log(types);

    // Xử lý value
    let newValue = { ...this.props.stateForm.value }; //tạo ra value mới giá trị = value cũ
    newValue[name] = value; // thay đổi giá trị bên trong value

    // Xử lý error
    let newErrors = { ...this.props.stateForm.errors };
    newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";

    this.setState(
      {
        value: newValue,
        errors: newErrors,
      },
      () => {
        console.log(this.props.stateForm);
      }
    );

    // Validation các trường hợp
    if (types === "phoneNumber") {
      const regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value.trim())) {
        newErrors[name] = "Dữ liệu phải là số !";
      }
    }
    if (types === "email") {
      const regexNumber = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexNumber.test(value.trim())) {
        newErrors[name] = "Email không hợp lệ !";
      }
    }
    if (types === "tenNguoiDung") {
      const regexNumber = /^[A-Za-z ]+$/;
      if (!regexNumber.test(value.trim())) {
        newErrors[name] = "Dữ liệu phải là chữ!";
      }
    }
    let action = {
      type: "HANDLE_CHANGE_INPUT",
      newState: {
        value: newValue, //gán values = value mới
        errors: newErrors,
      },
    };
    // gửi lên reducer stateForm mới
    this.props.dispatch(action);
  };
  render() {
    // lấy giá trị từ QuanLyNguoiDungReducer.nguoiDungChinhSua về render lên các value
    let {
      maNguoiDung,
      tenNguoiDung,
      soDienThoai,
      email,
    } = this.props.stateForm.value;
    return (
      <form
        // autocomplete="off"
        className="card"
        onSubmit={(event) => {
          //   Cản sự kiện submit lại trang của browser
          event.preventDefault();
          let valid = true;
          //   duyệt thuộc tính trong object values (duyệt thuộc tính trong đối tượng thì dùng ES6 for in)
          for (let tenThuocTinh in this.props.stateForm.value) {
            if (this.props.stateForm.value[tenThuocTinh].trim() === "") {
              valid = false;
            }
          }
          // duyệt lỗi => tất cả lỗi phải rỗng
          for (let tenThuocTinh in this.props.stateForm.errors) {
            if (this.props.stateForm.errors[tenThuocTinh].trim() !== "") {
              valid = false;
            }
          }
          if (!valid) {
            // alert("Dữ liệu không hợp lệ !");
            swal.fire("Thông báo", "Dữ liệu không hợp lệ!", "error");
            return; //Chặn sự kiện submit
          }
          swal.fire("Thông báo", "Thêm người dùng thành công", "success");
          console.log("Submid");
          let action = {
            type: "THEM_NGUOI_DUNG",
            nguoiDung: this.props.stateForm.value,
          };
          this.props.dispatch(action);
        }}
      >
        <div className="card-header bg-dark text-light font-weight-bold">
          <span className="card-title">THÔNG TIN NGƯỜI DÙNG</span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <span>Mã người dùng</span>
                <input
                  value={maNguoiDung}
                  className="form-control"
                  name="maNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">
                  {this.props.stateForm.errors.maNguoiDung}
                </p>
              </div>
              <div className="form-group">
                <span>Tên người dùng</span>
                <input
                  types="tenNguoiDung"
                  value={tenNguoiDung}
                  className="form-control"
                  name="tenNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">
                  {this.props.stateForm.errors.tenNguoiDung}
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <span>Số điện thoại</span>
                <input
                  types="phoneNumber"
                  value={soDienThoai}
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">
                  {this.props.stateForm.errors.soDienThoai}
                </p>
              </div>
              <div className="form-group">
                <span>Email</span>
                <input
                  types="email"
                  value={email}
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">
                  {this.props.stateForm.errors.email}
                </p>
              </div>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-success">Thêm người dùng</button>
              <button
                type="button"
                className="btn btn-primary ml-2"
                onClick={() => {
                  let action = {
                    type: "CAP_NHAT_THONG_TIN",
                    nguoiDungCapNhat: this.props.stateForm.value,
                  };
                  this.props.dispatch(action);
                }}
              >
                Cập nhật thông tin
              </button>
            </div>
            <div className="col-12 d-flex mt-3">
              <input
                name="maNguoiDungXoa"
                placeholder="Nhập vào mã người dùng cần xóa"
                className="form-control"
                onChange={(e) => {
                  this.setState({
                    maNguoiDungXoa: e.target.value,
                  });
                }}
              />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  // dispatch mã người dùng reducer

                  // CÁCH 1
                  // let action = {
                  //   type: "XOA_NGUOI_DUNG",
                  //   maNguoiDung: Number(this.state.maNguoiDungXoa),
                  // };
                  // this.props.dispatch(action);

                  // CÁCH 2
                  this.props.dispatch(
                    xoaNguoiDungAction(this.props.stateForm.maNguoiDungXoa)
                  );
                }}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
// viết hàm lấy state nguoiDungChinhSua từ reducer về component load lên các thẻ input
const mapStateToProps = (state) => {
  return {
    nguoiDungChinhSua: state.stateQuanLyNguoiDung.nguoiDungChinhSua,
    stateForm: state.stateQuanLyNguoiDung.stateForm, //lấy state form từ redux về => binding lên hàm render
  };
};
export default connect(mapStateToProps)(NewFormComponent);
