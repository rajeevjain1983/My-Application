import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Burger } from "../Burger.container";
import BurgerView from "../../views";

configure({ adapter: new Adapter() });

describe("<BurgerView />", () => {
  let wrapper;
  const props = {
    ingredients: {
      Meat: 1,
      Bacon: 1,
      Cheese: 1,
    },
  };

  it("should render Order Details component", () => {
    wrapper = shallow(
      <Burger
        fetchIngredients={() => {}}
        updateIngredients={() => {}}
        {...props}
      />
    );

    expect(wrapper.is(BurgerView)).toBeTruthy();
    expect(wrapper.find(BurgerView)).toHaveLength(1);
  });
});
