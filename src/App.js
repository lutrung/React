import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoStateless from "./Components/DemoStateless";
import DemoStateFul from "./Components/DemoStateFul";
import BaiTapLayout1 from "./Components/BaiTapLayoutComponent/BaiTapLayout1";
import Header from "./Components/BaiTapLayoutComponent/Header";

import HandleEvent from "./HandleEvent/HandleEvent";
import Databinding from "./Databinding/Databinding";
import DemoConditionalAndState from "./DemoLogIn/DemoConditionalAndState";
import BaiTapChonMauXe from "./BaiTapChonMauXe";
import DemoListAndKeys from "./ListAndKeys/DemoListAndKeys";
import DemoProps from "./Props/DemoProps";
import BaiTapGioHang from "./Components/BaiTapGioHang";
import SuaBaiTapGioHang from "./Components/SuaBaiTapGioHang";
import BaiTapGioHangRedux from "./BaiTapRedux/BaiTapGioHangRedux";
import BaiTapGameXucXac from "./BaiTapGameXucXac";

function App() {
  return (
    <div className="App">
      {/* <DemoStateless/> */}
      {/* <DemoStateFul/> */}
      {/* <DemoStateFul/>  */}
      {/* <BaiTapLayout1/> */}
      {/* <Databinding/> */}
      {/* <HandleEvent/> */}
      {/* <DemoConditionalAndState /> */}
      <BaiTapChonMauXe />
      {/* <DemoListAndKeys /> */}
      {/* <DemoProps /> */}
      {/* <BaiTapGioHang /> */}
      {/* <SuaBaiTapGioHang /> */}
      {/* <BaiTapGioHangRedux /> */}
      {/* <BaiTapGameXucXac/> */}
    </div>
  );
}

export default App;
