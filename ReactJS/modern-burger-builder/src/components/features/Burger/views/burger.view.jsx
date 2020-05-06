import React from "react";
import BurgerBuilder from "../organism/BurgerBuilder";
import BurgerBuildControl from "../organism/BurgerBuildControls";

const Burger = ({ ingredients, ingredientsHandler }) => {
  return (
    <div>
      <BurgerBuilder ingredients={ingredients} />
      <BurgerBuildControl
        ingredients={ingredients}
        ingredientsHandler={ingredientsHandler}
      />
    </div>
  );
};

export default Burger;
