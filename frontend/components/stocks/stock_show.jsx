import React from 'react';
import { Link } from 'react-router-dom';
import NewsIndexItem from '../../components/home/news/news_index_item';
import { fetchStockInfo } from '../../util/stock_api_util';

class StockShow extends React.Component {
  constructor(props) {
    super(props);;
  }

  componentDidMount() {
    this.props.fetchStockNews(this.props.match.params.symbol);
    this.props.fetchStockInfo(this.props.match.params.symbol);
    // debugger
    // const symbol = this.props.match.params.symbol;
    // if (!this.props.stock) {
      // this.props.fetchStock(symbol);
    // }
    }

  componentDidUpdate(prevProps) {
    // if (this.props.match.params.symbol !== prevProps.match.params.symbol) {
    //   const symbol = this.props.match.params.symbol;
    //   this.props.fetchStock(symbol);
    // }
  }

  // renderNews() {
  //   debugger
  //   if (this.props.stock.hasOwnProperty('articles')) {
  //     const stockNews = this.props.stock.news.articles;
  //     stockNews.map(singleNews => {
  //       return (
  //         <div className="news-index-item">
  //           <NewsIndexItem
  //             key={singleNews.id}
  //             url={singleNews.url}
  //             source={singleNews.source.name}
  //             title={singleNews.title}
  //             description={singleNews.description}
  //             image={singleNews.urlToImage}
  //           />
  //         </div>
  //       )
  //     })
  //   }
  // }

  render() {

    const {currentUser, stock, news } = this.props
    // if (stock.hasOwnProperty('news') && stock.hasOwnProperty('info')) {
      return ( 
        <div className="stock-show-main">
          <div className="stock-show-container-1">
              <div className="stock-show-chart"></div>
              <div className="stock-info-container">
                <div className="stock-info-header">About</div>
                <div className="stock-info-description">
                  {/* {stock.info.description} */}
                </div>
                <div className="stock-stats-container">
                  <div className="stock-info-1">
                    {/* <div>{stock.info.CEO}</div>
                    <div>{stock.info.sector}</div>
                    <div>{stock.info.industry}</div>
                    <div>{stock.info.exchange}</div> */}
                  </div> 
                  <div className="stock-stats-1">
                      {/* <div>MARKET CAP</div>
                      <div>PRICE EARNINGS RATIO</div>
                      <div>DIVIDENED YIELD</div>
                      <div>AVERAGE VOLUME</div> */}
                  </div>
                </div>
              </div>
              <div className="stock-show-news-container">
                <div className="index-title">
                  Recent News
                  </div>
                {news.map(singleNews => {
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
          <div className="stock-show-container-2">
            <div className="stock-order-container"></div>
            <div className="buying-power"></div>
          </div>
        </div>
      )
  //   } else {
  //     return (
  //       <div>USER DOESN'T HAVE THE STOCKS AND NEWS IN THE STATE</div>
  //     )
  //   }  
  }
};

export default StockShow;