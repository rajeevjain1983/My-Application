import React from "react";
import { Notch, ToggleWrapper } from "../style/ToggleButton.style";

const ToggleButton = ({
  active,
  onToggle,
  children,
  disabled,
  className,
  fullWidth,
  ...otherProps
}) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch active={active} />
    </ToggleWrapper>
  );
};

export default ToggleButton;
