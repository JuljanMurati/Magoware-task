import React from "react";
import "../../index.css";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2 className="modal-title">{props.title}</h2>
        <div>{props.children}</div>
        <div className="button-container">
          <button onClick={() => props.setIsOpen(false)}>Close</button>
          <button onClick={props.onSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
