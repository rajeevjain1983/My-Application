import React from "react";
import BurgerBuilder from "../organism/BurgerBuilder";

const Burger = ({ ingredients }) => {
  return (
    <div>
      <BurgerBuilder ingredients={ingredients} />
      <p>Burger Build Controls</p>
    </div>
  );
};

export default Burger;
