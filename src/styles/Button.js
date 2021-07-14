import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 8px 15px;
  border: 0;
  border-radius: 5px;

  background-color: ${(props) => props.inputColor || "#ecf0f1"};
  border: 1px solid ${(props) => props.inputColorVariant || "#bdc3c7"};
  box-shadow: inset 2px 0px 5px
    ${(props) => props.inputColorVariant || "#bdc3c7"};

  transition: 500ms all;

  color: ${(props) => props.color || "#2c3e50"};

  cursor: pointer;

  svg {
    margin-right: 5px;
  }
  &:hover {
    filter: brightness(90%);
    box-shadow: inset 2px 0px 10px
      ${(props) => props.inputColorVariant || "#bdc3c7"};
  }
`;

export const ButtonBlock = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width:100%;
  padding: 8px 15px;
  border: 0;
  border-radius: 5px;

  background-color: ${(props) => props.inputColor || "#ecf0f1"};
  border: 1px solid ${(props) => props.inputColorVariant || "#bdc3c7"};
  box-shadow: inset 2px 0px 5px
    ${(props) => props.inputColorVariant || "#bdc3c7"};

  transition: 500ms all;

  color: ${(props) => props.color || "#2c3e50"};

  cursor: pointer;

  svg {
    margin-right: 5px;
  }
  &:hover {
    filter: brightness(90%);
    box-shadow: inset 2px 0px 10px
      ${(props) => props.inputColorVariant || "#bdc3c7"};
  }
`;
