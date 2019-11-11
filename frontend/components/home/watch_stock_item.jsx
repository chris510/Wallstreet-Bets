import React from 'react';
import { Link } from 'react-router-dom';
import StockIndexItemChart from './stock_index_item_chart';

class WatchStockItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intradayData: []
    };
  }

  componentDidMount() {
    // debugger
    this.props.fetchWatchIntradayData(this.props.stock.symbol)
  }

  render() {
    const { stock, intradayData } = this.props;
    return (
      <Link to={`/stocks/${stock.symbol}`} className="stock-show-link" >
        <div className="stock-index">
          <div className="stock-index-left">
            <div className="stock-index-symbol">
              {stock.symbol}
            </div>
          </div>
          <div className="stock-index-chart">
            <StockIndexItemChart
              intradayData={intradayData}
            />
          </div>
          <div className="stock-index-current-price">
            $162.43
          </div>
        </div>
      </Link>
    )
  }
}

export default WatchStockItem;