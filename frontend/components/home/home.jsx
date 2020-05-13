import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsIndexItem from './news/news_index_item';
import StockIndexContainer from "./stock_index_container";
import PortfolioContainer from './portfolio_container';

const Home = (props) => {

  useEffect(() => {
    props.fetchUserStocks().then(() => props.fetchStocks()); 
    props.fetchNews();
  }, []);

  return (
    <div className="home">
      <div className="home-container-1">
          <PortfolioContainer
            // portfolio={this.props.portfolio}
          />
        <div className="news-container">
            <div className="index-title">
              Recent News
            </div>
          {props.news.map( (singleNews, idx) => {
            return (
              <div className="news-index-item" key={idx}  >
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
            <StockIndexContainer />
          </div>
      </div>
    </div>
  )
}

export default Home;