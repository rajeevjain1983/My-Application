import { BurgerConstants } from "../../../common/constants";

export const getBurgerIngredients = () => {
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
