import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import './styles.css';

const CompaniesListItem = ({
  companyName, purchaseDate, totalBudget, budgetSpent, budgetLeft,
}) => {
  const [isOpen, setOpen] = useState(false);

  const onHandleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <li
      role="presentation"
      className="companies-list__item"
      onClick={() => onHandleClick()}
    >
      <span>{companyName}</span>
      <span>{purchaseDate}</span>
      <span>{totalBudget}</span>
      <span>{budgetSpent}</span>
      <span>{budgetLeft}</span>
      {isOpen && (
        <Modal companyName={companyName} budget={totalBudget} />
      )}
    </li>
  );
};

CompaniesListItem.propTypes = {
  companyName: PropTypes.string,
  purchaseDate: PropTypes.string,
  totalBudget: PropTypes.string,
  budgetSpent: PropTypes.string,
  budgetLeft: PropTypes.string,
};

CompaniesListItem.defaultProps = {
  companyName: '',
  purchaseDate: '',
  totalBudget: 0,
  budgetSpent: 0,
  budgetLeft: 0,
};

export default CompaniesListItem;
