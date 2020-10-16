import React, { Component } from "react";
import { connect } from "react-redux";
class DanhSachXucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return (
        <img
          key={index}
          className="m-4"
          src={xucXac.hinhAnh}
          style={{ width: 70 }}
        />
      );
    });
  };
  render() {
    return (
      <div className="row text-center">
        <div className="col-3 ">
          <button
            className="btn btn-success p-4"
            onClick={() => {
              this.props.datCuoc("Tài");
            }}
          >
            <span className="display-4">Tài</span>
          </button>
        </div>

        <div className="col-6">{this.renderXucXac()}</div>

        <div className="col-3">
          <button
            className="btn btn-danger p-4"
            onClick={() => {
              this.props.datCuoc("Xỉu");
            }}
          >
            <span className="display-4">Xỉu</span>
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      console.log(taiXiu);
      const action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachXucXac);
