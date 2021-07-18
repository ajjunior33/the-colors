// import { useState } from "react";
import { FiX } from "react-icons/fi";

import { Button } from "../styles/Button";

import { Modal } from "../styles/Modal";
const ModalComponent = (props) => {
  if (props.showModal === false) {
    return null;
  }

  return (
    <Modal>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title">{props.title || "Modal Title"}</div>
          <FiX onClick={props.onClose} className="buttonClose" />
        </div>
        <div className="modal-body">
          {props.children || "This is modal content"}
        </div>
        <div className="modal-footer">
          {props.closed === true && (
            <Button inputColor="#f90b19" inputColorVariant="#f90b19" color="#f1f2f6" onClick={props.onClose}>
              Fechar
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export { ModalComponent };
