import React from "react";

import { Input, Button } from "../../../../../common/atoms";

class CustomerForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  placeOrder() {
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          label="Customer Name"
          type="text"
          name="customerName"
          onChange={this.handleChange}
        />

        <input
          label="Customer Phone Number"
          type="text"
          name="customerPhone"
          onChange={this.handleChange}
        />

        <input
          label="Customer Email"
          type="email"
          name="customerEmail"
          onChange={this.handleChange}
        />

        {/* Field level validation */}
        <input
          label="Customer Address"
          component={Input}
          type="textarea"
          name="customerAddress"
        />

        <div className="btnContainer">
          <Button onClick={this.placeOrder} className="btnStyle">
            Continue!
          </Button>
          <Button>Cancel</Button>
        </div>
      </div>
    );
  }
}

export default CustomerForm;
