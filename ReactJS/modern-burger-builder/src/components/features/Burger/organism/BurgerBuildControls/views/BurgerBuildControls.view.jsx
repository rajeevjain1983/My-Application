import React from "react";
import styles from "../style/BurgerBuildControl.style";
import withStyle from "../../../../../common/hoc/withStyle";
import BuildControl from "../../BuildControl";

const BurgerBuildControls = ({
  className,
  ingredients,
  ingredientsHandler,
}) => {
  const controls = Object.keys(ingredients).map((key, index) => {
    // console.log(index);
    return (
      <BuildControl
        key={`${key}+${index}`}
        label={key}
        ingredientsHandler={ingredientsHandler}
      ></BuildControl>
    );
  });
  return (
    <div className={className}>
      <div className="buildControl">{controls}</div>
    </div>
  );
};

export default withStyle(BurgerBuildControls, styles);
