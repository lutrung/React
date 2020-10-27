import React from "react";
import { useDispatch } from "react-redux";

export default function KetQuaTroChoiFunction(props) {
  const dispatch = useDispatch();
  return (
    <div className="text-center mt-5">
      <button className="btn btn-primary">
        <span
          className="display-4"
          onClick={() => {
            let action = {
              type: "RANDOM_XUC_XAC",
            };
            dispatch(action);
          }}
        >
          Play Game
        </span>
      </button>
    </div>
  );
}
