import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import BurgerView from "../burger.view";
import Modal from "../../../../common/UI/Modal";
import BurgerBuilder from "../../organism/BurgerBuilder";
import BurgerBuildControls from "../../organism/BurgerBuildControls";

configure({ adapter: new Adapter() });

describe("<BurgerView />", () => {
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
    const wrapper = shallow(<BurgerView {...props} />);
    console.log(wrapper);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Modal)).toHaveLength(1);
    expect(wrapper.find(BurgerBuilder)).toHaveLength(1);
    expect(wrapper.find(BurgerBuildControls)).toHaveLength(1);
  });
});
