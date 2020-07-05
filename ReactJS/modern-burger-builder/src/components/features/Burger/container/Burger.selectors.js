import { createSelector } from "reselect";
import { BurgerConstants } from "../../../common/constants";

const getState = (state) => state[BurgerConstants.BurgerReducerKey];

export const getIngredients = createSelector(
  getState,
  (state) => state && state.ingredients
);
