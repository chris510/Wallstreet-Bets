import React from 'react';
import { Link } from 'react-router-dom';
import StockIndexItemContainer from './stock_index_item_container';

class StocksIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   intradayData = []
      
    // }
    this.renderStocks = this.renderStocks.bind(this);
  }

  componentDidMount() {
    this.props.fetchStocks();
  }

  renderStocks() {
    let symbols = Object.keys(this.props.stocks);
    return (
      <div className="stock-index-container">
        {symbols.map((symbol) => {
          return (
            <StockIndexItemContainer
              key={symbol}
              symbol={symbol}
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
      </div >
    )
  }
}
export default StocksIndex;