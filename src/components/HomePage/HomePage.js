import React from 'react';
import CompaniesList from '../CompaniesList';
import './styles.css';

const HomePage = () => (
  <div className="home-page">
    <div className="app-bar">
      <h2>Billie</h2>
      <h3>Mission 2121</h3>
    </div>
    <CompaniesList />
  </div>
);

export default HomePage;
