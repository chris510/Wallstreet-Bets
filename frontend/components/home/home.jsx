import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStocks();
  }

  render() {
    const { stocks } = this.props 
    const stock = stocks.map( stock => {
      return (
        <div className="stocks-owned">
          <li>{stock.name}</li>
        </div>
      )
    })
    return (
      <div className="home">
        <div className="home-container-1">
          <div className="portfolio-chart">

          </div>
          <div className="news">

          </div>
        </div>
        <div className="home-container-2">
          <div className="watchlist-container">
            <div className="stocks-owned-container">
            <div className="stock-list-header">
              Stocks
            </div> 
              {stock}
            <div className="watchlist-header">
              WatchList
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home