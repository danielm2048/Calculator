import React from "react";
import "./App.sass";

import { connect } from "react-redux";
import { addOper, deleteOper } from "./actions";
import { reversePolishNotation } from "./RPN";

import LightSwitch from "./Components/LightSwitch";
import DisplayBox from "./Components/DisplayBox";
import CalcButtonTable from "./Components/CalcButtonTable";
import MadeBy from "./Components/MadeBy";

let flagFin = false;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDisp: "",
      currDisp: "0",
      lastOp: "",
      lastNum: "0"
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleNumber(event) {
    if (flagFin) {
      if (event.target.value === ".") {
        this.props.deleteOper();
        this.setState({
          fullDisp: "",
          currDisp: "0" + event.target.value,
          lastOp: ""
        });
      } else {
        this.props.deleteOper();
        this.setState({
          fullDisp: "",
          currDisp: event.target.value,
          lastOp: ""
        });
      }
      flagFin = false;
    } else if (this.state.currDisp === "0" && event.target.value !== ".") {
      if (this.state.lastOp !== "") {
        this.props.addOper(this.state.lastOp);
      }
      this.setState({
        currDisp: event.target.value
      });
    } else if (
      event.target.value !== "." ||
      !this.state.currDisp.includes(".")
    ) {
      if (this.state.lastOp !== "" && this.state.currDisp.length === 0) {
        this.props.addOper(this.state.lastOp);
      }
      this.setState({
        currDisp: this.state.currDisp + event.target.value
      });
    }
  }
  handleAction(event) {
    switch (event.target.value) {
      case "+/-":
        if (this.state.currDisp !== "") {
          this.setState({
            currDisp: +(parseFloat(this.state.currDisp) * -1).toFixed(4)
          });
        }
        break;
      case "%":
        if (this.state.currDisp !== "") {
          this.setState({
            currDisp: +(parseFloat(this.state.currDisp) * 0.01).toFixed(4)
          });
        }
        break;
      case "1/":
        if (this.state.currDisp !== "") {
          this.setState({
            currDisp: +(1 / parseFloat(this.state.currDisp)).toFixed(4)
          });
        }
        break;
      case "√":
        if (this.state.currDisp !== "") {
          this.setState({
            currDisp: +Math.sqrt(parseFloat(this.state.currDisp)).toFixed(4)
          });
        }
        break;
      default:
        if (flagFin) {
          this.props.deleteOper();
          this.props.addOper(this.state.currDisp);
          this.setState({
            fullDisp: this.state.currDisp + event.target.value,
            currDisp: "",
            lastOp: event.target.value
          });
          flagFin = false;
        } else if (this.state.currDisp !== "") {
          this.props.addOper(this.state.currDisp);
          this.setState({
            fullDisp:
              this.state.fullDisp + this.state.currDisp + event.target.value,
            currDisp: "",
            lastOp: event.target.value
          });
        } else {
          this.setState({
            fullDisp:
              this.state.fullDisp.substring(0, this.state.fullDisp.length - 1) +
              event.target.value,
            lastOp: event.target.value
          });
        }
        break;
    }
  }
  handleEquals() {
    if (this.state.currDisp === "") {
      this.props.addOper(0);
      this.setState({
        fullDisp: this.state.fullDisp + "0=",
        lastNum: this.state.currDisp
      });
    } else {
      if (flagFin) {
        this.props.deleteOper();
        this.props.addOper(this.state.currDisp);
        this.props.addOper(this.state.lastOp);
        this.props.addOper(this.state.lastNum);
        this.setState({
          fullDisp:
            this.state.currDisp + this.state.lastOp + this.state.lastNum + "="
        });
      } else {
        this.props.addOper(this.state.currDisp);
        this.setState({
          fullDisp: this.state.fullDisp + this.state.currDisp + "=",
          lastNum: this.state.currDisp
        });
      }
    }
  }
  handleDelete(event) {
    if (event.target.value === "C") {
      this.props.deleteOper();
      this.setState({
        fullDisp: "",
        currDisp: "0",
        lastOp: ""
      });
    } else if (event.target.value === "DEL" && !flagFin) {
      if (this.state.currDisp.length === 1) {
        this.setState({
          currDisp: "0"
        });
      } else {
        this.setState({
          currDisp: this.state.currDisp.substr(
            0,
            this.state.currDisp.length - 1
          )
        });
      }
    } else if (event.target.value === "CE") {
      if (flagFin) {
        this.props.deleteOper();
        this.setState({
          fullDisp: "",
          currDisp: "0",
          lastOp: ""
        });
      } else {
        this.setState({
          currDisp: "0"
        });
      }
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.result !== prevProps.result) {
      if (this.state.fullDisp[this.state.fullDisp.length - 1] === "=") {
        this.setState({
          currDisp: reversePolishNotation(this.props.result)
        });
        flagFin = true;
      }
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LightSwitch />
          <h1>Calculator</h1>
          <DisplayBox
            fullDisp={this.state.fullDisp}
            currDisp={this.state.currDisp}
          />
          <CalcButtonTable
            handleAction={this.handleAction}
            handleDelete={this.handleDelete}
            handleNumber={this.handleNumber}
            handleEquals={this.handleEquals}
          />
          <MadeBy />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { result: state };
};

const mapDispatchToProps = { addOper, deleteOper };

export default connect(mapStateToProps, mapDispatchToProps)(App);
