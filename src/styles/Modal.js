import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(47, 53, 66, 0.6);

  display: flex;
  justify-content:center;
  align-items:center;
  z-index: 5000;

  margin: 0 auto !important;

  .modal-content {
    margin: 0 0 !important;

    width: 580px;
    background-color: #f1f2f6;
    border: 2px solid rgba(47, 53, 66, 0.6);
    box-shadow: 1px 1px 15px rgba(47, 53, 66, 0.6);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .modal-title {
    margin: 0;
    color: #2f3542;
  }
  .modal-body {
    margin: 0 auto;

    padding: 10px;
    width: 100%;
    border-top: 1px solid #ced6e0;
    border-bottom: 1px solid #ced6e0;
  }
  .modal-header {
    width: 100%;
    margin: 10px 0 10px auto;
    padding: 10px 15px;

    display: flex;
    align-items: start;
    justify-content: space-between;

    font-weight: bold;
    font-size: 1.1em;
    .buttonClose {
      cursor: pointer;
      color: #2f3542;
    }
  }
  .modal-footer {
    margin: 10px 0 auto;
    width: 100%;
    padding: 10px;

    display: flex;
    justify-content: flex-end;
  }
`;
