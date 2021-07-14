import styled from "styled-components";

export const Input = styled.input`
  width: 80%;
  border-radius: 5px;
  border: 0;
  padding: 8px 5px;

  background-color: #ecf0f1;
  border: 1px solid #bdc3c7;
  color: #2c3e50;
`;
export const InputControl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  Input{
    width:75%;
    margin:0 10px;
  }
  Button{
    width:20%;
  }
`;
