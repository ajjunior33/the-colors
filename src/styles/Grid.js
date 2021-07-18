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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: ${(props) => props.variant || "#16a085"};
  color: ${(props) => props.color || "#ced6e0"};

  border-radius: 8px;
  margin: 30px 10px;
  font-size: 1.1em;
  font-family: "Nunito Sans", sans-serif;
  font-weight: bold;

  @media (max-width: 640px) {
    max-width: 100%;
    height: 150px;
    margin: 10px 0;
    flex-direction: row;
  }
  svg {
    font-size: 1.4em;
    cursor: pointer;
    color: ${(props) => props.color || "#ced6e0"};
  }
`;

export const ContainerList = styled.section`
  display: flex;
  flex-direction: column;
  .list {
    display: flex;
    flex-direction: row;
  }
  .listage {
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      list-style: none;
      flex-direction: column;
      li {
        font-size: 1.3em;
        cursor:pointer;
      }
    }
  }
`;

export const ContainerColumn = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Color = styled.li`
  width: 300px;
  height: 50px;
  margin: 5px 0;
  border-radius: 8px;
  background-color: ${(props) => props.color};

  display: flex;
  flex-direction: row;
  align-items: center;
  color: #f1f2f6;
  justify-content: space-around;
`;

