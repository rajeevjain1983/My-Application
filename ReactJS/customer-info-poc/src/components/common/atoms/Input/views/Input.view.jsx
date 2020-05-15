import React from "react";
import withStyle from "../../../hoc/withStyle";
import styles from "../style/Input.style";

const Input = ({
  className,
  label,
  type,
  input,
  meta: { touched, error },
  ...restProps
}) => {
  return (
    <div className={className}>
      <input type={type} {...input} {...restProps}></input>
      {touched && error && <span className="error">{error}</span>}
    </div>
  );
};

export default withStyle(Input, styles);
