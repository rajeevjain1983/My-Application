import React from "react";
import BurgerView from "../views";

class Burger extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        Meat: 0,
        Cheese: 0,
        Salad: 0,
        Bacon: 0,
      },
    };
  }

  render() {
    return <BurgerView ingredients={this.state.ingredients} />;
  }
}

export default Burger;
