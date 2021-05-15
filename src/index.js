/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import HomePage from './components/HomePage';
import Provider from './context/Provider';
import '../fonts/index.css';

const App = () => (
  <Provider>
    <HomePage />
  </Provider>
);

render(<App />, document.getElementById('app-root'));
