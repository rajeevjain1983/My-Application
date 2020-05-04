import { css } from "./node_modules/styled-components";

const styles = css`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primaryColor},
    ${(props) => props.theme.secondaryColor}
  );
  color: ${(props) => props.theme.secondaryColor};
  padding: 10px;
  margin: 50px;
  justify-content: flex-end;
  display: flex;
  .buttonStyle {
    border: 1px solid ${(props) => props.theme.primaryColor};
    border-radius: 30px;
    padding: 5px 10px;
  }
`;

export default styles;
