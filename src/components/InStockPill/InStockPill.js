import React from 'react';
import './InStockPill.css';

function InStockPill({ unit_stock }) {
  let status = unit_stock > 0 ? 'in' : 'out';
  let text = unit_stock > 0 ? 'In Stock' : 'No Stock';
  let pillClass = 'pill ' + status;
  let indicatorClass = 'indicator ' + status;

  return (
    <div className={pillClass}>
      <span className={indicatorClass} />
      {text}
    </div>
  );
}

export default InStockPill;
