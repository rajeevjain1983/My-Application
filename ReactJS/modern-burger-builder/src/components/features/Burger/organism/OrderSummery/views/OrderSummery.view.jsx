import React from "react";
import axios from "../../../../../../service/axios_order";
import Router from "next/router";

import withStyle from "../../../../../common/hoc/withStyle";
import styles from "../style/OrderSummery.style";
import CustomerForm from "../../CustomerForm";

const OrderSummery = ({ className, ingredients, burgerPrice, showModal }) => {
  const placeOrder = (values) => {
    const order = {
      ingredients,
      burgerPrice,
      customerInfo: {
        ...values,
      },
    };

    axios
      .post("/orders.jsonnn", order)
      .then((res) => {
        console.log(res);
        if (res && res.status === 200) {
          console.log("success");
          Router.replace("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const burgerIngredients = Object.keys(ingredients).map((key, index) => {
    return ingredients[key] > 0 ? (
      <li key={key + index}>{`${key} : ${ingredients[key]}`}</li>
    ) : (
      ""
    );
  });
  return (
    <div className={className}>
      <div>
        <p>Your delicious burger is ready with following ingredients</p>
        <ul>{burgerIngredients}</ul>
        <p>Your burger Price is ${burgerPrice}</p>
      </div>
      <div>
        <CustomerForm placeOrder={placeOrder} />
      </div>
    </div>
  );
};

export default withStyle(OrderSummery, styles);
