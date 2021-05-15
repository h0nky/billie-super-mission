/* eslint-disable no-undef */
import React from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

const Modal = (props) => {
  console.log(props);
  return createPortal(
    <div className="modal" />,
    document.getElementById('modal-root'),
  );
};

export default Modal;
