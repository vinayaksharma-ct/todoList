import React from 'react';
import './style.css';

const AppFromMf1 = ({ showResults }) => {
  return (
    <div className="mf1-header">
      <h1>{showResults ? 'Final Result' : 'TODO LIST'}</h1>
    </div>
  );
};

export default AppFromMf1;
