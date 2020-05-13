import React from "react";
import withStyle from "../../../common/hoc/withStyle";
import styles from "../style/OrderHistory.style";

const OrderHistoryView = ({ className, orderHistoryData }) => {
  const renderIngredientsDetails = (ingredients) => {
    return Object.keys(ingredients).map((name, index) => {
      return <li key={name + index}>{name}</li>;
    });
  };

  const orderHistoryList =
    orderHistoryData &&
    Object.keys(orderHistoryData).map((key, index) => {
      const data = orderHistoryData[key];
      return (
        <div key={key} className="order-container">
          <div className="orderItem">
            <div>
              <p>Order No: {key}</p>
              <p>Item: Burger</p>
              <p>Ingredients :</p>
              <ul>{renderIngredientsDetails(data.ingredients)}</ul>
              <span>Total Price: </span>
              {data.burgerPrice}
            </div>
          </div>
          <div className="address-container">
            <p>Delivery Address</p>
            <p>Name : {data.customerInfo.customerName}</p>
            <p>Phone : {data.customerInfo.customerPhone}</p>
            <p>Area : {data.customerInfo.customerEmail}</p>
            <p>City : {data.customerInfo.customerAddress}</p>
          </div>
        </div>
      );
    });

  return (
    <div className={className}>
      <p className="heading">Order History</p>
      <div className="container">{orderHistoryList}</div>
    </div>
  );
};

export default withStyle(OrderHistoryView, styles);
