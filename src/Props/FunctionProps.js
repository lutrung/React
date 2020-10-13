import React from "react";

export default function FunctionProps(props) {
  console.log(props); //kiểm tra xem mình cần truyền gì
  // const { hoVaTen, Lop } = props; //Cách 2
  return (
    <div>
      <div>
        <h3>Function Props</h3>
        {/* Cách 1 */}
        <p>Tên : {props.hoVaTen}</p>
        <p>Lớp : {props.Lop}</p>
        <p>Mã : {props.maSV}</p>
        {/* Cách 2 */}
        {/* <p>Tên : {hoVaTen}</p>
        <p>Lớp : {Lop}</p> */}
      </div>
    </div>
  );
}
