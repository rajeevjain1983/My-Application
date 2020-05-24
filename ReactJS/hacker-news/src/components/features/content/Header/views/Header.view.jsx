import React from "react";

import withStyle from "../../../../common/hoc/withStyle";
import styles from "../styles/header.style";

const Header = (props) => {
  return (
    <div className={props.className}>
      <a className="headerLink" onClick={() => localStorage.clear()} href="/">
        <img className="headerImage" alt="" src="y18.gif" />
      </a>

      <a className="link" href="/">
        top
      </a>
      <a href="/">| new</a>
    </div>
  );
};

export default withStyle(Header, styles);
