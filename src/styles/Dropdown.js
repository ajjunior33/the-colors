import styled from "styled-components";

export const DropdownPanel = styled.div`
  position: relative;
  padding: 0 10px;
  border-radius: 8px;
  .iconDropdown{
    cursor:pointer;
    font-size: 1.3em;
    color:#2f3542;
  }
`;

export const DropdownList = styled.div`
  position: absolute;
  top: 40px;
  right:0px;
  width: 380px;
  border-radius: 8px;
  z-index: 1000;
  background-color: #f1f2f6;
  padding: 30px;

  display: flex;
  flex-direction: column;
  border: 1px solid rgba(47, 53, 66, 0.6);
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
  .DropdownItem {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

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
  }
  @media (max-width: 640px) {
    width: 300px;
  }
`;
