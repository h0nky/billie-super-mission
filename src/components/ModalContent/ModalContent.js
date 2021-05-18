import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const ModalButton = ({ onHandleSubmit }) => (
  <button type="button" onClick={onHandleSubmit}>Update</button>
);

const ModalContent = ({
  onCloseModal, companyName, totalBudget, updateStateAction, budgetSpent,
}) => {
  const [value, setValue] = useState(totalBudget);

  const onHandleChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    if (!Number(value) || value === totalBudget || value < budgetSpent) return;
    updateStateAction(Number(value), companyName);
    onCloseModal();
  };

  return (
    <div className="modal__content">
      <p aria-label="title" className="modal__content-title">{companyName}</p>
      <input aria-label="input" value={value} onChange={onHandleChange} />
      <ModalButton onHandleSubmit={onSubmit} />
    </div>
  );
};

ModalContent.propTypes = {
  companyName: PropTypes.string,
  totalBudget: PropTypes.string,
  budgetSpent: PropTypes.string,
  onCloseModal: PropTypes.func,
  updateStateAction: PropTypes.func,
};

ModalContent.defaultProps = {
  companyName: '',
  totalBudget: '',
  budgetSpent: '',
  onCloseModal: () => {},
  updateStateAction: () => {},
};

ModalButton.propTypes = {
  onHandleSubmit: PropTypes.func,
};

ModalButton.defaultProps = {
  onHandleSubmit: () => {},
};

export default ModalContent;
