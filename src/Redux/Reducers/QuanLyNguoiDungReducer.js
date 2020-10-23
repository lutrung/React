import {
  SUA_NGUOI_DUNG,
  XOA_NGUOI_DUNG,
} from "../Constants/QuanLyNguoiDungConst";

const stateDefault = {
  mangNguoiDung: [
    {
      maNguoiDung: 1,
      tenNguoiDung: "Nguyễn A",
      soDienThoai: 123,
      email: "nguyenvana@gmail.com",
    },
    {
      maNguoiDung: 2,
      tenNguoiDung: "Nguyễn B",
      soDienThoai: 456,
      email: "nguyenvanb@gmail.com",
    },
  ],
  nguoiDungChinhSua: {
    maNguoiDung: "",
    tenNguoiDung: "",
    soDienThoai: "",
    email: "",
  },
  stateForm: {
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
    maNguoiDungXoa: "",
  },
};
const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case XOA_NGUOI_DUNG: {
      let mangNguoiDungUpdate = [...state.mangNguoiDung];
      // dùng filer để lọc ra maNguoiDung khác mã bên action.maNguoiDung

      mangNguoiDungUpdate = mangNguoiDungUpdate.filter(
        (member) => member.maNguoiDung != action.maNguoiDung
      );
      state.mangNguoiDung = mangNguoiDungUpdate;
      console.log(mangNguoiDungUpdate);
      return { ...state };
    }
    case SUA_NGUOI_DUNG: {
      // lấy người dùng được click từ nút sửa
      let nguoiDungDuocClick = { ...action.maNguoiDungChinhSua };
      // Cập nhật state người dùng chỉnh sủa = người dùng được click
      state.nguoiDungChinhSua = nguoiDungDuocClick;
      //   xử lý theo cách 2 <NewFormComponent>
      state.stateForm = { ...state.stateForm, value: nguoiDungDuocClick };
      return { ...state };
    }
    case "HANDLE_CHANGE_INPUT": {
      state.stateForm = { ...action.newState };
      return { ...state };
    }
    case "CAP_NHAT_THONG_TIN": {
      // cập nhật lại thông tin người dùng trong mảng
      let mangNguoiDungCapNhat = [...state.mangNguoiDung];
      // tìm ra người dùng có mã cần cập nhật thông tin
      let index = mangNguoiDungCapNhat.findIndex(
        (member) => member.maNguoiDung === action.nguoiDungCapNhat.maNguoiDung
      );
      // cập nhật thông tin của vị trí người dùng đó = người dùng mới
      mangNguoiDungCapNhat[index] = action.nguoiDungCapNhat;
      state.mangNguoiDung = mangNguoiDungCapNhat;
    }
    case "THEM_NGUOI_DUNG": {
      const mangNguoiDungCapNhat = [...state.mangNguoiDung, action.nguoiDung];
      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default QuanLyNguoiDungReducer;
