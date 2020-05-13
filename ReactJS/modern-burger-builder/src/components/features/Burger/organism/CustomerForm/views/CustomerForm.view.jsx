import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input, Button } from "../../../../../common/atoms";

const checkValidation = (values) => {
  const errors = {};
  if (!values.customerName) {
    errors.customerName = "Required!";
  }

  if (!values.customerPhone) {
    errors.customerPhone = "Required!";
  }

  if (!values.customerEmail) {
    errors.customerEmail = "Required!";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.customerEmail)
  ) {
    errors.customerEmail = "Invalid Email!";
  }

  return errors;
};

const required = (values) => (values ? undefined : "Required!");

const CustomerForm = ({
  handleSubmit,
  error,
  pristine,
  reset,
  submitting,
  placeOrder,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit(placeOrder)}>
        <Field
          label="Customer Name"
          component={Input}
          type="text"
          name="customerName"
        />

        <Field
          label="Customer Phone Number"
          component={Input}
          type="text"
          name="customerPhone"
        />

        <Field
          label="Customer Email"
          component={Input}
          type="email"
          name="customerEmail"
        />

        {/* Field level validation */}
        <Field
          label="Customer Address"
          component={Input}
          type="textarea"
          name="customerAddress"
          validate={[required]}
        />
        {error && <strong>{error}</strong>}
        <div className="btnContainer">
          <Button
            type="submit"
            className="btnStyle"
            // disabled={pristine || submitting}
          >
            Continue!
          </Button>
          <Button disabled={pristine || submitting}>Cancel</Button>
          {/* <Button onClick={() => showModal(false)}>Cancel</Button> */}
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "customerForm",
  validate: checkValidation,
})(CustomerForm);
