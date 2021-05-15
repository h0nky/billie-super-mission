import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Modal = ({
  onCloseModal, companyName, totalBudget, updateStateAction, budgetSpent,
}) => {
  const [value, setValue] = useState(totalBudget);

  const onHandleChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    if (value !== totalBudget && value > budgetSpent) {
      updateStateAction(Number(value), companyName);
      onCloseModal();
    }
  };

  return (
    <div className="modal__content">
      <h2>{companyName}</h2>
      <input value={value} onChange={(e) => onHandleChange(e)} />
      <button type="button" onClick={onSubmit}>Submit</button>
    </div>
  );
};

Modal.propTypes = {
  companyName: PropTypes.string,
  totalBudget: PropTypes.string,
  budgetSpent: PropTypes.string,
  onCloseModal: PropTypes.func,
  updateStateAction: PropTypes.func,
};

Modal.defaultProps = {
  companyName: '',
  totalBudget: '',
  budgetSpent: '',
  onCloseModal: () => {},
  updateStateAction: () => {},
};

export default Modal;
