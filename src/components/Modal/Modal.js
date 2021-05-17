/* eslint-disable no-undef */
import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

let modalRoot = document.getElementById('modal-root');
if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
}

const Modal = ({ children, onClose }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  const onKeyDownClose = (e) => {
    if (e.keyCode === 27) {
      e.preventDefault();
      onClose();
    }
  };

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', (e) => onKeyDownClose(e));
    return () => document.removeEventListener('keydown', (e) => onKeyDownClose(e));
  }, []);

  return createPortal(
    <div className="modal">
      {children}
    </div>,
    elRef.current,
  );
};

export default Modal;
