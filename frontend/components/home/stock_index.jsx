import React from 'react';
import { Link } from 'react-router-dom';
import StockIndexItemContainer from './stock_index_item_container';
// import StockIndexItem from './stock_index_item';
class StocksIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   intradayData = []
      
    // }
    this.renderStocks = this.renderStocks.bind(this);
    this.renderWatches = this.renderWatches.bind(this);
    this.hideStocks = this.hideStocks.bind(this);
  }

  componentDidMount() {
    // this.props.fetchStocks();
    // this.props.fetchWatchedStocks();
  }

  calculateShares(symbol){
    let orders = Object.values(this.props.orders);
    let shares = 0;
    orders.forEach(order => {
      if (order.symbol === symbol) {
        if (order.order_type === "BUY") {
          shares += order.shares;
        } else {
          shares -= order.shares;
        }
      } 
    })
    return shares;
  }

  renderStocks() {
    let symbols = Object.values(this.props.orders);
    symbols = symbols.map(order => order.symbol);
    let uniqueSymbols = new Set(symbols);
    symbols = [...uniqueSymbols];
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

  hideStocks() {
    const stockDashboard = document.querySelector('.stocks-dashboard-container');
    const homeContainer = document.querySelector('.home-container-2');
    if (stockDashboard.classList.contains("open")) {
      stockDashboard.classList.remove("open");
      // homeContainer.classList.remove("show");
    }
  }

  render() {
    return (
      <div className="stock-dashboard">
        <div className="stocks-owned-title">
          Stocks
        </div>
        <div className="hamburger-btn close" onClick={this.hideStocks}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
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