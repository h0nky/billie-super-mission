/* eslint-disable no-undef */
import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

const Portal = ({ children }) => {
  const modalRoot = document.getElementById('modal-root');
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <div className="portal">
      {children}
    </div>,
    elRef.current,
  );
};

export default Portal;
