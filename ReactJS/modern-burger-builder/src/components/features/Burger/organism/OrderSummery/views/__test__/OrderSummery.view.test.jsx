import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import renderer from "react-test-renderer";

import OrderSummery from "../../../OrderSummery";

configure({ adapter: new Adapter() });

describe("<OrderSummery />", () => {
  const props = {
    ingredients: {
      Meat: 1,
      Bacon: 1,
      Cheese: 1,
    },
    ingredientsHandler: () => {},
    burgerPrice: 23,
    purchasable: true,
    show: true,
    showModal: () => {},
    hideModal: () => {},
  };
  it("Should match snapshot", () => {
    const wrapper = shallow(<OrderSummery {...props} />);

    // const wrapper = renderer.create(<OrderSummery {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
