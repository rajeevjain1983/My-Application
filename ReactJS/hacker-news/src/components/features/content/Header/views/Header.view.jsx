import React from "react";
import withStyle from "../../../../common/hoc/withStyle";
import styles from "../style/header.style";

const Header = (props) => {
  return (
    <div className={props.className}>
      <div className="headerContainer">
        <a className="headerLink" onClick={() => localStorage.clear()} href="/">
          <img className="headerImage" alt="" src="y18.gif" />
        </a>

        <a className="headerLink" href="/">
          top
        </a>
        <a href="/">| new</a>
      </div>
    </div>
  );
};

export default withStyle(Header, styles);
