import React, { useState } from "react";

// các giá trị không phải state không cần render lại khi setState (vì khi setState toàn bộ Function BaiTapDoiMauXesẽ render lại) =>để ở ngoài component
export default function BaiTapDoiMauXe() {
  const [stateHinh, setStateHinh] = useState("./img/car/products/red-car.jpg");
  const doiMauXe = (hinhAnh) => {
    setStateHinh(hinhAnh);
  };
  return (
    <div>
      <div>
        <section className="show-room">
          <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
          <div className="container">
            <div className="chose__color d-flex justify-content-around">
              <button
                className="btn"
                onClick={() => {
                  doiMauXe("./img/car/products/black-car.jpg");
                }}
              >
                <img
                  src="./img/car/icons/icon-black.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                className="btn"
                onClick={() => {
                  doiMauXe("./img/car/products/red-car.jpg");
                }}
              >
                <img
                  src="./img/car/icons/icon-red.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                className="btn"
                onClick={() => {
                  doiMauXe("./img/car/products/silver-car.jpg");
                }}
              >
                <img
                  src="./img/car/icons/icon-silver.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                className="btn"
                onClick={() => {
                  doiMauXe("./img/car/products/steel-car.jpg");
                }}
              >
                <img
                  src="./img/car/icons/icon-steel.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
            </div>
            <div className="car mt-2">
              <img className="img-thumbnail" src={stateHinh} alt="hinh" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
