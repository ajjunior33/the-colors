import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  position: relative;
  width: 100%;
  max-width: 200px;
  height: 70vh;
  padding: 15px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.variant || "#16a085"};
  color: ${(props) => props.color || "#FFF"};

  border-radius: 8px;
  margin: 30px 10px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: bold;

  @media (max-width: 640px) {
    max-width: 100%;
    height: 150px;
    margin: 10px 0;
  }
`;
