import styled from "styled-components";

export const DropdownPanel = styled.div`
  position: relative;
  width: 100%;
  border: 2px solid #57606f;
  padding: 10px 25px;
  border-radius: 8px;
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    color: #57606f;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 40px;
  width: 380px;
  border-radius: 8px;
  z-index: 1000;
  background-color: #f1f2f6;
  padding: 30px;

  display: flex;
  flex-direction: column !important;
  border: 1px solid rgba(47, 53, 66, .6);
  box-shadow: 1px 1px 15px rgba(47, 53, 66, 0.4);
  span {
    width: 90%;
    background-color: #ced6e0;
    color: #2f3542;
    padding: 5px;
    font-weight: bold;
    margin: 5px;
    border-radius: 8px;
  }
  @media (max-width: 640px) {
    width: 300px;
  }
`;
export const DropdownItem = styled.button`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 10px 5px;
  text-align: center;
  font-size: 1.1em;
  font-weight: bold;
  transition: 500ms;
  background-color: #f1f2f6;
  color: #2f3542;
  border: none;

  border-radius: 8px;

  &:hover {
    background-color: #ced6e0;
  }
`;
