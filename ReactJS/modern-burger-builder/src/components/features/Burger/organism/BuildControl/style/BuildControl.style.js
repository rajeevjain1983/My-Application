import { css } from "styled-components";

export default css`
  .labelStyle {
    width: 50px;
    display: inline-block;
    padding: 5px;
  }
  button {
    background-color: transparent;
    color: ${(props) => props.theme.fontColor};
  }
`;
