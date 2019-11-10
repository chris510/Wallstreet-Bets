import React from 'react';
import { Link } from 'react-router-dom';

const StockIndexItem = ( {symbol, orders} ) => {
  return (
    <Link to={`/stocks/${symbol}`}>
      <div className="stock-index-item">
        <h2>{symbol}</h2>
        <h2>{orders}</h2>
      </div>
    </Link>
  )
}

// class StockIndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <Link to={`/stocks/${this.props.symbol}`}>
//         <div className="stock-index-item">
//           <h2>{symbol}</h2>
//           {/* <h2>{shares}</h2> */}
//         </div>
//       </Link>
//     )
//   }
// }

export default StockIndexItem;