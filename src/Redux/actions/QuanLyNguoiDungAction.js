import {
  XOA_NGUOI_DUNG,
  SUA_NGUOI_DUNG,
} from "../Constants/QuanLyNguoiDungConst";

// định nghĩa action để các component trong ứng dụng muốn gọi đến nghiệp vụ này thì import vào gọi

export const xoaNguoiDungAction = (maNguoiDung) => {
  return {
    type: XOA_NGUOI_DUNG,
    maNguoiDung,
  };
};

// định nghĩa action chỉnh sửa người dung
export const suaNguoiDungAction = (nguoiDung) => {
  return {
    type: SUA_NGUOI_DUNG,
    maNguoiDungChinhSua: nguoiDung,
  };
};
