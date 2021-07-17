import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .comum {
    margin: 10px 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    svg {
      margin: 0 5px;
      font-size: 1.5em;
    }
    @media (max-width: 640px) {
      margin: 15px auto;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }

  #bloco_usuario {
    display: flex;
    flex-direction: row;
    justify-content: flex-end !important;
    align-items: center;
    @media (max-width: 640px) {
      position: absolute;
      top: 20px;
      right: 10px;
    }
  }

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-bottom: 15px;
    img {
      width: 80px;
    }
    strong {
      font-size: 2em;
      margin-left: 20px;
    }
  }
`;
