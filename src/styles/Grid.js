import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  position:relative;
  width: 100%;
  max-width: 200px;
  height: 70vh;
  padding: 15px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color:  ${(props) => props.variant || "#16a085"};
  color: ${(props) => props.color || "#FFF"};

  border-radius: 8px;
  margin: 30px 10px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: bold;
  @media (max-width: 0px) {
    max-width: 180px;
  }
  @media (max-width: 576px) {
    max-width: 220px;
  }
  @media (max-width: 768px) {
    max-width: 260px;
  }
  @media (max-width: 992px) {
    max-width: 300px;
  }
  @media (max-width: 1200px) {
    max-width: 340px;
  }
`;
