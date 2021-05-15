import React from 'react';
import CompaniesListItem from '../CompaniesListItem';
import Context from '../../context/Context';
import './styles.css';

const toGermanFormat = (value) => Number(value).toLocaleString('es-ES', { minimumFractionDigits: 2 });

const CompaniesList = () => (
  <>
    <ul className="companies-list__header">
      {['name', 'date', 'total', 'spent', 'left'].map((item) => <li key={item}>{item}</li>)}
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
