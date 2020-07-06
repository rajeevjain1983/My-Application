import React from "react";
import ChildComponent from "./childComponent";

class parentComponent extends React.Component {
  constructor(props) {
    console.log("Mounting Phase!!!");
    super(props);
    this.state = {
      counter: 0,
    };

    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    console.log("parentComponent constructor");
  }

  buttonClickHandler() {
    console.log("Updating Phase!!!");
    console.log("Button Clicked");
    const preCounter = this.state.counter;
    this.setState({ counter: preCounter + 1 });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("parentComponent getDerivedStateFromProps", props, state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("parentComponent shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "parentComponent getSnapshotBeforeUpdate",
      prevProps,
      prevState
    );
  }

  componentDidMount() {
    console.log("parentComponent componentDidMount");
    const preCounter = this.state.counter;
    this.setState({ counter: preCounter + 1 });
  }

  componentDidUpdate() {
    console.log("parentComponent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("parentComponent componentWillUnmount");
  }

  render() {
    console.log("parentComponent render");
    return (
      <>
        <h1>Hello ! {this.state.counter}</h1>
        <ChildComponent
          buttonClickHandler={this.buttonClickHandler}
        ></ChildComponent>
      </>
    );
  }
}

export default parentComponent;
