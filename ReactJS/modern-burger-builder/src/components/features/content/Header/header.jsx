import React from "./node_modules/react";
import withStyle from "../../../common/hoc/withStyle";
import styles from "./header.style";

const header = (props) => {
  console.log("header");
  return (
    <div className={props.className}>
      <button className="buttonStyle" onClick={props.toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default withStyle(header, styles);
export { header as headerVanilla };
