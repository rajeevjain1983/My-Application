import React from "react";

import { Input, Button } from "../../../../../common/atoms";

class CustomerForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);

    this.customerForm = React.createRef();
    this.customerName = React.createRef();
    this.customerPhone = React.createRef();
    this.customerEmail = React.createRef();
    this.customerAddress = React.createRef();
  }

  submitForm(event) {
    console.log(this.customerForm.current[0]);
    console.log(this.customerName.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form ref={this.customerForm} onSubmit={this.submitForm}>
        <input
          ref={this.customerName}
          label="Customer Name"
          type="text"
          name="customerName"
          onChange={this.handleChange}
        />

        <input
          ref={this.customerPhone}
          label="Customer Phone Number"
          type="text"
          name="customerPhone"
          onChange={this.handleChange}
        />

        <input
          ref={this.customerEmail}
          label="Customer Email"
          type="email"
          name="customerEmail"
          onChange={this.handleChange}
        />

        {/* Field level validation */}
        <input
          ref={this.customerAddress}
          label="Customer Address"
          component={Input}
          type="textarea"
          name="customerAddress"
        />

        <div className="btnContainer">
          <Button type="submit" className="btnStyle">
            Continue!
          </Button>
          <Button>Cancel</Button>
        </div>
      </form>
    );
  }
}

export default CustomerForm;
