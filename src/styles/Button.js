import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 15px;
  border: 0;
  border-radius: 5px;

  background-color: ${(props) => props.inputColor || "#f1f2f6"};
  border: 1px solid ${(props) => props.inputColorVariant || "#ced6e0"};
  box-shadow: inset 2px 0px 5px
    ${(props) => props.inputColorVariant || "#ced6e0"};

  transition: 500ms all;

  color: ${(props) => props.color || "#2f3542"};

  cursor: pointer;

  &:hover {
    /* filter: brightness(90%); */
    background-color:#ced6e0;
    box-shadow: inset 2px 0px 10px
      ${(props) => props.inputColorVariant || "#ced6e0"};
  }
`;
