import React from 'react';
import { Link } from 'react-router-dom';

const StockIndexItem = ( {symbol} ) => {
  return (
    <Link to={`/stocks/${symbol}`}>
      <div className="stock-index-item">
        <h2>{symbol}</h2>
      </div>
    </Link>
  )
}

export default StockIndexItem;