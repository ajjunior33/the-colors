import styled from "styled-components";
export const TextDanger = styled.p`
  color: #e74c3c;
  font-weight: ${(props) => (props.strong ? 400 : "bold")};
  font-size: 1em;
`;
