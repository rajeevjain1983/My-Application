import { css } from "styled-components";

export default css`
  width: 400px;
  margin: 10px auto;
  padding: 20px;
  background-color: white;
  overflow: scroll;

  .field-container {
    margin: 30px 0;
  }

  .field-container > label {
    font-size: 18px;
    font-weight: bold;
  }
  .field {
    width: 300px;
    margin-top: 5px;
    /* border: 1px solid black; */
  }
  .btn-Container {
    width: 300px;
    display: flex;
  }
  .radio-container {
    width: 100%;
    input[type="radio"] {
      margin: 10px 10px 10px 5px;
    }
  }

  .btnCancel {
    margin-left: 5px;
  }
`;
