import React from "react";
import { connect } from "react-redux";
import BurgerView from "../views";
import { getBurgerIngredients, setBurgerIngredients } from "./Burger.actions";
import { getIngredients } from "./Burger.selectors";

export class Burger extends React.PureComponent {
  constructor(props) {
    super(props);

    this.INGREDIENTS_PRICE = {
      Meat: 2.5,
      Cheese: 3.4,
      Salad: 3.5,
      Bacon: 1.2,
    };
    this.burgerCost = 0;

    this.state = {
      purchasable: false,
      show: false,
    };
  }

  componentDidMount() {
    console.log("Burger componentDidMount");
    // const { fetchIngredients } = this.props;
    // fetchIngredients();
  }

  ingredientsHandler = (name, action) => {
    if (action === "More") {
      const ingredients = { ...this.props.ingredients };
      ingredients[name] = ingredients[name] + 1;
      this.props.updateIngredients(ingredients);
      this.burgerCost = this.burgerCost + this.INGREDIENTS_PRICE[name];
    } else {
      const ingredients = { ...this.props.ingredients };
      if (ingredients[name] > 0) {
        ingredients[name] = ingredients[name] - 1;
        this.props.updateIngredients(ingredients);
        this.burgerCost = this.burgerCost - this.INGREDIENTS_PRICE[name];
      }
    }

    this.setState({ purchasable: this.burgerCost > 0 });
  };

  showModal = (show) => {
    console.log("show", show);
    this.setState({ show });
  };

  render() {
    const { ingredients } = this.props;
    console.log("burger render", ingredients);
    return ingredients ? (
      <BurgerView
        ingredients={ingredients}
        ingredientsHandler={this.ingredientsHandler}
        burgerPrice={this.burgerCost}
        purchasable={this.state.purchasable}
        show={this.state.show}
        showModal={this.showModal}
      />
    ) : (
      <p>Something is wrong...</p>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchIngredients: () => {
    dispatch(getBurgerIngredients());
  },
  updateIngredients: (payload) => {
    dispatch(setBurgerIngredients(payload));
  },
});

export const mapStateToProps = (state) => {
  return {
    ingredients: getIngredients(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
