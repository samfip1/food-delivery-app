import React, { Fragment } from "react";
import ReactDOM from "react-dom";



const Backdrop = (props) => {
  return <div  onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div >
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays"); // [index.html]: <div id="overlays"></div>

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}

      {/* <Backdrop />
      <ModalOverlays>{props.children}</ModalOverlays> */}
    </Fragment>
  );
};

export default Modal;
