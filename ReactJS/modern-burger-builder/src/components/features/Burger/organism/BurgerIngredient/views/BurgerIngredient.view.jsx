import React from "react";
import PropTypes from "prop-types";

const BurgerIngredient = (props) => {
  return <div className={props.ingredientName} />;
};

BurgerIngredient.propTypes = {
  ingredientName: PropTypes.string.isRequired,
};
export default BurgerIngredient;
