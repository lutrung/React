// Giá trị ban đầu của state
const stateDefaut = {
  gioHang: [
    // {
    //   maSP: 1,
    //   tenSP: "Iphone",
    //   hinhAnh: "http://picsum.photos/50",
    //   soLuong: 1,
    //   giaBan: 1000,
    // },
  ],
};

// STATE
const BaiTapGioHangReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // xử lý cập nhật lại state
      let gioHangUpdate = [...state.gioHang];
      // tìm sp có trong giỏ hàng hay không
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.spGH.maSP
      );
      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push(action.spGH);
      }
      // gán lại state cũ = giá trị mới
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangUpdate = [...state.gioHang];
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.maSPClick
      );
      if (index !== -1) {
        gioHangUpdate.splice(index, 1);
      }
      // cập nhật lại state.gioHang
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "TANG_GIAM_SOLUONG": {
      let gioHangUpdate = [...state.gioHang];
      let spGioHang = gioHangUpdate.find((sp) => sp.maSP === action.maSP);
      if (spGioHang) {
        if (action.tangGiam) {
          spGioHang.soLuong += 1;
        } else {
          if (spGioHang.soLuong > 1) {
            spGioHang.soLuong -= 1;
          }
        }
      }
      // gán lại state cũ = giá trị mới
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
  }
  return { ...state };
};

export default BaiTapGioHangReducer;
