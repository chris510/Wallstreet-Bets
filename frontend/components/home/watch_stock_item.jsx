import React from 'react';
import { Link } from 'react-router-dom';
// import StockItemChart from './stock_item_chart';
import StockMiniChart from './stock_mini_chart';

class WatchStockItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intradayData: [],
      loadingState: true
    };
    this.renderLatestPrice = this.renderLatestPrice.bind(this);
    this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    if (this.props.intradayData && this.props.intradayData.length > 0) {
      this.setData();
    } else {
      this.props.fetchWatchIntradayData(this.props.stock.symbol)
        .then(data => this.setState({
          intradayData: data.intradayData,
          loadingState: false
        }));
    };
  }

  setData() {
    this.setState({
      intradayData: this.props.intradayData,
      loadingState: false
    });
  }

  renderLatestPrice() {
    if (this.props.intradayData) {
      let lastItem = (this.props.intradayData.length - 1);
      let price = this.props.intradayData[lastItem].close;
      return (
        <div className="stock-index-current-price">
          ${price}
        </div>
      )
    }
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
            <StockMiniChart
              intradayData={intradayData}
              loadingState={this.state.loadingState}
            />
          </div>
          {this.renderLatestPrice()}
        </div>
      </Link>
    )
  }
}

export default WatchStockItem;