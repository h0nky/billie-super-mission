import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
  >
    <h1>
      Hello World from
      {' '}
      <a href="https://www.polynique.com">Polynique!</a>
    </h1>
  </div>
);

render(<App />, document.getElementById('app'));
