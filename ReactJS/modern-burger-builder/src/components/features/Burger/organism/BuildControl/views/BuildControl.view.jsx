import React from "react";
import withStyle from "../../../../../common/hoc/withStyle";
import styles from "../style/BuildControl.style";

const BuildControl = ({ className, label, ingredientsHandler }) => {
  return (
    <div className={className}>
      <label className="labelStyle">{label}:</label>
      <button onClick={() => ingredientsHandler(label, "More")}>More</button>
      <button onClick={() => ingredientsHandler(label, "Less")}>Less</button>
    </div>
  );
};

export default withStyle(BuildControl, styles);
