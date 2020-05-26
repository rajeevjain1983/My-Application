import React from "react";
import Link from "next/link";
import withStyle from "../../../../common/hoc/withStyle";
import styles from "../style/header.style";

const Header = (props) => {
  return (
    <div className={props.className}>
      <Link href="/">
        <a className="headerLink" href="/">
          <img className="headerImage" alt="Logo" src="y18.gif" />
        </a>
      </Link>

      <span className="headerLink" href="/">
        top
      </span>
      <span href="/">| new</span>
    </div>
  );
};

export default withStyle(Header, styles);
