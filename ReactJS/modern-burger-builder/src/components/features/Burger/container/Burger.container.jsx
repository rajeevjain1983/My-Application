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

  ingredientsHandler = (name, action) => {
    if (action === "More") {
      const ingredients = { ...this.state.ingredients };
      ingredients[name] = ingredients[name] + 1;
      this.setState({ ingredients });
    } else {
      const ingredients = { ...this.state.ingredients };

      ingredients[name] =
        ingredients[name] > 0 ? ingredients[name] - 1 : (ingredients[name] = 0);
      this.setState({ ingredients });
    }

    // console.log(this.state);
  };

  render() {
    return (
      <BurgerView
        ingredients={this.state.ingredients}
        ingredientsHandler={this.ingredientsHandler}
      />
    );
  }
}

export default Burger;
