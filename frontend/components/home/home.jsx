import React from 'react';
import { Link } from 'react-router-dom';
import NewsIndexItem from './news/news_index_item';
import StockIndexContainer from "./stock_index_container";
import PortfolioContainer from './portfolio_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchUserPortfolios();
    this.props.fetchStocks();
    this.props.fetchUserStocks(); 
    this.props.fetchNews();
  }

  render() {
    const { news } = this.props 
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
            {news.map( singleNews => {
              return (
                <div className="news-index-item" >
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
              {/* <StockIndexContainer /> */}
            </div>
        </div>
      </div>
    )
  }
}

export default Home;