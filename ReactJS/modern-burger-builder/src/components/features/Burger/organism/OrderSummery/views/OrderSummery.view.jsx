import React from "react";
import axios from "../../../../../../service/axios_order";
import Router from "next/router";

import { Button } from "../../../../../common/atoms";
import withStyle from "../../../../../common/hoc/withStyle";
import styles from "../style/OrderSummery.style";

const OrderSummery = ({ className, ingredients, burgerPrice, showModal }) => {
  const placeOrder = () => {
    const order = {
      ingredients,
      burgerPrice,
      customerInfo: {
        name: "Rajeev",
        phone: "9971222558",
        email: "rajeevjain1508@gmail.com",
        address: {
          city: "Noida",
          area: "Sector-137",
          district: "GBNagar",
        },
      },
    };

    axios
      .post("/orders.json", order)
      .then((res) => {
        console.log(res);
        if (res && res.status === 200) {
          console.log("success");
          Router.replace("/");
        }
      })
      .catch((err) => console.log(err));
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
      <div className="btnContainer">
        <Button onClick={placeOrder} className="btnStyle">
          Continue
        </Button>
        <Button onClick={() => showModal(false)}>Cancel</Button>
      </div>
    </div>
  );
};

export default withStyle(OrderSummery, styles);
