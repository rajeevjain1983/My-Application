import { css } from "styled-components";

const styles = css`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primaryColor},
    ${(props) => props.theme.secondaryColor}
  );
  color: ${(props) => props.theme.secondaryColor};
  margin: 50px;
  justify-content: center;
  display: flex;
  border: 1px solid green;
`;

export default styles;
