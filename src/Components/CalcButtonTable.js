import React from "react";
import CalcButtonRow from "./CalcButtonRow";

export default class CalcButtonTable extends React.Component {
  render() {
    const calcProps = [
      [
        {
          id: "perc",
          sign: "%",
          type: "action",
          onClick: this.props.handleAction
        },
        {
          id: "CE",
          sign: "CE",
          type: "delete",
          onClick: this.props.handleDelete
        },
        {
          id: "clear",
          sign: "C",
          type: "delete",
          onClick: this.props.handleDelete
        },
        {
          id: "del",
          sign: "DEL",
          type: "delete",
          onClick: this.props.handleDelete
        }
      ],
      [
        {
          id: "oneDiv",
          sign: "1/",
          type: "action",
          onClick: this.props.handleAction
        },
        {
          id: "sqrt",
          sign: "√",
          type: "action",
          onClick: this.props.handleAction
        },
        {
          id: "pow",
          sign: "^",
          type: "action",
          onClick: this.props.handleAction
        },
        {
          id: "divide",
          sign: "/",
          type: "action",
          onClick: this.props.handleAction
        }
      ],
      [
        {
          id: "seven",
          sign: "7",
          type: "number",
          onClick: this.props.handleNumber
        },
        {
          id: "eight",
          sign: "8",
          type: "number",
          onClick: this.props.handleNumber
        },
        {
          id: "nine",
          sign: "9",
          type: "number",
          onClick: this.props.handleNumber
        },
        {
          id: "multiply",
          sign: "*",
          type: "action",
          onClick: this.props.handleAction
        }
      ],
      [
        {
          id: "four",
          sign: "4",
          type: "number",
          onClick: this.props.handleNumber
        },
        {
          id: "five",
          sign: "5",
          type: "number",
          onClick: this.props.handleNumber
        },
        {
          id: "six",
          sign: "6",
          type: "number",
          onClick: this.props.handleNumber
        },
        {
          id: "subtract",
          sign: "-",
          type: "action",
          onClick: this.props.handleAction
        }
      ],
      [
        {
          id: "one",
          sign: "1",
          type: "number",
          onClick: this.props.handleNumber
        },
        {
          id: "two",
          sign: "2",
          type: "number",
          onClick: this.props.handleNumber
        },
        {
          id: "three",
          sign: "3",
          type: "number",
          onClick: this.props.handleNumber
        },
        {
          id: "add",
          sign: "+",
          type: "action",
          onClick: this.props.handleAction
        }
      ],
      [
        {
          id: "plusMinus",
          sign: "+/-",
          type: "action",
          onClick: this.props.handleAction
        },
        {
          id: "zero",
          sign: "0",
          type: "number",
          onClick: this.props.handleNumber
        },
        {
          id: "decimal",
          sign: ".",
          type: "number",
          onClick: this.props.handleNumber
        },
        {
          id: "equals",
          sign: "=",
          type: "equals",
          onClick: this.props.handleEquals
        }
      ]
    ];
    let elements = [];
    for (let i = 0; i < 6; i++) {
      elements.push(<CalcButtonRow data={calcProps[i]} />);
    }
    return <div>{elements}</div>;
  }
}
