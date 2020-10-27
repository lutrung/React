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
import BaiTapGioHangRedux from "./BaiTapRedux/BaiTapGioHangRedux";
import BaiTapGameXucXac from "./BaiTapGameXucXac";
import LifeCycle from "./LifeCycle/LifeCycle";
import FormComponent from "./FormComponent/FormComponent";
import DanhSachNguoiDung from "./FormComponent/DanhSachNguoiDung";
import BaiTapDoiMauXe from "./Hooks/DemoHookUseState/BaiTapDoiMauXe";
import DemoHookUseEffect from "./Hooks/DemoHookUseEffect/DemoHookUseEffect";
import DemoUseCallBack from "./Hooks/DemoUseCallBack/DemoUseCallBack";
import DemoUseMemo from "./Hooks/DemoHookUseMemo/DemoUseMemo";
import GameXucXacReactFunction from "./Hooks/GameXucXacReactFunction/GameXucXacReactFunction";

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
      {/* <BaiTapChonMauXe /> */}
      {/* <DemoListAndKeys /> */}
      {/* <DemoProps /> */}
      {/* <BaiTapGioHang /> */}
      {/* <BaiTapGioHangRedux /> */}
      {/* <BaiTapGameXucXac /> */}
      {/* <LifeCycle /> */}
      <DanhSachNguoiDung />

      {/* ------------------------------REACT HOOK------------------------------ */}
      {/* <BaiTapDoiMauXe /> */}
      {/* <DemoHookUseEffect /> */}
      {/* <DemoUseCallBack /> */}
      {/* <DemoUseMemo /> */}
      {/* <GameXucXacReactFunction /> */}
    </div>
  );
}

export default App;
