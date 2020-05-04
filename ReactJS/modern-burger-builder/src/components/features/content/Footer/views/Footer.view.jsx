import React from "react";
import withStyle from "../../../../common/hoc/withStyle";
import styles from "../styles/footer.style";

const Footer = (props) => {
  return (
    <div className={props.className}>
      <p>Footer</p>
    </div>
  );
};

export default withStyle(Footer, styles);
