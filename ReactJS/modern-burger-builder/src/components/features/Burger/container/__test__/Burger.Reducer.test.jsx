import { fromJS } from "immutable";

import BurgerReducer from "../Burger.Reducer";
import { setBurgerIngredients } from "../Burger.actions";

// configure({ adapter: new Adapter() });

describe("Burger Reducer", () => {
  const initialState = fromJS({
    ingredients: null,
  });

  it("should return null with default state", () => {
    expect(BurgerReducer(initialState, {}).get("ingredients")).toBeNull();
  });

  it("should return Ingredients", () => {
    const payload = {
      ingredients: {
        Meat: 1,
        Bacon: 1,
        Cheese: 1,
      },
    };

    const updatedState = BurgerReducer(
      initialState,
      setBurgerIngredients(payload)
    );

    expect(updatedState.get("ingredients")).toEqual(payload);
  });
});
