import React from "react";
import BurgerIngredient from "../../BurgerIngredient";
import withStyle from "../../../../../common/hoc/withStyle";
import styles from "../style/BurgerBuilder.style";
const BurgerBuilder = ({ className, ingredients }) => {
  console.log("BurgerBuilder", ingredients);
  let transFormedIngredients = Object.keys(ingredients)
    .map((key) => {
      return [...Array(ingredients[key])].map((_, i) => {
        return <BurgerIngredient key={key + i} ingredientName={key} />;
      });
    })
    .reduce((arr, ele) => {
      return arr.concat(ele);
    }, []);

  if (transFormedIngredients.length === 0) {
    transFormedIngredients = <p>Please start ingredients...</p>;
  }

  console.log("transFormedIngredients", transFormedIngredients);
  return (
    <div className={className}>
      <BurgerIngredient ingredientName="BreadTop" />
      {transFormedIngredients}
      <BurgerIngredient ingredientName="BreadBottom" />
    </div>
  );
};

export default withStyle(BurgerBuilder, styles);
