import React from "react";
import { connect } from "react-redux";
import { getOrderHistory } from "./OrderHistory.actions";
import { getOrderHistoryData } from "./OrderHistory.selector";
import OrderHistoryView from "../views";

class OrderHistory extends React.PureComponent {
  componentDidMount() {
    const { fetchOrderHistory } = this.props;
    console.log("componentDidMount");
    fetchOrderHistory("rajeevjain1508@gmail.com");
  }

  render() {
    const { orderHistoryData } = this.props;
    return <OrderHistoryView orderHistoryData={orderHistoryData} />;
  }
}

export const mapStateToProps = (state) => {
  return {
    orderHistoryData: getOrderHistoryData(state),
  };
};
export const mapDispatchToProps = (dispatch) => ({
  fetchOrderHistory: (payload) => {
    dispatch(getOrderHistory(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
