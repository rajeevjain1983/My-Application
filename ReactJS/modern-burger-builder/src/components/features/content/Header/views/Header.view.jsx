import React, { useContext } from "react";
import Router from "next/router";
import { ThemeContext } from "styled-components";
import withStyle from "../../../../common/hoc/withStyle";
import styles from "../styles/header.style";
import { ToggleButton } from "../../../../common/atoms";
const Header = (props) => {
  const theme = useContext(ThemeContext);

  const nav_click = (event) => {
    if (event.target.innerText === "Home") {
      Router.push("/");
    } else if (event.target.innerText === "Order History") {
      Router.push("/orderHistory");
    } else {
      Router.push("/burger");
    }
  };
  return (
    <div className={props.className}>
      <button onClick={nav_click}>Home</button>
      <button onClick={nav_click}>Order History</button>
      <button onClick={nav_click}>Burger</button>

      <ToggleButton
        active={theme.name === "darkTheme"}
        onToggle={props.toggleTheme}
      >
        Toggle Theme
      </ToggleButton>
    </div>
  );
};

export default withStyle(Header, styles);
