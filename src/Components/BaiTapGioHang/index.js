// Các bước thực hiện:
// 1. dàn layout(html css) - done
// 2. xác định dữ liệu thay đổi và lưu state
// 3. lấy data trong state đi binding ra jsx
// 4. render danh sách sản phẩm
// 5. xây dụng chức năng xem chi tiết
// 6. xây dụng chức năng thêm vào giỏ hàng
// 7. xây dụng chức năng tăng giảm số lượng
// 8. xây dụng chức năng xóa sản phẩm khỏi giỏ hàng
// 9. xây dụng chức năng hiển thị tổng số sản phẩm trong giỏ hàng

import React, { Component } from "react";
import danhSachSanPham from "./data.json"; //danhSachSanPham là data.json(mảng)
import Modal from "./Modal";
import SanPham from "./SanPham";
export default class BaiTapGioHang extends Component {
  // Bước 2
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    cardList: [],
  };

  handleCardList = (sanPham) => {
    //   tìm vị trí = findIndex
    const index = this.state.cardList.findIndex((card) => {
      return card.maSP === sanPham.maSP;
    });
    let copyOfStateCardList = [...this.state.cardList];
    if (index !== -1) {
      // tìm thấy > tăng số lượng
      copyOfStateCardList[index].soLuong += 1;
    } else {
      // không tìm thấy thì thêm vào mảng
      const newCard = { ...sanPham, soLuong: 1 };
      copyOfStateCardList = [...copyOfStateCardList, newCard];
    }
    // const newCard = { ...sanPham, soLuong: 1 };
    // // push san pham vô mảng cardList
    // const cardList = [...this.state.cardList, newCard];
    // console.log(copyOfStateCardList);
    this.setState({
      cardList: copyOfStateCardList,
    });
  };

  handleSanPhamChiTiet = (sanPhamChiTiet) => {
    this.setState({
      //   sanPhamChiTiet: sanPhamChiTiet,   cách 1
      sanPhamChiTiet, //cách 2 ES6 rút gọn giống nhau
    });
  };
  // Bước 4
  renderDanhSachSanPham = () => {
    return danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4" key={index}>
          {/* props */}
          <SanPham
            sanPhamProps={sanPham}
            xuLyChiTiet={this.handleSanPhamChiTiet}
            handleCardListttt={this.handleCardList}
          />
        </div>
      );
    });
  };

  deleteItem = (maSP) => {
    // xử lý xóa giỏ hàng
    // console.log("maSP", maSP);
    let gioHangUpdate = [...this.state.cardList];
    const indexSP = gioHangUpdate.findIndex((spGH) => spGH.maSP === maSP);
    if (indexSP !== -1) {
      gioHangUpdate.splice(indexSP, 1);
    }
    // set lại state giỏ hàng
    this.setState({
      cardList: gioHangUpdate,
    });
  };

  tangGiamSoLuong = (
    maSP,
    tangGiam // tangGiam = true => tang,false
  ) => {
    // tìm ra sản phẩm bấm nút + hoặc -
    let gioHangUpdate = [...this.state.cardList];
    // tìm sản phẩm trong giỏ hàng
    let spGH = gioHangUpdate.find((sp) => sp.maSP === maSP);
    if (spGH) {
      // nếu tìm thấy sp đó !=undefine
      if (tangGiam) {
        spGH.soLuong += 1;
      } else {
        if (spGH.soLuong > 1) {
          spGH.soLuong -= 1;
        }
      }
    }
    // set lại giỏ hàng
    this.setState({
      cardList: gioHangUpdate,
    });
  };

  tongSoLuong = () => {
    let tongSoLuongSP = this.state.cardList.reduce((soLuong, sp, index) => {
      return (soLuong += sp.soLuong);
    }, 0);
    return tongSoLuongSP;
  };

  tongTien = () => {
    let tongTien = this.state.cardList.reduce((tongSoTien, sp, index) => {
      return (tongSoTien += sp.soLuong * sp.giaBan);
    }, 0);
    return tongTien;
  };

  render() {
    return (
      <div>
        <div>
          <section className="container">
            <h3 className="title text-center">Bài tập giỏ hàng</h3>
            <div className="container text-center my-2">
              <button
                className="btn btn-danger mr-1"
                data-toggle="modal"
                data-target="#modelId"
              >
                Giỏ hàng ({this.tongSoLuong()})
              </button>
              <button
                className="btn btn-success "
                data-toggle="modal"
                data-target="#modelId"
              >
                Tổng tiền ({this.tongTien().toLocaleString()} VND)
              </button>
            </div>
            <div className="container danh-sach-san-pham">
              <div className="row">{this.renderDanhSachSanPham()}</div>
            </div>
            <Modal
              deleteItem={this.deleteItem}
              tangGiamSoLuong={this.tangGiamSoLuong}
              cardList={this.state.cardList}
            />
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.sanPhamChiTiet.hinhAnh}
                  alt="không có thì báo lỗi"
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.state.sanPhamChiTiet.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.sanPhamChiTiet.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
        ;
      </div>
    );
  }
}
