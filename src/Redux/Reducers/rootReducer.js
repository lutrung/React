// File khai báo tất cả các state của ứng dụng
import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import baiTapGioHangReducer from "./BaiTapGameXucXacReucer";
// state(store) tổng của ứng dụng
export const rootReducer = combineReducers({
  // nơi khai báo các state theo từng nghiệp vụ
  StateBaiTapGioHang: BaiTapGioHangReducer,
  stateBaiTapGameXucXac: baiTapGioHangReducer,
});
