import React from "react";
import KetQuaTroChoiFunction from "./KetQuaTroChoiFunction";
import XucXacFunction from "./XucXacFunction";

export default function GameXucXacReactFunction(props) {
  return (
    <div
      style={{
        backgroundImage: "url(./img/BaiTapGameXucXac/bgGame.png)",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        fontFamily: "fontGame",
      }}
    >
      <h1 className="display-4 text-center">Game Tài Xỉu</h1>
      <XucXacFunction />
      <KetQuaTroChoiFunction />
    </div>
  );
}
