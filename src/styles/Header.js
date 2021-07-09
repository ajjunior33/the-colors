import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  div {
    margin: 10px 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    svg {
      margin: 0 5px;
      font-size: 1.5em;
    }
    @media(max-width:640px){
      margin: 15px auto;
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;

  }
`;
