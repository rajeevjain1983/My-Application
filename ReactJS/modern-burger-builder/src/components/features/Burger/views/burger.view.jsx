import React from "react";
import BurgerBuilder from "../organism/BurgerBuilder";
import BurgerBuildControl from "../organism/BurgerBuildControls";
import styled from "styled-components";
import Modal from "../../../common/UI/Modal";
import OrderSummery from "../organism/OrderSummery";

const PriceLabel = styled.p`
  text-align: center;
  padding: 5px;
`;

const Burger = ({
  ingredients,
  ingredientsHandler,
  burgerPrice,
  purchasable,
  show,
  showModal,
  hideModal,
}) => {
  // const locale = navigator && navigator.language;
  const numberFormat = Intl.NumberFormat("en-GB");
  const formattedBurgerPrice = numberFormat.format(burgerPrice);
  return (
    <>
      <Modal show={show} showModal={showModal}>
        <OrderSummery
          ingredients={ingredients}
          burgerPrice={formattedBurgerPrice}
          showModal={showModal}
        />
      </Modal>
      <BurgerBuilder ingredients={ingredients} />
      <PriceLabel>Burger Price : ${formattedBurgerPrice}</PriceLabel>
      <BurgerBuildControl
        ingredients={ingredients}
        ingredientsHandler={ingredientsHandler}
        purchasable={purchasable}
        showModal={showModal}
      />
    </>
  );
};

export default Burger;
