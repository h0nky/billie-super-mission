import React from 'react';
import { render } from 'react-dom';
import HomePage from './components/HomePage';
import Provider from './context/Provider';

const App = () => (
  <Provider>
    <HomePage />
  </Provider>
);

render(<App />, document.getElementById('app-root'));
