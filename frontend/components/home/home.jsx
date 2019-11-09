import React from 'react';
import { Link } from 'react-router-dom';
import NewsIndexItem from './news_index_item';
import StockIndexItem from './stock_index_item';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStocks();
    this.props.fetchNews();
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
                {stocks.map( stock => {
                  return (
                    <div className="stocks-index-item-container">
                      <StockIndexItem
                        key={stock.id}
                        symbol={stock.symbol}
                        orders
                      />
                    </div>
                  )
                })}
              </div> 
            </div>
        </div>
      </div>
    )
  }
}

export default Home;