import styled from "styled-components";

export const CSSVariables = styled.div`
  --color: ${(props) => props.color};
  --button: ${(props) => props.inputColor || "#ecf0f1"};
  --button-houver: ${(props) => props.inputColorVariant || "#bdc3c7"};
  --color-var: ${(props) => props.color || "#2c3e50"};
`;
