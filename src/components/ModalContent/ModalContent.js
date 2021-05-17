import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
      <p className="modal__content-title">{companyName}</p>
      <input value={value} onChange={onHandleChange} />
      <button type="button" onClick={onSubmit}>Submit</button>
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
