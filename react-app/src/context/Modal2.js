import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal2.css";

const Modal2Context = React.createContext();

export function Modal2Provider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <Modal2Context.Provider value={value}>{children}</Modal2Context.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal2({ onClose, children }) {
  const modalNode = useContext(Modal2Context);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal2">
      <div id="modal2-background" onClick={onClose} />
      <div id="modal2-content">{children}</div>
    </div>,
    modalNode
  );
}
