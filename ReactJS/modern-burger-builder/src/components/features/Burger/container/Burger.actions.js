import { BurgerConstants } from "../../../common/constants";

export const getBurgerIngredients = () => {
  console.log("getBurgerIngredients selector");
  return {
    type: BurgerConstants.GetBurgerIngredients,
  };
};

export const setBurgerIngredients = (payload) => {
  return {
    type: BurgerConstants.SetBurgerIngredients,
    payload,
  };
};
