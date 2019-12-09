import React from 'react';
import { Link } from 'react-router-dom';
import StockIndexItemContainer from './stock_index_item_container';
// import StockIndexItem from './stock_index_item';
import WatchStockItemContainer from './watch_stock_item_container';

class StocksIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   intradayData = []
      
    // }
    this.renderStocks = this.renderStocks.bind(this);
    this.renderWatches = this.renderWatches.bind(this);
  }

  componentDidMount() {
    this.props.fetchStocks();
    this.props.fetchWatchedStocks();
  }

  calculateShares(symbol){
    let orders = Object.keys(this.props.orders);
    let shares = 0;
    orders.forEach(orderSymbol => {
      if (orderSymbol === symbol) {
        shares = shares + this.props.orders[orderSymbol].shares;
      } 
    })
    return shares;
  }

  renderStocks() {
    let symbols = Object.keys(this.props.stocks);
    return (
      <div className="stock-index-container">
        {symbols.map((symbol) => {
          let shares = this.calculateShares(symbol);
          let type = "ownedStock";
          if (shares > 0) {
            return (
              <StockIndexItemContainer
                key={symbol}
                symbol={symbol}
                shares={shares}
                type={type}
              />
            )
          }
        })}
      </div>
    )
  }

  renderWatches() {
    let symbols = Object.keys(this.props.watches);
    return (
      <div className="stock-watch-container">
        {symbols.map((symbol) => {
          let shares = this.calculateShares(symbol);
          let type = "watchedStock";
          return (
            <StockIndexItemContainer
              key={symbol}
              symbol={symbol}
              shares={shares}
              type={type}
            />
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
          {this.renderWatches()}
      </div >
    )
  }
}
export default StocksIndex;