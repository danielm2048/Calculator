import React from "react";

class LightSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const body = document.getElementsByClassName("App-header")[0];
    const darkMode = localStorage.getItem("darkMode") === "true";
    if (darkMode) {
      this.switch.checked = true;
      body.style.backgroundColor = "#282c34";
      body.style.color = "white";
    } else {
      this.switch.checked = false;
      body.style.backgroundColor = "#e5e4db";
      body.style.color = "black";
    }
  }

  onChange() {
    const body = document.getElementsByClassName("App-header")[0];
    if (this.switch.checked) {
      body.style.backgroundColor = "#282c34";
      body.style.color = "white";
      localStorage.setItem("darkMode", "true");
    } else if (!this.switch.checked) {
      body.style.backgroundColor = "#e5e4db";
      body.style.color = "black";
      localStorage.setItem("darkMode", "false");
    }
  }

  render() {
    return (
      <div className="top-right">
        <input
          type="checkbox"
          id="switch"
          onChange={this.onChange}
          ref={input => {
            this.switch = input;
          }}
        />

        <label htmlFor="switch" className="crossRotate" />
      </div>
    );
  }
}

export default LightSwitch;
