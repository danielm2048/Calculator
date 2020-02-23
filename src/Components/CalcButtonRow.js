import React from "react";
import CalcButton from "./CalcButton";

class CalcButtonRow extends React.Component {
  render() {
    let elements = [];
    for (let i = 0; i < 4; i++) {
      elements.push(
        <CalcButton
          id={this.props.data[i].id}
          sign={this.props.data[i].sign}
          type={this.props.data[i].type}
          onClick={this.props.data[i].onClick}
        />
      );
    }
    return <div className="row">{elements}</div>;
  }
}

export default CalcButtonRow;
