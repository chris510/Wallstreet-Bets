import React from 'react';
import { Link } from 'react-router-dom';
import { parseFloatToDollars } from '../../util/numbers.util';


class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'BUY',
      shares: '',
      price: 0
    }
    this.setOrderType = this.setOrderType.bind(this);
    this.updateShares = this.updateShares.bind(this);
    this.setLatestPrice = this.setLatestPrice.bind(this);
  }

  componentDidMount(){
    this.setLatestPrice();
  }

  setOrderType() {
    if (this.state.type === 'BUY') {
      this.setState( {type: 'SELL'} );
    } else if (this.state.type === 'SELL') {
      this.setState( {type: 'BUY'});
    };
  };

  updateShares(e) {
    this.setState({
      shares: e.currentTarget.value
    });
  };

  setLatestPrice() {
    if (this.props.stock.intradayData) {
      let lastItem = (this.props.stock.intradayData.length - 1);
      let price = this.props.stock.intradayData[lastItem].close;
      this.setState({
        price: price
      });
    }
  }

  render() {
    return (
      <div className="stock-order-container">
        <div className="stock-order-form-container">
          <div className="stock-order-type"></div>
          <div className="stock-order-stats">
            <form>
              <div className="order-form-header">
                <div>ORDER BUY</div>
                <div>ORDER SELL</div>
              </div>
              <div className="order-form-row-1">
                <h3>Shares</h3>
                <input type="text" className="input-shares" value={this.state.shares} onChange={this.updateShares} placeholder="0"/>
              </div>
              <div className="order-form-row-2">
                <div className="order-form-market">
                  <h3>Market Price</h3>
                </div>
                <div className="order-form-price">
                  <div className="order-form-current-price">
                    {parseFloatToDollars(this.state.price)}
                  </div>
                </div>
              </div>
              <div className="order-form-row-3">
                <h3>Estimated Cost</h3>
                <div className="order-form-cost-4">
                  {parseFloatToDollars(this.state.shares * this.state.price)}
                </div>
              </div>
              <div className="order-form-row-5">
              </div>
              <div className="order-form-row-6">
                <input type="submit" className="order-form-submit" />
              </div>
            </form>
            <footer className="order-form-footer">
              <div className="buying-power">$14723.28 </div>
              <div className="available-buying-power">Buying Power Available</div>
            </footer>
          </div>
          <div className="stock-submit-button-container"></div>
        </div>
        <div className="watch-submit-option"></div>
        <div className="add-watchlist-button">Add To Watchlist</div>
      </div>
    )
  }
};

export default OrderForm;