import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import ModalContent from '../ModalContent';
import Context from '../../context/Context';
import './styles.css';

const CompaniesListItem = ({
  companyName, purchaseDate, totalBudget, budgetSpent, budgetLeft,
}) => {
  const [state, setState] = useState(false);

  const modalStateChange = () => {
    setState(!state);
  };

  return (
    <>
      <li
        role="presentation"
        className="companies-list__item"
        onClick={modalStateChange}
      >
        <span>{companyName}</span>
        <span>{purchaseDate}</span>
        <span>{totalBudget}</span>
        <span>{budgetSpent}</span>
        <span>{budgetLeft}</span>
      </li>
      {state && (
        <Modal onClose={modalStateChange}>
          <Context.Consumer>
            {(context) => (
              <ModalContent
                companyName={companyName}
                totalBudget={totalBudget}
                budgetSpent={budgetSpent}
                onCloseModal={modalStateChange}
                updateStateAction={context.updateBudget}
              />
            )}
          </Context.Consumer>
        </Modal>
      )}
    </>
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
