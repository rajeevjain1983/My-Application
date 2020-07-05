import { fromJS } from "immutable";
import { BurgerConstants } from "../../../common/constants";

const initialState = fromJS({
  ingredients: null,
});

const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BurgerConstants.SetBurgerIngredients:
      //return state.set("ingredients", action.payload);
      return { ...state, ...{ ingredients: action.payload } };
    default:
      if (state instanceof Object) {
        return state;
      }
    // return state;
  }
};

export default BurgerReducer;
