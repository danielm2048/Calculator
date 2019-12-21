import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addOper, deleteOper } from './actions';
import { reversePolishNotation } from './RPN';

let flagFin = false;

const CalcButton = (props) => {
  return (
    <div className="col-xs-3">
      <button id={props.id} className="btn btn-default btn-block" onClick={props.onClick} value={props.sign} type={props.type}>{props.sign}</button>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDisp: "",
      currDisp: "0",
      lastOp: "",
      lastNum: "0"
    }
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
      }
      else {
        this.props.deleteOper();
        this.setState({
          fullDisp: "",
          currDisp: event.target.value,
          lastOp: ""
        });
      }
      flagFin = false;
    }
    else if (this.state.currDisp === "0" && event.target.value !== ".") {
      if (this.state.lastOp !== "") {
        this.props.addOper(this.state.lastOp);
      }
      this.setState({
        currDisp: event.target.value
      });
    }
    else if (event.target.value !== "." || !this.state.currDisp.includes(".")) {
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
            currDisp: +(Math.sqrt(parseFloat(this.state.currDisp))).toFixed(4)
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
        }
        else if (this.state.currDisp !== "") {
          this.props.addOper(this.state.currDisp);
          this.setState({
            fullDisp: this.state.fullDisp + this.state.currDisp + event.target.value,
            currDisp: "",
            lastOp: event.target.value
          });
        }
        else {
          this.setState({
            fullDisp: this.state.fullDisp.substring(0, this.state.fullDisp.length - 1) + event.target.value,
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
    }
    else {
      if (flagFin) {
        this.props.deleteOper();
        this.props.addOper(this.state.currDisp);
        this.props.addOper(this.state.lastOp);
        this.props.addOper(this.state.lastNum);
        this.setState({
          fullDisp: this.state.currDisp + this.state.lastOp + this.state.lastNum + "="
        });
      }
      else {
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
    }
    else if (event.target.value === "DEL" && !flagFin) {
      if (this.state.currDisp.length === 1) {
        this.setState({
          currDisp: "0"
        });
      }
      else {
        this.setState({
          currDisp: this.state.currDisp.substr(0, this.state.currDisp.length - 1)
        });
      }
    }
    else if (event.target.value === "CE") {
      if (flagFin) {
        this.props.deleteOper();
        this.setState({
          fullDisp: "",
          currDisp: "0",
          lastOp: ""
        });
      }
      else {
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
          <h1>Calculator</h1>
          <br />
          <div className="row displayBox">
            <p id="equation">{this.state.fullDisp}</p>
            <p id="display">{this.state.currDisp}</p>
          </div>
          <div className="row">
            <CalcButton id="perc" sign="%" type="action" onClick={this.handleAction} />
            <CalcButton id="CE" sign="CE" type="delete" onClick={this.handleDelete} />
            <CalcButton id="clear" sign="C" type="delete" onClick={this.handleDelete} />
            <CalcButton id="del" sign="DEL" type="delete" onClick={this.handleDelete} />
          </div>
          <div className="row">
            <CalcButton id="oneDiv" sign="1/" type="action" onClick={this.handleAction} />
            <CalcButton id="sqrt" sign="√" type="action" onClick={this.handleAction} />
            <CalcButton id="pow" sign="^" type="action" onClick={this.handleAction} />
            <CalcButton id="divide" sign="/" type="action" onClick={this.handleAction} />
          </div>
          <div className="row">
            <CalcButton id="seven" sign="7" type="number" onClick={this.handleNumber} />
            <CalcButton id="eight" sign="8" type="number" onClick={this.handleNumber} />
            <CalcButton id="nine" sign="9" type="number" onClick={this.handleNumber} />
            <CalcButton id="multiply" sign="*" type="action" onClick={this.handleAction} />
          </div>
          <div className="row">
            <CalcButton id="four" sign="4" type="number" onClick={this.handleNumber} />
            <CalcButton id="five" sign="5" type="number" onClick={this.handleNumber} />
            <CalcButton id="six" sign="6" type="number" onClick={this.handleNumber} />
            <CalcButton id="subtract" sign="-" type="action" onClick={this.handleAction} />
          </div>
          <div className="row">
            <CalcButton id="one" sign="1" type="number" onClick={this.handleNumber} />
            <CalcButton id="two" sign="2" type="number" onClick={this.handleNumber} />
            <CalcButton id="three" sign="3" type="number" onClick={this.handleNumber} />
            <CalcButton id="add" sign="+" type="action" onClick={this.handleAction} />
          </div>
          <div className="row">
            <CalcButton id="plusMinus" sign="+/-" type="action" onClick={this.handleAction} />
            <CalcButton id="zero" sign="0" type="number" onClick={this.handleNumber} />
            <CalcButton id="decimal" sign="." type="number" onClick={this.handleNumber} />
            <CalcButton id="equals" sign="=" type="action" onClick={this.handleEquals} />
          </div>
          <br />
          <h6>Made By Daniel Mimoun</h6>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { result: state }
};

const mapDispatchToProps = { addOper, deleteOper }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
