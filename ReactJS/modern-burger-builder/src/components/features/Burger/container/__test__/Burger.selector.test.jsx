import { fromJS } from "immutable";
import { getIngredients } from "../Burger.selectors";
import { BurgerConstants } from "../../../../common/constants";

describe("Burger.selector", () => {
  const ingredientsListState = fromJS({
    ingredients: {
      Meat: 1,
      Bacon: 1,
      Cheese: 1,
    },
  });

  const state = {
    [BurgerConstants.BurgerReducerKey]: ingredientsListState,
  };

  it("should return ingredients", () => {
    const ingredients = getIngredients(state);
    expect(ingredients).toEqual(ingredientsListState.get("ingredients"));
  });
});
