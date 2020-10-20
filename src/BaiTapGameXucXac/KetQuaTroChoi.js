import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  // renderKetQua = () => {
  //   sử dụng thuộc tính this.props.mangXucXac để hiển thị kết quả
  //   let tongDiem = this.props.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
  //     return (tongDiemXX += xucXac.so);
  //   }, 0);
  //   let ketQua = tongDiem > 9 ? "Tài" : "Xỉu";
  //   return (
  //     <div>
  //       <span className="display-4 text-dark">
  //         {tongDiem} - {ketQua}
  //       </span>
  //     </div>
  //   );
  // };
  render() {
    return (
      <div className="text-center">
        <div className="display-4">
          Kết quả là:{" "}
          <span className="text-warning">
            {" "}
            {this.props.ketQuaTaiXiu} - {this.props.diemXucXac}
          </span>
        </div>

        <div className="display-4">
          Bạn chọn: <span className="text-danger">{this.props.banChon}</span>
        </div>
        <div className="display-4">
          Số bàn thắng:{" "}
          <span className="text-info">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi:{" "}
          <span className="text-primary">{this.props.tongSoBanChoi}</span>
        </div>
        <div className="text-center">
          <button
            className="btn btn-warning p4 mt-5"
            onClick={() => {
              this.props.playGame();
            }}
          >
            <span style={{ fontSize: 50 }}>Bay nhà</span>
          </button>
        </div>
      </div>
    );
  }
}
// lấy state từ redux về biến thành props component
const mapStateToProps = (state) => {
  return {
    banChon: state.stateBaiTapGameXucXac.banChon,
    soBanThang: state.stateBaiTapGameXucXac.soBanThang,
    tongSoBanChoi: state.stateBaiTapGameXucXac.tongSoBanChoi,
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
    ketQuaTaiXiu: state.stateBaiTapGameXucXac.ketQuaTaiXiu,
    diemXucXac: state.stateBaiTapGameXucXac.diemXucXac,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      const action = {
        type: "DIEU_KIEN",
      };
      dispatch(action);
      // hàm để random xx 10 lần xong dừng
      let n = 0;
      let ranDomXucXac = setInterval(() => {
        const action = {
          type: "RANDOM_XUC_XAC",
        };
        dispatch(action);
        n++;
        if (n === 10) {
          // dùng hàm setInterval
          clearInterval(ranDomXucXac);
          //   dispatch action xử lý kết quả
          const actionXLKQ = {
            type: "END_GAME",
          };
          dispatch(actionXLKQ);
        }
      }, 100);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
