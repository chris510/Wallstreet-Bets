import React from 'react';
import { Link } from 'react-router-dom';
import NewsIndexItem from '../../components/home/news/news_index_item';
import { fetchStockInfo } from '../../util/stock_api_util';

class StockShow extends React.Component {
  constructor(props) {
    super(props);
    // this.checkNewsState = this.checkNewsState.bind(this);
    this.renderNews = this.renderNews.bind(this);
  }

  componentDidMount() {
    this.props.fetchStockNews(this.props.match.params.symbol);
    this.props.fetchStockInfo(this.props.match.params.symbol);
  }

  // componentDidUpdate() {
  //   this.renderNews();
  // }

  // checkNewsState() {
  //   if (this.props.stock.hasOwnProperty('articles')) {
    
  //   }
  // }

  renderNews() {
    debugger
    if (this.props.stock.hasOwnProperty('articles')) {
      const stockNews = this.props.stock.news.articles;
      stockNews.map(singleNews => {
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
      })
    }
  }

  render() {

    // const {currentUser, stock, news, info} = this.props

    return (
      <div className="stock-show-main">
        <div className="stock-show-container-1">
          <div className="stock-show-chart-container">
            <div className="stock-show-chart"></div>
          </div>
          <div className="stock-info-container">
            <div className="stock-info-header">About</div>
            <div className="stock-info-description">
              {/* {info.description} */}
            </div>
            <div className="stock-stats-container">
              <div className="stock-stats-1">
                {/* <div>{info.CEO}</div>
                <div>{info.sector}</div>
                <div>{info.industry}</div>
                <div>{info.exchange}</div> */}
              </div> 
              <div className="stock-stats-2">

              </div>
            </div>
          </div>
          <div className="stock-show-news">
          </div>
        </div>
        <div className="stock-show-container-2">
          <div className="stock-order-container"></div>
          <div className="buying-power"></div>
        </div>
      </div>
    )
  }
};

export default StockShow;