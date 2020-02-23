import React from "react";

const CalcButton = props => {
  return (
    <div className="col-xs-3">
      <button
        id={props.id}
        className={
          "btn " +
          (props.type === "number"
            ? "btn-default"
            : props.type === "action"
            ? "btn-info"
            : "btn-danger") +
          " btn-block"
        }
        onClick={props.onClick}
        value={props.sign}
        type={props.type}
      >
        {props.sign}
      </button>
    </div>
  );
};

export default CalcButton;
