import { css } from "styled-components";

export default css`
  width: 100%;
  margin: 0px auto;
  background-color: rgb(246, 246, 239);
  box-sizing: border-box;
  @media (min-width: 768px) {
    width: 85%;
  }

  .moreLink {
    color: rgb(255, 102, 0);
    text-decoration: none;
    display: block;
    padding: 10px 10px 10px 112px;
    font-size: 12pt;
  }
`;
