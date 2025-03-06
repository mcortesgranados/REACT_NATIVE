import React, { Component } from "react";

class ClickEventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button!",
    };
    this.handleClick = this.handleClick.bind(this); // Binding in constructor
  }

  // Method to update state on button click
  handleClick() {
    this.setState({ message: "Button clicked in Class Component! 🎉" });
  }

  render() {
    return (
      <div style={styles.container}>
        <h2>{this.state.message}</h2>
        <button style={styles.button} onClick={this.handleClick}>
          Click Me (Class Component)
        </button>
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "250px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
  },
  button: {
    margin: "5px",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default ClickEventClass;
