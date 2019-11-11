import React from 'react';
import { Link } from 'react-router-dom';

class StockIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { orders, stock } = this.props;
    return (
      <Link to={`/stocks/${stock.symbol}`} className="stock-show-link" >
        <div className="stock-index">
          <div className="stock-index-left">
            <div className="stock-index-symbol">
              {stock.symbol}
            </div>
            <div className="stock-index-shares">
              {orders[stock.symbol].shares} shares
                </div>
          </div>
          <div className="stock-index-chart">
            {/* <StockIndexItemChart
                    intradayData={intradayData}
                  /> */}
          </div>
          <div className="stock-index-current-price">
            $162.43
              </div>
        </div>
      </Link>
      // <Link to={`/stocks/${this.props.symbol}`}>
      //   <div className="stock-index-item">
      //     <h2>{symbol}</h2>
      //     {/* <h2>{shares}</h2> */}
      //   </div>
      // </Link>
    )
  }
}

export default StockIndexItem;