import React from 'react';
import CompaniesListItem from '../CompaniesListItem';
import Context from '../../context/Context';
import * as constants from './constants';
import './styles.css';

const toGermanFormat = (value) => Number(value).toLocaleString('de-DE', { minimumFractionDigits: 2 });

const {
  NAME, DATA, TOTAL, SPENT, LEFT,
} = constants;

const CompaniesList = () => (
  <>
    <ul className="companies-list__header">
      {[NAME, DATA, TOTAL, SPENT, LEFT].map((item) => <li key={item}>{item}</li>)}
    </ul>
    <Context.Consumer>
      {(context) => (
        <ul className="companies-list">
          {context.companies.map((item) => (
            <CompaniesListItem
              key={item.id}
              companyName={item.name}
              purchaseDate={item.date_of_first_purchase}
              totalBudget={toGermanFormat(item.budget)}
              budgetSpent={toGermanFormat(item.budget_spent)}
              budgetLeft={toGermanFormat(item.budget - item.budget_spent)}
            />
          ))}
        </ul>
      )}
    </Context.Consumer>
  </>
);

export default CompaniesList;
