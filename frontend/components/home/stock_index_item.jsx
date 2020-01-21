import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import StockItemChart from './stock_item_chart';
import StockMiniChart from './stock_mini_chart';
import { parseFloatToDollars } from '../../util/numbers.util';

const StockIndexItem = props => {
  let [currentIntradayData, setCurrentIntradayData] = useState([]);
  let [price, setPrice] = useState(0);
  let [loadingState, setLoadingState] = useState(true);

  const { symbol, type, shares } = props;
  let name = "stock-index-shares";
      if (type === 'watchedStock') {
        name = "stock-index-shares-hidden"
      }

  useEffect(() => {
    if (type === "ownedStock") {
      props.fetchStockIntradayData(symbol).then(() => {
        removeLoading();
      });
    } else if (type === "watchedStock") {
      props.fetchWatchIntradayData(symbol).then(() => {
        removeLoading();
      });
    }
  }, [])

  useEffect(() => {
    if (price === 0) renderLatestPrice();
  })

  const removeLoading = () => {
    setLoadingState(false)
  }

  const selectIntradayData = () => {
    let intradayData = [];
    if (type === "ownedStock") {
      intradayData = props.stocks[symbol].intradayData;
    } else if (type === "watchedStock") {
      intradayData = props.watches[symbol].intradayData
    }
    // setCurrentIntradayData(intradayData);
    return intradayData;
  }

  const renderLatestPrice = () => {
    let latestPrice = 0;
    let intradayData = [];
    if (type === "ownedStock") {
      intradayData = props.stocks[symbol].intradayData;
    } else if (type === "watchedStock") {
      intradayData = props.watches[symbol].intradayData;
    }

    if (intradayData) {
      latestPrice = intradayData[intradayData.length - 1].close;
    }
    return parseFloatToDollars(latestPrice)
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
        </div>
        <div className="stock-index-chart">
          <StockMiniChart
            intradayData = {selectIntradayData()}
            loadingState = {loadingState}
          />
        </div>
        <div className="stock-index-current-price">
          {renderLatestPrice()}
        </div>
      </div>
    </Link>
  )

}

// class StockIndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       intradayData: [],
//       price: 0,
//       loadingState: true
//     };
//     this.renderLatestPrice = this.renderLatestPrice.bind(this);
//     this.selectIntradayData = this.selectIntradayData.bind(this);
//   }

//   componentDidMount() {
//     const { symbol, type } = this.props  
//     if (type === "ownedStock") {
//       this.props.fetchStockIntradayData(symbol).then(() => {
//         this.removeLoading();
//       });
//     } else if (type === "watchedStock") {
//       this.props.fetchWatchIntradayData(symbol).then(() => {
//         this.removeLoading();
//       });
//     }
//   }

//   removeLoading() {
//     this.setState({
//       loadingState: false
//     })
//   }

//   selectIntradayData() {
//     const { symbol, type } = this.props;
//     let intradayData = [];
//     if (type === "ownedStock") {
//       intradayData = this.props.stocks[symbol].intradayData;
//     } else if (type === "watchedStock") {
//       intradayData = this.props.watches[symbol].intradayData
//     }
//     return intradayData;
//   }

//   renderLatestPrice() {
//     const { symbol, type } = this.props;
    
//     let price = 0;
//     let intradayData = [];
//     if (type === "ownedStock") {
//       intradayData = this.props.stocks[symbol].intradayData;
//     } else if (type === "watchedStock") {
//       intradayData = this.props.watches[symbol].intradayData;
//     }

//     if (intradayData) {
//       price = intradayData[intradayData.length - 1].close;
//     }

//     return parseFloatToDollars(price);
//   }

//   render() {
//     const { symbol, shares, type} = this.props;
//     let name = "stock-index-shares";
//     if (type === 'watchedStock') {
//       name = "stock-index-shares-hidden"
//     }

//     return (
//       <Link to={`/stocks/${symbol}`} className="stock-show-link" >
//         <div className="stock-index">
//           <div className="stock-index-left">
//             <div className="stock-index-symbol">
//               {symbol}
//             </div>
//             <div className={name}>
//               {shares} shares
//             </div>
//           </div>
//           <div className="stock-index-chart">
//             <StockMiniChart
//               intradayData={this.selectIntradayData()}
//               loadingState = {this.state.loadingState}
//             />
//           </div>
//           <div className="stock-index-current-price">
//             {this.renderLatestPrice()}
//           </div>
//         </div>
//       </Link>
//     )
//   }
// }

export default StockIndexItem;