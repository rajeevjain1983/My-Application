import { css } from "styled-components";

export default css`
  padding: 10px;
  display: flex;
  padding-left: 30px;
  font-size: 12pt;
  color: #000000;
  /* border: 1px solid black; */
  background-color: ${(props) =>
    props.rowNumber % 2 === 0 ? "#DADAD3" : "transparent"};

  .wrap {
    flex-wrap: wrap;
  }
  .alignTop {
    align-items: flex-start !important ;
  }
  .marginRight {
    margin-right: 5px;
  }

  .colorGray {
    color: #828282;
    font-size: 8pt;
  }
  .comments {
    min-width: 50px;
  }
  .upVotes {
    min-width: 30px;
    padding-right: 4px;
    /* display: flex;
    align-items: center; */
    /* border: 1px solid black; */
  }
  .col {
    display: flex;
    align-items: center;
  }

  .link {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 8pt;
  }
  .link:focus {
    border: none;
    outline: none;
  }

  .voteArrow {
    /* border: 1px solid black; */
    margin-left: 4px;
    background-size: 10px;
    width: 10px;
    height: 10px;
    display: inline-block;
    background-image: url("grayarrow2x.gif");
  }
`;
