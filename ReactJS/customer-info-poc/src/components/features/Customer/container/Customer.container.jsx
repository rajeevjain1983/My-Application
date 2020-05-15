import React from "react";
import { connect } from "react-redux";
import CustomerDetailView from "../views";
import { saveCustomerDetails, fetchCustomerDetails } from "./Customer.actions";
import { getCustomers } from "./Customer.selectors";

export class Customer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.submitCustomer = this.submitCustomer.bind(this);
  }

  componentDidMount() {
    const { fetchCustomers } = this.props;
    fetchCustomers();
  }
  submitCustomer(values) {
    const customerDetail = {
      ...values,
    };

    const { saveCustomer } = this.props;
    saveCustomer(customerDetail);
  }

  render() {
    const { customers } = this.props;
    customers && console.log("customerdetails", customers);
    return <CustomerDetailView submitCustomer={this.submitCustomer} />;
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchCustomers: () => {
    dispatch(fetchCustomerDetails());
  },
  saveCustomer: (payload) => {
    dispatch(saveCustomerDetails(payload));
  },
});

export const mapStateToProps = (state) => {
  return {
    customers: getCustomers(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
