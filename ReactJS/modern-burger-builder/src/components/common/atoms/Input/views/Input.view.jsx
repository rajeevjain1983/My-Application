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
      <label>{label}</label>
      <input type={type} {...input} placeholder={label} {...restProps}></input>
      {touched && error && <span className="error">{error}</span>}
    </div>
  );
};

export default withStyle(Input, styles);
