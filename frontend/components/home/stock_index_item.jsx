import React from 'react';

const StockIndexItem = ( {symbol} ) => {
  return (
    <div className="stock-index-item">
      <h2>{symbol}</h2>
    </div>
  )
}

export default StockIndexItem;