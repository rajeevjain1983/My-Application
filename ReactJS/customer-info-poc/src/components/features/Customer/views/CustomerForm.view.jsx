import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input, Button, Select } from "../../../common/atoms";

const checkValidation = (values) => {
  const errors = {};
  if (values.title === "Select") {
    errors.title = "Please choose a title.";
  }

  if (!values.firstName) {
    errors.firstName = "Please enter first name.";
  }

  if (!values.lastName) {
    errors.lastName = "Please enter last name.";
  }

  if (!values.nameChanged) {
    errors.nameChanged = "Please choose Name Changed.";
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Please enter Date of Birth.";
  }

  return errors;
};

const renderNameChanged = ({ meta: { touched, error, warning } }) => {
  console.log("meta", error);
  return (
    <div>
      <label>
        <Field name="nameChanged" component="input" type="radio" value="yes" />
        Yes
      </label>
      <label>
        <Field
          name="nameChanged"
          component="input"
          checked
          type="radio"
          value="no"
        />
        No
      </label>
    </div>
  );
};

const CustomerForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  submitCustomer,
  ...restProps
}) => {
  console.log("restProps", restProps);
  return (
    <div>
      <form onSubmit={handleSubmit(submitCustomer)}>
        <div>
          <label>Title</label>
          <Field name="title" component={Select}>
            <option>Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
          </Field>
        </div>

        <div>
          <label>First Name</label>
          <Field component={Input} type="text" name="firstName" />
        </div>

        <div>
          <label>Last Name</label>
          <Field component={Input} type="text" name="lastName" />
        </div>

        <div>
          <label>Has your name changed in the last 12 months?</label>
          <Field component={renderNameChanged} type="text" name="lastName" />
        </div>

        <div>
          <label>Date of Birth</label>
          <Field component={Input} type="text" name="dateOfBirth" />
        </div>

        {/* {error && <strong>{error}</strong>} */}
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
