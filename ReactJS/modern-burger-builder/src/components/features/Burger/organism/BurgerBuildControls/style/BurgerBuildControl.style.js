import { css } from "styled-components";

export default css`
  width: 100%;
  background-color: ${(props) => props.theme.colors.orange["1000"]};
  margin-bottom: 100px;
  text-align: center;
  padding: 10px;

  .buildControl {
    width: 200px;
    margin: 0 auto;
  }
`;
