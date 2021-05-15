import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ onHandleClick, title }) => (
  <div className="button__container">
    <button type="button" onClick={onHandleClick}>{title}</button>
  </div>
);

Button.propTypes = {
  onHandleClick: PropTypes.func,
  title: PropTypes.string,
};

Button.defaultProps = {
  onHandleClick: () => {},
  title: 'Button',
};

export default Button;
