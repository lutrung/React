import React, { useState, useEffect } from "react";

export default function DemoHookUseEffect(props) {
  const [number, setNumber] = useState(1);

  //   // Hàm này sẽ chạy khi lần đầu component render và các lần render lại
  //   useEffect(() => {
  //     console.log("componentDidMount");
  //     console.log("componentDidUpdate");
  //   });
  // --------------------------------------------------------------- //
  //   //   Tham số 2 mảng rổng => chỉ thay thế cho component componentDidMount
  //   useEffect(() => {
  //     console.log("componentDidMount");
  //   }, []);
  //   // --------------------------------------------------------------- //
  //   //   Tham số 2 mảng là giá trị đó thay đổi thì hàm này sẽ thực thi (trong trường hợp này là number thay đổi nên hàm này đc thực thi)
  //   useEffect(() => {
  //     console.log("componentDidUpdate");
  //   }, [number]);
  // --------------------------------------------------------------- //
  //    Hủy thì component sẽ gọi hàm này
  useEffect(() => {
    return () => {
      console.log("Thay cho componentWillUnMount");
    };
  });

  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        setNumber
      </button>
    </div>
  );
}
