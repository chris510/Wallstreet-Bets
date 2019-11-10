import React from 'react';
import { Link } from 'react-router-dom';
import StockIndexItem from './stock_index_item';

class StocksIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderStocks = this.renderStocks.bind(this);
  }

  componentDidMount() {
    this.props.fetchStocks();
  }

  renderStocks() {
    let symbols = Object.keys(this.props.stocks);
    return (
      <div className="stock-index-container">
        {symbols.map((symbol, i) => {
          // const intradaydata = this.props.fetchIntradayData(symbol);
          return (
            <Link to={`/stocks/${symbol}`} className="stock-show-link" >
              <div className="stock-index">
                <div className="stock-index-left">
                  <div className="stock-index-symbol" key={i}>
                    {symbol}
                  </div>
                  <div className="stock-index-shares">
                    {this.props.orders[symbol].shares} shares
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
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="stock-dashboard">
        <div className="stocks-owned-title">
          Stocks
        </div>
          {this.renderStocks()}
        <div className="stocks-watched-title">
          Watched Stocks
        </div>
      </div >
    )
  }
}
export default StocksIndex;