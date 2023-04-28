import React from 'react';
import './NavigationBar.css';

function NavigationBar({ handleClear }) {
  return (
    <nav className="navigation">
      <button onClick={handleClear} className="brand-name">
        <img
          src="http://127.0.0.1:8080/images/store-logo.png"
          alt="Website Logo"
        />
      </button>
    </nav>
  );
}

export default NavigationBar;
