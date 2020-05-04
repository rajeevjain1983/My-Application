import React from "react";
import withStyle from "../../../common/hoc/withStyle";

import styles from "../styles/home.style";

const Home = (props) => {
  return (
    <div className={props.className}>
      <h1>Home Page!</h1>
    </div>
  );
};

export default withStyle(Home, styles);
