import React, { Component } from "react";

export default class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "",
    };
  }
  updateColor=(value)=>{
      this.setState({
          background:value.background,
      })

  }
  render() {
    return (
      <div
        className="fix-box"
        style={{ background: this.state.background }}
        onClick={() => this.props.applyColor(this.updateColor)}
      >
        <h2 className="subheading">Selection</h2>
      </div>
    );
  }
}