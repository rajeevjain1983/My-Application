import { css } from "styled-components";

const styles = css`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primaryColor},
    ${(props) => props.theme.secondaryColor}
  );
  color: ${(props) => props.theme.secondaryColor};
  padding: 10px;
  justify-content: flex-end;
  display: flex;
  align-items: "center";

  .buttonStyle {
    border: 1px solid ${(props) => props.theme.primaryColor};
    border-radius: 30px;
    padding: 5px 10px;
  }

  .linkStyle {
    padding: 5px;
    color: ${(props) => props.theme.fontColor};
  }

  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.fontColor};
    font-size: 12px;
  }
`;

export default styles;
