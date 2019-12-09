import React from 'react';
import { Link } from 'react-router-dom';
// import StockItemChart from './stock_item_chart';
import StockMiniChart from './stock_mini_chart';
import { parseFloatToDollars } from '../../util/numbers.util';

class StockIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intradayData: [],
      price: 0,
      loadingState: true
    };
    this.renderLatestPrice = this.renderLatestPrice.bind(this);
    this.selectIntradayData = this.selectIntradayData.bind(this);
    // this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    this.props.fetchStockIntradayData(this.props.symbol);
    // if (this.props.intradayData && this.props.intradayData.length > 0) {
    //   this.setState({
    //     intradayData: this.props.intradayData,
    //     loadingState: false
    //   });
    // } else {
    //   this.props.fetchStockIntradayData(this.props.stock.symbol)
    //     .then(data => this.setState({
    //       intradayData: data.intradayData,
    //       loadingState: false
    //     }));
    // };
  }

  selectIntradayData() {
    const { symbol, type } = this.props;
    let intradayData = [];
    if (type === "ownedStock") {
      intradayData = this.props.stocks[symbol].intradayData;
    } else if (type === "watchedStock") {
      intradayData = this.props.watch[symbol].intradayData
    }
    debugger
    return intradayData;
  }

  // renderShares() {
  //   if (this.props.orders[this.props.stock.symbol].shares > 0) {
  //     let shares = 0;
  //     shares = this.props.orders[this.props.stock.symbol].shares
  //     return (
  //       <div className="stock-index-shares">
  //         {shares} shares
  //       </div>
  //     )
  //   };
  // }

  renderLatestPrice() {
    if (this.props.intradayData) {
      let lastItem = (this.props.intradayData.length - 1);
      let newPrice = this.props.intradayData[lastItem].close;
      // this.setState({
      //   price: newPrice
      // })
      return (
        <div className="stock-index-current-price">
          {parseFloatToDollars(newPrice)}
        </div>
      )
    }
  }

  render() {
    const { symbol, shares} = this.props;
    let name = "stock-index-shares";
    if (shares === 0) {
      name = "stock-index-shares-hidden"
    }
    return (
      <Link to={`/stocks/${symbol}`} className="stock-show-link" >
        <div className="stock-index">
          <div className="stock-index-left">
            <div className="stock-index-symbol">
              {symbol}
            </div>
            <div className={name}>
              {shares} shares
            </div>
            {/* <div className="stock-index-current-price">
              {price}
            </div> */}
            {/* {this.renderShares()} */}
          </div>
          <div className="stock-index-chart">
            <StockMiniChart
              intradayData={this.selectIntradayData()}
              // loadingState = {this.state.loadingState}
            />
          </div>
            {this.renderLatestPrice()}
        </div>
      </Link>
    )
  }
}

export default StockIndexItem;