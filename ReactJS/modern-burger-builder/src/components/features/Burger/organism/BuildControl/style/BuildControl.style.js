import { css } from "styled-components";

export default css`
  padding: 5px;
  .labelStyle {
    width: 50px;
    display: inline-block;
  }
  button {
    margin: 5px;
    background-color: transparent;
    color: ${(props) => props.theme.fontColor};
  }
`;
