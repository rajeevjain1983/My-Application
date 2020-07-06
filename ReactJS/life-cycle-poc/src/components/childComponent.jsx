import React from "react";

class childComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("childComponent constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("childComponent getDerivedStateFromProps", props, state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("childComponent shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("childComponent getSnapshotBeforeUpdate", prevProps, prevState);
  }

  componentDidMount() {
    console.log("childComponent componentDidMount");
  }

  componentDidUpdate() {
    console.log("childComponent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("childComponent componentWillUnmount");
  }

  render() {
    console.log("childComponent render");
    return <button onClick={this.props.buttonClickHandler}>Hello !</button>;
  }
}

export default childComponent;
