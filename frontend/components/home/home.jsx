import React from 'react';
import { Link } from 'react-router-dom';
import NewsIndexItem from './news-index-item';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStocks();
    this.props.fetchNews();
    // debugger
  }

  render() {
    const { stocks, news } = this.props 
    // debugger
    const stock = stocks.map( stock => {
      return (
        <div className="stocks-owned">
          <li>{stock.name}</li>
        </div>
      )
    })

    // const singleNews = news.map( oneNews => {
    //   return (
    //     <div>
    //       {oneNews}
    //     </div>
    //   )
    // })

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