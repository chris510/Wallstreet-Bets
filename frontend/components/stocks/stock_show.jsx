import React from 'react';
import { Link } from 'react-router-dom';
import NewsIndexItem from '../../components/home/news/news_index_item';

class StockShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchStockNews(this.props.match.params.symbol)
  }

  render() {

    const { stockNews } = this.props

    return (
      <div className="stock-show-main">
        <div className="stock-show-container-1">
          <div className="stock-show-chart-container">
            <div className="stock-show-chart"></div>
          </div>
          <div className="stock-info-container">
            <div className="stock-info-header"></div>
            <div className="stock-info-description"></div>
            <div className="stock-stats-container">
              <div className="stock-stats"></div>
            </div>
          </div>
          <div className="stock-show-news">
            {/* {stockNews.map( singleNews => {
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
            })} */}
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