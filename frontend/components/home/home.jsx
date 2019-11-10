import React from 'react';
import { Link } from 'react-router-dom';
import NewsIndex from './news/news_index_container';
import NewsIndexItem from './news/news_index_item';
// import StockIndex from './stock_index';
import StockIndexItem from './stock_index_item';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.renderStocks = this.renderStocks.bind(this);
  }

  componentDidMount() {
    this.props.fetchStocks();
    this.props.fetchNews();
  }

  // componentDidUpdate() {
  //   if (!this.props.currentUser.stocks) {
  //     this.props.fetchStocks();
  //   }
  // }

  renderStocks() {
    let symbols = Object.keys(this.props.stocks);
    return (
      <div className="stock-index-container">
        {symbols.map( (symbol, i) => {
          return (
            <div className="stock-index" key={i}>
              <div className="stock-index-symbol" key={i}>
                {symbol}
              </div>
              <div className="stock-index-shares">
                {this.props.orders[symbol].shares}
              </div>
              <div className="stock-index-current-price">
                62
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    const { stocks, news, orders } = this.props 

    return (
      <div className="home">
        <div className="home-container-1">
          <div className="portfolio-chart">
          </div>
          <div className="news-container">
              <div className="index-title">
                Recent News
              </div>
            {news.map( singleNews => {
              return (
                <div className="news-index-item">
                  <NewsIndexItem
                    key={singleNews.id}
                    url={singleNews.url}
                    source={singleNews.source.name}
                    title={singleNews.title}
                    description={singleNews.description}
                    image={singleNews.urlToImage}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className="home-container-2">
            <div className="stocks-dashboard-container">
              <div className="stock-dashboard">
                <div className="stocks-owned-title">
                  Stocks
                </div>
                  {this.renderStocks()}
              </div> 
            </div>
        </div>
      </div>
    )
  }
}

export default Home;