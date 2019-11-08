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
        <div>
          <li>{stock.name}</li>
          <li>{stock.symbol}</li>
        </div>
      )
    })
    return (
      <div className="home">
        <div className="home-container-1">
          <div className="portfolio-chart">

            {stock}
          </div>
          <div className="news">

          </div>
        </div>
        <div className="home-container-2">
          <div className="watchlist">
            WATCHLIST
          </div>
        </div>
      </div>
    )
  }
}

export default Home