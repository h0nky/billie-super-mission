import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './styles.css';

const ModalContent = ({
  onCloseModal, companyName, totalBudget, updateStateAction, budgetSpent,
}) => {
  const [value, setValue] = useState(totalBudget);

  const onHandleChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    if (value === totalBudget || value < budgetSpent) return;
    updateStateAction(Number(value), companyName);
    onCloseModal();
  };

  return (
    <div className="modal__content">
      <h2 className="modal__content-title">{companyName}</h2>
      <input value={value} onChange={(e) => onHandleChange(e)} />
      <div className="modal__content-buttons">
        <Button title="Save" onHandleClick={onSubmit} />
      </div>
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

export default ModalContent;
