import React, { Component } from "react";
import swal from "sweetalert2";
export default class FormComponent extends Component {
  state = {
    value: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
  };

  handleChangeInput = (event) => {
    // Lấy ra Name và Value
    let { name, value } = event.target; //Bốc tách phần tử

    // Lấy ra attribute types( các thuộc tính trên thẻ tự thêm gọi là attribute)
    let types = event.target.getAttribute("types");
    console.log(types);

    // Xử lý value
    let newValue = { ...this.state.value }; //tạo ra value mới giá trị = value cũ
    newValue[name] = value; // thay đổi giá trị bên trong value

    // Xử lý error
    let newErrors = { ...this.state.errors };
    newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";

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

    this.setState(
      {
        value: newValue,
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );

    // this.setState(
    //   {
    //     [name]: value, //Cách 1
    //     // maNguoiDung: value, // Cách 2
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
  };

  render() {
    return (
      <form
        className="card"
        onSubmit={(event) => {
          //   Cản sự kiện submit lại trang của browser
          event.preventDefault();
          let valid = true;
          //   duyệt thuộc tính trong object values (duyệt thuộc tính trong đối tượng thì dùng ES6 for in)
          for (let tenThuocTinh in this.state.value) {
            if (this.state.value[tenThuocTinh].trim() === "") {
              valid = false;
            }
          }
          // duyệt lỗi => tất cả lỗi phải rỗng
          for (let tenThuocTinh in this.state.errors) {
            if (this.state.errors[tenThuocTinh].trim() !== "") {
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
                  value={this.state.value.maNguoiDung}
                  className="form-control"
                  name="maNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.maNguoiDung}</p>
              </div>
              <div className="form-group">
                <span>Tên người dùng</span>
                <input
                  value={this.state.value.tenNguoiDung}
                  className="form-control"
                  name="tenNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.tenNguoiDung}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <span>Số điện thoại</span>
                <input
                  types="phoneNumber"
                  value={this.state.value.soDienThoai}
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
              <div className="form-group">
                <span>Email</span>
                <input
                  types="email"
                  value={this.state.value.email}
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-success">Thêm người dùng</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
