import React from "react";

class DisplayBox extends React.Component {
  render() {
    return (
      <div className="row displayBox">
        <p id="equation">{this.props.fullDisp}</p>
        <p id="display">{this.props.currDisp}</p>
      </div>
    );
  }
}

export default DisplayBox;
