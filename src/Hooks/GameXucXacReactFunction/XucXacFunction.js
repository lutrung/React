import React from "react";
import { connect, useSelector } from "react-redux";
export default function XucXacFunction(props) {
  //  useSelector là hook thay thế cho phương thức mapStateToProps của react-redux
  // useSelector dùng để kết nối đến reducer lấy về state
  // CÁCH 1  const mangXucXac = useSelector(state => state.stateBaiTapGameXucXac.mangXucXac)
  // CÁCH 2
  // const { mangXucXac,...} muốn lấy gì từ reducer thì bỏ vô sau dấu ,
  const { mangXucXac } = useSelector((state) => state.stateBaiTapGameXucXac);
  const renderXucXac = () => {
    return mangXucXac.map((xucXac, index) => {
      return (
        <img
          className="m-5"
          key={index}
          src={xucXac.hinhAnh}
          style={{ width: 50 }}
        />
      );
    });
  };
  return (
    <div>
      <div className="row text-center">
        <div className="col-4">
          <button className="btn btn-success p-5 rounded-circle">
            <span className="display-4">Tài</span>
          </button>
        </div>
        <div className="col-4">{renderXucXac()}</div>
        <div className="col-4">
          <button className="btn btn-danger p-5 rounded-circle">
            <span className="display-4">Xỉu</span>
          </button>
        </div>
      </div>
    </div>
  );
}
