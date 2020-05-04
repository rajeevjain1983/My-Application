import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import withStyle from "../../../../common/hoc/withStyle";
import styles from "../styles/header.style";
import { ToggleButton } from "../../../../common/atoms";
const Header = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={props.className}>
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
