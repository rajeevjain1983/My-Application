import React from "react";
import withStyle from "../../../hoc/withStyle";
import styles from "../style/Select.style";

const Select = ({
  className,
  input,
  meta: { touched, error },
  children,
  ...restProps
}) => {
  console.log("error", error);
  return (
    <div className={className}>
      <select {...input} {...restProps}>
        {children}
      </select>
      {touched && error && <span className="error">{error}</span>}
    </div>
  );
};

export default withStyle(Select, styles);
