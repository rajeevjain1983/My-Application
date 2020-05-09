import styled from "styled-components";

export default styled.button`
  padding: 10px 15px;
  background-color: ${(props) => props.theme.secondaryColor};
  border: 1px solid ${(props) => props.theme.colors.common["black"]};
  border-radius: 5px;
`;
